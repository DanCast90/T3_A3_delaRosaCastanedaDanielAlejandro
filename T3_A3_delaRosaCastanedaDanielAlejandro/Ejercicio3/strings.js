function conversor(){
	var string = document.getElementById('cad').value;
    var letra = document.getElementById('let').value;
    var cantidadV = string.match(/[aeiou]/gi).length;
    var cantidadC = string.match(/[qwrtypsdfghjklñzxcvbnm]/gi).length;
    var vecesLetra=0;
    var nuevaString="";
    for(i=0; i<=string.length; i++){
        if(string.charAt(i)==letra){
            vecesLetra++;
        }
    }
    for(i=0; i<=string.length; i++){
        if((i%2)==0){
            nuevaString+=string.charAt(i).toUpperCase();
        }
        else{
            nuevaString+=string.charAt(i).toLowerCase();
        }
        
    }
    document.getElementById('cantV').value=cantidadV;
    document.getElementById('cantC')value=cantidadC;
    document.getElementById('veces')value=vecesLetra;
    document.getElementById('cadLoca')=nuevaString;
}