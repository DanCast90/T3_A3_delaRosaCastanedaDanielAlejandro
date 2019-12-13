function obtenerCURP(){
		var nombre=document.getElementById('nombre').value.toLowerCase();
		var app=document.getElementById('app').value.toLowerCase();
		var apm=document.getElementById('apm').value.toLowerCase();
		var anio=document.getElementById('anio').value;
		var mes=document.getElementById('mes').value;
		var dia=document.getElementById('dia').value;
		var estado=document.getElementById('estado').value.toLowerCase();
		var sexo=document.getElementById('sexo').value.toLowerCase();
		var min=4, minl=2;
    	var nF = /^\d{4}$/;
    	var est=0;
    	//alert(nombre+app+apm+anio+mes+dia+estado+sexo);

    if(app!=""&&apm!=""&&nombre!=""&&anio!=""){
        if(app.length>=minl&&apm.length>=minl&&nombre.length>=minl&&anio.length>=min){
            if(nF.test(anio)){
                est=1;
            }
            else{
                alert("LLenado incorrecto en el apartado de año");
            }
        }
        else{
            alert("Apellidos o nombre invalidos");
        }
    }
    else{
        alert("Faltan campos por llenar");
    }
  switch (est) {
        case 1:
            var l1=app.charAt(0);
            var l2="";
            for(i=0; i<=app.length; i++){
                if(app.charAt(i)=="a"||app.charAt(i)=="e"||app.charAt(i)=="i"||app.charAt(i)=="o"||app.charAt(i)=="u"){
                    l2=app.charAt(i);
                    i=app.length;
                }
            }
            var l3=apm.charAt(0);
            
            array = nombre.split(" "),
            resultado = "";
            for (var i = 0; i < array.length; resultado = array[i][0], i++);
            var l5= anio.charAt(2);
            var l6= anio.charAt(3);
            var l7="";
            for(var i=1; i<=app.length; i++){
                if(app.charAt(i)!="a"&&app.charAt(i)!="e"&&app.charAt(i)!="i"&&app.charAt(i)!="o"&&app.charAt(i)!="u"){
                    l7=app.charAt(i);
                    i=app.length;
                }
            }
            var l8="";
            for(var i=1; i<=apm.length; i++){
                if(apm.charAt(i)!="a"&&apm.charAt(i)!="e"&&apm.charAt(i)!="i"&&apm.charAt(i)!="o"&&apm.charAt(i)!="u"){
                    l8=apm.charAt(i);
                    i=apm.length;
                }
            }
            aux=array.length;
            aux=aux-1;
            nombre=array[aux];
            var l9="";
            for (var i = 1; i <= nombre.length; i++){
                if(nombre.charAt(i)!="a"&&nombre.charAt(i)!="e"&&nombre.charAt(i)!="i"&&nombre.charAt(i)!="o"&&nombre.charAt(i)!="u"){
                    l9=nombre.charAt(i);
                    i=nombre.length;
                }
            }
            var curp=l1+l2+l3+resultado+l5+l6+mes+dia+sexo+estado+l7+l8+l9;
            document.forms[0].elements[8].value=curp.toUpperCase();
           
                 break;
    
        default:
            break;
    }
           }


