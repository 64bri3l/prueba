window.onload =function(){
        document.getElementById ("colores").onclick=button;
}
    function button (){
    $color=document.getElementById("colores").value;
    $csscolor= document.getElementById("body-style");
    $csscolor.setAttribute("style","background-color:" + $color);
    
    

        }



