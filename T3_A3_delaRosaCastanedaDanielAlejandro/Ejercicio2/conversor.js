function convertir(){
	var numero = parseInt(document.getElementById('num').value);
    document.getElementById('bin').value=(numero.toString(2));
   	document.getElementById('octal').value=(numero.toString(8));
    document.getElementById('hexa').value=(numero.toString(16));
}