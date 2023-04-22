window.onload=function(){
    document.getElementById("colores").onclick=bgcolor;
}

function bgcolor(){
    $color= document.getElementById("colores").value;
    $csscolor= document.getElementById("body-style");
    $csscolor.setAttribute("style", "background-color:" + $color);
}



function bgcolor1(){
    $red= document.getElementById("red").value;
    $green= document.getElementById("green").value;
    $blue= document.getElementById("blue").value;

    $color= "rgb(" + $red + "," + $green + "," + $blue + ")";
    $cssColor= document.getElementById("sec2");
    $cssColor.style.backgroundColor= $color;
    document.getElementById("texto2").innerHTML = $color;
}



function ocultar(){
    oculto= document.getElementById("sec2");
    oculto.classList.toggle("d-none");

    $valorBoton= document.getElementById("oculto");
    if($valorBoton.value == "OCULTAR"){
        $valorBoton.value="MOSTRAR";
    }else{
        $valorBoton.value="OCULTAR";
    }
}

function suma (){
document.getElementById("suma");
$numero1=document.getElementById ("num1").value;
$numero2=document.getElementById ("num2").value;
$suma= parseInt ($numero1) + parseInt ($numero2);
console.log($suma)

document.getElementById("resultado").innerHTML = $suma;
}

function resta (){
    document.getElementById("resta");
    $numero1=document.getElementById ("num1").value;
    $numero2=document.getElementById ("num2").value;
    $resta= parseInt ($numero1) - parseInt ($numero2);
    console.log($resta)
    
    document.getElementById("resultado").innerHTML = $resta;
    }

    function multi (){
        document.getElementById("multi");
        $numero1=document.getElementById ("num1").value;
        $numero2=document.getElementById ("num2").value;
        $multi= parseInt ($numero1) * parseInt ($numero2);
        console.log($multi)
        
        document.getElementById("resultado").innerHTML = $multi;
    }
    function divis (){
        document.getElementById("divis");
        $numero1=document.getElementById ("num1").value;
        $numero2=document.getElementById ("num2").value;
        $divis= parseInt ($numero1) / parseInt ($numero2);
        console.log($divis)
            
        document.getElementById("resultado").innerHTML = $divis;
    }
     