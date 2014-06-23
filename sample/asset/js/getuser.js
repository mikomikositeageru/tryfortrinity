function cmpUserInfo(){
	var rog = JSON.stringify($.cookie('userinfo'));
	$.ajax({
		type:"POST",
		url:"./asset/php/cmpuserinfo.php",
		data:{
			"userinfo":rog
		},
		//dataType:"JSON",
		success : function(respose){
			console.log(respose);
		}
	});
}
