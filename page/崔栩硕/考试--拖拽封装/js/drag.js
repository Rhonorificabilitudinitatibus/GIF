function drag(ele) {
	ele.onmousedown = function(e) {
		var eve = e || event;
		var x = eve.offsetX;
		var y = eve.offsetY;
		ele.style.position = "absolute";
		ele.style.zIndex = 1;
		console.log(x, y)
		document.onmousemove = function(e) {
			var eve = e || event;
			var x1 = eve.clientX;
			var y1 = eve.clientY;
			var dtx = x1 - x;
			var dty = y1 - y;
			ele.style.left = dtx + "px";
			ele.style.top = dty + "px";
		}
		document.onmouseup = function(e) {
			var eve = e || event;
			document.onmousemove = null;
			document.onmouseup = null;
			//						ele.style.position = "inherit";
			ele.style.zIndex = 0;

		}
	}

}