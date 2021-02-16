function _ftp(t){
	t = t.replaceAll("\n", "").replaceAll("\r", "");
	t = (t) ? t : "sem titulo"
	return t;
}

function gt(_t){
	let tt = new Date()
	return {
		"titulo": _t,
		"criado": tt.getTime()
	}
}

function tcc(t){

	// Filtrar Titulo
	let _t = _ftp(t);

	// Criar Objeto
	let nt;
	nt = gt(_t);
	nt.edicoes = [gt(_t)];

	// Criar em BD
	let utid;
	if(localStorage.getItem("utid")){
		utid = parseInt(localStorage.getItem("utid")) + 1;
	} else{
		utid = 1;
	}

	// Adicionar Titulo
	localStorage.setItem("utid", utid);
	localStorage.setItem("titulo" + utid, JSON.stringify(nt));
	return true;

}

function tcr(){
	let p;
	if (localStorage.getItem("utid")){
		let utid = localStorage.getItem("utid");

		p = {};
		while (utid > 0){
			if (localStorage.getItem("titulo" + utid)) {
				let _p = JSON.parse(localStorage.getItem("titulo" + utid));
				p[utid] = _p
			}
			utid--
		}
	}
	// console.log(p);
	return p;
}

function tcr1(x){
	if (localStorage.getItem("titulo" + x)) {
		return JSON.parse(localStorage.getItem("titulo" + x));
	}
}


function tcu(x, y){

	if (localStorage.getItem("titulo" + x)) {
		y = _ftp(y);
		let lt = tcr1(x)
		let ob = gt(y);

		lt.titulo = ob.titulo
		lt.criado = ob.criado
		lt.edicoes = lt.edicoes.concat(ob)
		let up = JSON.stringify(lt)		
		localStorage.setItem("titulo" + x, up);
	}


}

function tcd(x){
	localStorage.removeItem("titulo" + x);
}