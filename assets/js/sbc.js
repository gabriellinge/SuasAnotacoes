function fbc(x){
	if (x) {
		let sb = x.replaceAll("<", "&lt;").replaceAll("\n", "<br>").replaceAll("[b]", "<b>").replaceAll("[/b]", "</b>").replaceAll("	", "&#8239;&#8239;&#8239;&#8239;");
		return sb;
	}
	return false;
}

function dfbc(x){
	if (x) {
		let sb = x.replaceAll("&lt;", "<").replaceAll("<br>", "\n").replaceAll("<b>", "[b]").replaceAll("</b>", "[/b]").replaceAll("&gt;", ">");
		return sb;
	}
	return false;
}


function sbc(x, y){
	let nc = fbc(y)
	if (nc) {
		let usbid = 1;
		if(localStorage.getItem("usbid" + x)){
			usbid = parseInt(localStorage.getItem("usbid" + x)) + 1;
		}
		localStorage.setItem("usbid" + x, usbid);
		localStorage.setItem(`conteudo${x}_${usbid}`, nc);
		return true;
	}
}

function sbr(x){
	if(localStorage.getItem("usbid" + x)){
		let usbid = localStorage.getItem("usbid" + x);

		let sbs = {};

		while (usbid > 0){

			// let _sb = dfbc(localStorage.getItem(`conteudo${x}_${usbid}`));
			let _sb = localStorage.getItem(`conteudo${x}_${usbid}`);
			if (_sb) {
				sbs[usbid] = _sb;
			}
			usbid--
		}
		return sbs;
	}
}

function sbu(x, y){
	if(localStorage.getItem("conteudo" + x)){
		let nsb = fbc(y)
		if (nsb) {
			localStorage.setItem("conteudo" + x, nsb);
			return true;
		}
	}
}

function sbuid(x){

}

function sbd(x){
	if(localStorage.getItem("conteudo" + x)){
		localStorage.removeItem("conteudo" + x);
		return true;
	}
}

function sbdaf(x){
	if(localStorage.getItem("usbid" + x)){
		let mid = localStorage.getItem("usbid" + x)
		while(mid > 0){
			localStorage.removeItem(`conteudo${x}_${mid}`);
			mid --
		}
		localStorage.removeItem("usbid" + x);
		return true;
	}
}