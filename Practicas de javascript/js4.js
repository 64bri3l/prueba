/*function uno (){
    $numero= prompt ("Ingrese un numero");
    if ( $numero%2==0) {
        document.write ("el numero es par");
    }
    else {
        document.write ("el numero es impar");
    }
}

uno (); */

/*function dos () {
$numero1= prompt ("Ingrese un numero");
$numero2= prompt ("Ingrese otro numero");
$resultado=$numero1-$numero2;
if ( $resultado<0){
document.write ("se cambió el signo " +$resultado*-1+ "<br>");
} else {
    document.write ("el resultado es " +$resultado+ "<br>" )
}

}

dos ()*/

function tres (){
    $localidad= prompt ("Ingrese su localidad de residencia");
    $obrasocial= prompt ("Ingrese su obra social");
    
if ($localidad.toUpperCase()=="MAIPU"){ $valor=350;
   }else if ($localidad.toUpperCase()=="DORREGO"){$valor=450;
   }else if ($localidad.toUpperCase()=="JUNIN") {$valor=500;
   }else {document.write ("localidad no valida");
   }

if ($obrasocial.toUpperCase()=="OSEP") { 
    document.write ("el usuario debe pagar " +$valor*0.3);
    }else if  ($obrasocial.toUpperCase()=="OSDE") { 
        document.write ("el usuario debe pagar " +$valor*1.4);
    }else if ($obrasocial.toUpperCase()=="PAMI") { 
        document.write ("el usuario debe pagar " +$valor*0.3 ); 
    }else if ($obrasocial.toUpperCase()=="MEDICUS") { 
        document.write ("el usuario debe pagar " +$valor*1.15);
    }
   
}
tres ()

/*function tres (){

    $resid= prompt ("Ingrese su lugar de residencia");
    $obsoc= prompt ("Ingrese su obra social");

    if ($resid.toUpperCase()=="MAIPU"){ $valor=350;
    } else if ($resid.toUpperCase()=="DORREGO") {$valor=450;
    } else if ($resid.toUpperCase()=="JUNIN") {$valor=500;
    }
        else { document.write ("residencia no contemplada");
    }
    if ($obsoc.toUpperCase()=="OSEP"){
        document.write ("su coseguro sera de " +$valor*0.3);
    }
    else if ($obsoc.toUpperCase()=="OSDE"){
        document.write ("su coseguro sera de " +$valor*1.4);
    }

    else if ($obsoc.toUpperCase()=="PAMI") {
        document.write ("su coseguro sera de " +$valor*0.75);
    }
    else if ($obsoc.toUpperCase()=="MEDICUS") {
                document.write ("su coseguro sera de " +$valor*1.15);
    }
    }
    tres ();*/