// static functions start
var searchTime = 0, clicked = false, interval = 0;

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
				//start tutorial
				//$("user_main_tag").attr('textContent', 'baba');
				//set user showing info
				$("#user_main_tag").text(obj.id);
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
//save user info
function saveInfo(){

}
// static functions end
//단순히 프로그래스파가 진행하는 것
/*클릭시 서버에 현재 시간을 보내고, 종료시간간을 저장*/
function stepClick(event){
	if(!clicked){
		var rog = JSON.stringify($.cookie('userinfo'));
		clicked = true;
		var con = function(handler){
			$.ajax({
				type: "POST",
				url: "./asset/php/cmpuserinfo.php",
				data:{
					"userinfo":rog
				},
				success: function(response){
					handler(response);
				},
				error: function(xhr, textStatus, error){
					// console.log(xhr.statusText);
					// console.log(textStatus);
					console.log(error);
				},
				// dataType: "JSON"
			});
		};
		con(function(evt){
			console.log(evt);
		});


		/*var func = function(i){
			$('.step-1 div').attr('style', 'width:' + i*10 +'%');
			$('.step-1 div').attr('aria-valuenow', i*10);
			$('.step-1 span').text(i*10+'% complete');
		};
		interval = setInterval((function(pFunc){
			//console.log(interval);
			return function(){
				if(searchTime <= 10){
					pFunc(searchTime);
					searchTime++;
				} else if (searchTime > 10){
					searchTime = 0;
					pFunc(searchTime);
					$('.step-1 span').text('탐색');
					clearInterval(interval);
					clicked = false;
				}
			};
		})(func), 1000);*/
	}
}
function searchGetTime(){
	var test = function(){
		$.ajax({
			type:"GET",
			url:"../time/svrtime.php",
			success: function(respose){
				//console.log(respose);
			}
			//dataType: "JSON"
		});
	};
	setInterval(test, 1000);
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
	//searchGetTime();
	$("#logout_a").click(function(){
		logout();
	});
	$(".step-1").click(function(){
		//alert($(this).attr('class'));
		stepClick($(this));
	});
}