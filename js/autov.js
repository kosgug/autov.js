
/**
 * autov 1.2
 * auto viewport
 * use: <meta name="viewport" content="autov=750, width=device-width, user-scalable=no, initial-scale=1">
 * https://github.com/ugsok/autov.js
 */

;(function(){

	// vars
	var wcw = window.screen.width
	var wch = window.screen.height
	var isiOS = /iPhone|mac|iPod|iPad/i.test(navigator.userAgent)
	var remBaseSize = 16

	function _w(){

		// ios bug fix
		// if (isiOS && (window.orientation==90||window.orientation==-90)){
		// 	return wch
		// }

		return wcw
	}

	// autov
	function _a(){

		// viewport
		var $viewport = document.getElementsByName("viewport")[0]
		var content = $viewport.getAttribute("content")

		var contents = content.split(",")
		var eachContents = {}
		for (var i=0; i<contents.length; i++) {
			var strs = contents[i].split("=")
			eachContents[strs[0].trim()] = strs[1].trim()
		}
		
		var autov = eachContents.autov
		var scale = (remBaseSize/16*_w()/autov)
		eachContents["initial-scale"] = scale
		_e($viewport, eachContents)
 
	}

	// echo
	function _e($viewport, contents){
		// reset content
		var content = ""
		var noEcho = true
		for(var i in contents) {
			content += (noEcho? "": ",")
			content += (i+ "=" + contents[i])
			noEcho = false
		}
		$viewport.setAttribute("content", content)
	}

	// ready
	(window.onorientationchange = _a)();

})()