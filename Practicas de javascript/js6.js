window.onload =function(){
    document.getElementById ('cuadros').onclick=cuadro;
    document.getElementById ('mes').onclick=calendario;
}
function cuadro (){
    $cuadro=document.getElementById ('cuadros').value;
    $nuevoCuadro="";

for($i=1; $i<=$cuadro;$i++){
    $nuevoCuadro += '<div class="cuadro">'+$i+ '</div>';
}

$contenedor= document.getElementById('container-cuadros');
$contenedor.innerHTML = $nuevoCuadro;

}

    function calendario (){
    $dias=document.getElementById ('mes').value;
    $select= document.getElementById ("mes");
    $nuevoDia="";
    $mesSeleccionado = $select.options[$select.selectedIndex].text;
    $diaSemana=['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo',
    'Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo',
    'Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo',
    'Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo',
    'Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
    for($i=1; $i<=$dias;$i++){
if ($dias==28){
    $bgcolor="bg-danger";
}else if ($dias==30){
    $bgcolor="bg-success";
}else {$bgcolor="bg-warning";
}
if ($diaSemana [$i-1]=="Sábado"){
    $bgcolor= "bg-primary"
} else if ($diaSemana [$i-1]=="Domingo"){
    $bgcolor= "bg-dark"};

    if ($mesSeleccionado=="Octubre" && $i == 17){
        $bgcolor = "bg-danger";
    }

$nuevoDia=$nuevoDia+ '<div class="cuadro ' + $bgcolor + '" id="' + $i + '"onclick="ocultarDia(' + $i + ') ">' +$i+ '<br>' +$diaSemana [$i -1] + '</div>';
    }
    $contenedor=document.getElementById ('dias');
    $contenedor.innerHTML=$nuevoDia;

}

function ocultarDia($dia){
    $bloqueDia= document.getElementById($dia);

    $bloqueDia.classList.toggle('op-0');
}