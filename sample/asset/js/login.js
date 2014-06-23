function regiBtn(){
	$("#login_form").attr('action', './regist.html');
	//console.log($("#login_form").attr('action'));
	$("#login_form").submit();
}
function loginBtn(){
	$.ajax({
		type:"POST", 
		url:"./asset/php/signin.php", 
		data:{
			"data_id":$("#lgn_id").val(), 
			"data_pwd":$("#lgn_pwd").val()
		}, 
		success: function(respose){
			//alert(respose);
			//console.log(respose);
			if(respose == 'success'){
				location.href = './main.html';
				//$('#login_form').attr('action', './main.html');
				//s$('#login_form').submit();
				//$.cookie($("#lgn_id").val(), 'first', {expire: 15, path: '/', domain: '', secure: true});			
			}
		}
	});	
}
function init(){
	$(document).ready(function(){
		$('#whole_center_container').delay(500).fadeIn(1000);
	});
	//check login

	//confirm connect db

	//if regist button click. event
	//
	$("#btn_regi").click(function(){
		regiBtn();
	});
	$("#btn_sign").click(function(){
		loginBtn();
	});
	$("input").keypress(function(e){
		if(e.keyCode == 13){
			loginBtn();
		}
	});
}