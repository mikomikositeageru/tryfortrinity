function regist(){
	$.ajax({
		type:"POST",
		url:"./asset/php/lngregit.php",
		data:{
			"data_id":$("#text_id").val(),
			"data_pwd":$("#text_pwd").val()
		}, success: function(respose){
			//alert(respose);
			console.log(respose);
			if(respose == 'success'){
				alert(respose);
				$("#regist_form").attr('action', './index.html');
				$("#regist_form").submit();
			} else if(respose == 'error_id_exist') {
				alert("already exist ID");
			} else if(respose == 'error_id_len'){
				alert("ID.length > 4. OK?");
			} else if(respose == 'error_pwd_len'){
				alert("PWD.length >4 OK?");
			}
		}
	});
}
function logout () {
	// body...
	$.ajax({
		type:"POST",
		url:"./asset/php/logout.php",
		data:{
		}, success: function(respose){
			//alert(respose);
			console.log(respose);
			if(respose == 'logout'){
				location.href = "./index.html";
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
	$("#btn_lgin").click(function(){		
	});
	$("#btn_regit").click(function () {
		// body...
		regist();
	});
	$("#logout_a").click(function(){
		logout();
	});
	$("input").keypress(function(e){
		if(e.keyCode == 13){
			regist();
		}
	});
}