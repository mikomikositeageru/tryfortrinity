var newDIV = true;
function regiBtn(){
	$("#login-form").attr('action', './tft-regist.html');
	//console.log($("#login_form").attr('action'));
	$("#login-form").submit();
}
function loginBtn(){
	$.ajax({
		type:"POST", 
		url:"../php/tft-login.php", 
		data:{
			"data-id":$("#lgn-id").val(), 
			"data-pwd":$("#lgn-pwd").val()
		}, 
		success: function(response){
			//alert(respose);
			//console.log(respose);
			if(response == 'success'){
				location.href = './index.html';
				//$('#login_form').attr('action', './main.html');
				//s$('#login_form').submit();
				//$.cookie($("#lgn_id").val(), 'first', {expire: 15, path: '/', domain: '', secure: true});			
			}
		}
	});	
}
function btnClick(){
	$("#btn-regi").click(function(){
		regiBtn();
	});
	$("#btn-sign").click(function(){
		loginBtn();
	});
	$("input").keypress(function(e){
		if(e.keyCode == 13){
			loginBtn();
		}
	});
}
function windowResized(){
	var test = function(){
		var width, height, t, s;

		if (self.innerHeight){
			width = self.innerWidth;
			height = self.innerHeight;
		} else if (document.documentElement && document.documentElement.clientHeight){
			width = document.documentElement.clientWidth;
		} else if(document.body){
			width = document.body.clientWidth;
		}

		if (width<=700){
			if (newDIV){
				t = $('.tmp-box').each(function(index){
						$(this).attr("class", "tmp-box");
					});
				newDIV = false
			}
		} else {
			if (!newDIV){
				s = $('.tmp-box').each(function(index){
						$(this).attr("class", "col-xs-4 tmp-box");
					});
				newDIV = true
			}			
		}
		// var texts = width + ":" + height + " = " + t + ":" + s
		// $('#width').text(texts)
	}
	setInterval(test, 100);
}
function loginCheck(){
	var logincheck = function(){
		$.ajax({
			type:"POST", 
			url:"../php/tft-loginchk.php", 
			success: function(response){
				var jsonval = response
			},
			// dataType:"JSON"
		});
	}
	logincheck()
}
function logOut() {
	// body...
	var logout = function(){
		$.ajax({
			type:"POST",
			url:"../php/tft-logout.php",
			success: function(respose){
				//alert(respose);
				//console.log(respose);
				if(respose == 'logout'){
					location.href = "./index.html";
				}
			}
		});
	}
	logout()
}
function fadein(data){
	$(data).delay(500).fadeIn(1000);
}
function init(){
	fadein('#lg-container')
	windowResized()
	btnClick()
}