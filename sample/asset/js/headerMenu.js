function regist(){
	$.ajax({
		type:"POST",
		url:"./asset/php/lngregit.php",
		data:{
			"data_id":$("#text_id").val(),
			"data_pwd":$("#text_pwd").val()
		}, success: function(respose){
			//alert(respose);
			//console.log(respose);
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
function lgnchk () {
	// body...
	$.ajax({
		type:"POST",
		url:"./asset/php/lgncheck.php",
		data:{
		}, success: function(respose){
			//alert(respose);
			//console.log(respose);
			if(respose == 'nosession'){
				location.href = "./login.html";
			} else {
				var obj = $.parseJSON(respose);
				var	imgsrc = './asset/resource/img/char/';
				//start tutorial
				if(obj.tuto == 'N_tuto'){
					$('#main_leader').popover();
				}
				//$("user_main_tag").attr('textContent', 'baba');
				//set user showing info
				$("#user_main_tag").text(obj.id);
				$("#main_leader").attr('src', imgsrc + obj.leader);
			}
		}
		//dataType: "JSON"
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
			//console.log(respose);
			if(respose == 'logout'){
				location.href = "./index.html";
			}
		}
	});
}
function getOri(){
	var ori = window.orientation;
	var htmlWidth = $('html').css('width');
	//console.log(htmlWidth);
	$('#width').text(htmlWidth);
	$('#ori').text(ori);
	if(ori == 0 || ori ==180){
		//세로
	} else {
		//가로
	}
}
function hideToolbar(){
// <![CDATA[
// toolbar hide
	try {
		window.addEventListener('load', function(){
		setTimeout(scrollTo, 0, 0, 1);
		}, false);
	} catch(e) {}
}
function init(){
	$(document).ready(function(){
		$('#whole_center_container').delay(500).fadeIn(1000);
	});
	//html
	getOri();
	//hideToolbar();
	//check login
	lgnchk();
	//confirm connect db
	//get_userInfo();
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
}