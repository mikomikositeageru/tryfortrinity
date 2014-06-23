var newDIV = true;
/*function getClientWidth() {

	var width, height;

	if (self.innerHeight) {     // IE 외 모든 브라우저

    	width = self.innerWidth;
    	height = self.innerHeight;

	} else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict

    	width = document.documentElement.clientWidth;

	} else if (document.body) {     // IE Browser

    	width = document.body.clientWidth;

	}
	if(width<=700){
		$('tmp-box').attr('style','display:none')
	} else {
		fadein('tmp-box')
	}

	$('#width').text(width)

	console.log(width, height)

	return width;

}*/
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
function init(){
	fadein('#lg-container')
	windowResized()
}