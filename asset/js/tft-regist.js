var newDIV = true
function regist(){
	$.ajax({
		type:"POST",
		url:"../php/tft-regist.php",
		data:{
			"data-id":$("#lgn-id").val(),
			"data-pwd":$("#lgn-pwd").val(),
			"data-nick":$("#lgn-nick").val()
		}, success: function(respose){
			//alert(respose);
			console.log(respose);
			/*if(respose == 'success'){
				alert(respose);
				$("#regist-form").attr('action', './index.html');
				$("#regist-form").submit();
			} else if(respose == 'error_id_exist') {
				alert("already exist ID");
			} else if(respose == 'error_id_len'){
				alert("ID.length > 4. OK?");
			} else if(respose == 'error_pwd_len'){
				alert("PWD.length >4 OK?");
			}*/
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
function fadein(data){
	$(data).delay(500).fadeIn(1000);
}
function btnClick(){
	$("#btn-regi").click(function(){
		regist()
	});
	$("#btn-cans").click(function(){
		window.history.back()
	});
	$("input").keypress(function(e){
		if(e.keyCode == 13){
			regist();
		}
	});
}
function init(){
	fadein('#lg-container')
	windowResized()
	btnClick()
}