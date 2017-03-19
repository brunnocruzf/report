document.querySelector('#table').addEventListener('change', log);

function log(){
	//busco todos os inputs
	var $inputs = document.querySelectorAll('input');
	//pego o valor de cada input
	if($inputs[0].value.length < 1){$input0 = 0}else{$input0 = $inputs[0].value};
	if($inputs[1].value.length < 1){$input1 = 0}else{$input1 = $inputs[1].value};
	if($inputs[2].value.length < 1){$input2 = 0}else{$input2 = $inputs[2].value};
	if($inputs[3].value.length < 1){$input3 = 0}else{$input3 = $inputs[3].value};
	if($inputs[4].value.length < 1){$input4 = 0}else{$input4 = $inputs[4].value};
	if($inputs[6].value.length < 1){$input6 = 0}else{$input6 = $inputs[6].value};
	if($inputs[7].value.length < 1){$input7 = 0}else{$input7 = $inputs[7].value};
	if($inputs[8].value.length < 1){$input8 = 0}else{$input8 = $inputs[8].value};
	if($inputs[9].value.length < 1){$input9 = 0}else{$input9 = $inputs[9].value};
	if($inputs[10].value.length < 1){$input10 = 0}else{$input10 = $inputs[10].value};
	//somo todos os inputs da linha Telefone/E-mail
	$totalTE = parseInt($input0) + parseInt($input1) + parseInt($input2) + parseInt($input3) + parseInt($input4);
	//seta o valor no campo total de chamados com origim Telefone/E-mail
	$input5  = $inputs[5].value = $totalTE;
	//somo todos os inputs da linha Web
	$totalWeb = parseInt($input6) + parseInt($input7) + parseInt($input8) + parseInt($input9) + parseInt($input10);
	//seta o valor no campo total da linha web
	$input11  = $inputs[11].value = $totalWeb;
	//soma e seta o valor no campo total
	$total = parseInt($input5) + parseInt($input11);
	document.querySelector(".total-value").textContent = $total;
}

