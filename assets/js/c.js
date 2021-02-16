var s = x => document.querySelector(x);
var sAll = x => document.querySelectorAll(x);
var ls = {
	'deletar': '<i class="fas fa-trash-alt"></i>',
	'editar': '<i class="fas fa-pen"></i>',
	'salvar': '<i class="fas fa-save"></i>',
	'menu': '<i class="fas fa-bars"></i>'
}


function l(){
	var t = tcr();
	let _ct = s("#cts");
	_ct.innerHTML = "";

	// console.log(_ct);

	for(v in t){
		let tpl = s("#models .box").cloneNode(true);
		tpl.id = "t" + v
		let dt = new Date(parseInt(t[v].criado));
		let dd = ` - ${(dt.getDate().toString().length == 1) ? "0" + dt.getDate() : dt.getDate()}/${((dt.getMonth() + 1).toString().length == 1) ? "0" + (dt.getMonth() + 1) : dt.getMonth()}/${dt.getFullYear()}`;
		let dtd = document.createElement("span");
		// let bmn = document.createElement("button");
		// bmn.innerHTML = ls.menu;
		// bmn.className = "noborder btnmenu";
		// bmn.onclick = () => {
		// 	console.log(1)
		// };
		
		// console.log(bmn)


		dtd.className = "data";
		dtd.innerHTML = dd;
		let tp = tpl.querySelector(".titulo-box");
		tp.innerHTML += t[v].titulo;
		tp.appendChild(dtd);
		let _btn = tpl.querySelectorAll(".box-header .edit button");

		// Edite / Delete TP

		_btn[0].value = v;
		_btn[0].onclick = () => {
			etp(_btn[0].value);
		};

		_btn[1].value = v;
		_btn[1].onclick = () => {
			dtp(_btn[1].value);
		};

		let _sbtn = tpl.querySelectorAll(".box-add textarea, .box-add button");

		// ADD / CONFIGS SB

		_sbtn[1].value = v;
		_sbtn[1].onclick = () => {
			asb(_sbtn[1].value);
		}

		_sbtn[2].value = v;
		_sbtn[2].onclick = () => {
			_sbtn[0].value += "[b][/b]";
			_sbtn[0].focus();
		}

		_sbtn[3].value = v;
		_sbtn[3].onclick = () => {
			_sbtn[0].value += "\n	• ";
			_sbtn[0].focus();
		}

		// SET sBS

		let sb = sbr(v);
		if (sb) {
			for (vsb in sb){
				let sbsl = tpl.querySelector(".box-body");
				let nsb = document.createElement("div");
				let nsbc = document.createElement("div");
				nsb.className = "box-subconteudo";
				nsbc.id = `sb${v}_${vsb}`;
				nsbc.innerHTML = sb[vsb];
				let edits = s("#models .edit").cloneNode(true);
				let _bed = edits.querySelectorAll("button");

				_bed[1].value = `${v}_${vsb}`;
				_bed[1].onclick = ()=>{
					esb(_bed[1]);
				}

				_bed[2].value = `${v}_${vsb}`;
				_bed[2].onclick = ()=>{
					dsb(_bed[1].value);
				}

				nsb.appendChild(edits);
				nsb.appendChild(nsbc);
				sbsl.appendChild(nsb);
			}
		}
		_ct.appendChild(tpl);
	}
}

function etp(v){
	let tp = s(`#t${v} .titulo-box`);
	let btp = s(`#t${v} .box-header .edit button`);

	if (btp.innerHTML == ls.editar){
		btp.innerHTML = ls.salvar

		let txar = document.createElement("input");
		txar.value = tp.innerHTML.split('<span class="data">')[0];
		txar.id = "txar" + v;
		txar.className = "editTitleInput noborder";
		tp.innerHTML = ""
		tp.appendChild(txar);

	} else {
		let nt = s("#txar"+v).value;
		tcu(v, nt);
		l();
	}
}

function ctp(){
	let t = s("#ct");
	if (tcc(t.value)) {
		t.value = "";
		l();
	} else{
		alert("Erro ao cadastrar seu titulo.");
	}
}

function dtp(x){
	let m = 'Tem certeza que deseja remover?'
	if (confirm(m)) {
		sbdaf(x)
		tcd(x);
		l();
	}
}

function asb(x){
	let txar = s(`#t${x} .box-add textarea`).value;
	if (sbc(x, txar)) {
		l();
	}
}

function esb(x){
	let sb = s("#sb"+x.value);
	if(x.innerHTML == ls.editar){
		x.innerHTML = ls.salvar;
		let txar = document.createElement("textarea");
		txar.id = "txar" +x.value;
		txar.value = dfbc(sb.innerHTML);
		txar.className = "txtarea txtareaedit noborder";
		sb.innerHTML = ""
		sb.append(txar);
	} else{
		if (sbu(x.value, s("#txar"+ x.value).value)) {
			l();
		} else{
			alert("Ocorreu um erro.")
		}
	}
}

function dsb(x){
	let m = 'Tem certeza que deseja remover?';
	if (confirm(m)) {
		if (sbd(x)) {
			l();
		}		
	}
	
}