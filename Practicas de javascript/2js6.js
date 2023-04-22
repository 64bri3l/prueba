/* Primero creamos estas funciones anonimas
para que al cargar la ventana llame a la funcion
pero realmente funciones al hacer click en el select

*/

window.onload=function(){
    document.getElementById('cuadros').onclick=cuadro; // va a llamar a la funcion q crea cuadros
    document.getElementById('mes').onclick=calendario; //  va a llamar a la funcion que crea el calendario
}

function cuadro(){
    /* Crear cuadros de colores
    de acuerdo al nro ingresado */

    $cuadro=document.getElementById("cuadros").value; 

    /* Toma el valor del select con id="cuadros" y lo guarda en la variable $cuadro */
    
    $nuevoCuadro = ""; // creamos una variable vacia

    for($i=1; $i<=$cuadro; $i++){
        $nuevoCuadro += '<div class="cuadro">'+ $i +'</div>'; // acá se concatena JS y HTML por eso usamoss diferentes comillas
    }
    /* El FOR es quien va a crear la cantidad de cuadros que necesitamos
    y en la variable cuardamos el texto que crea el div.
    La clase cuadro está escrita en el HTML.
    La variable $ dentro del div hace que cada caja tenga un nro diferente*/

    $contenedor = document.getElementById('container-cuadros'); // seleccionamos el id=container-cuadros
    $contenedor.innerHTML = $nuevoCuadro; // a través de innerHTML agregamos la cantidad de div q se guardaron en la variable
}

/* La funcion calendario va ha hacer casi lo mismo que la funcion anterior 
pero de forma más pro. Acá se complica un toque pero no mucho 

Queremos crear un calendario de diferentes colores y que al presionar
un cuadro desaparezca pero conserve su lugar y posición en la grilla*/

function calendario() {
  $dias=document.getElementById("mes").value; //obtenemos el valor del mes del select por ej:31 
  $select = document.getElementById("mes"); // acá tomamos todo el select, luego lo usamos abajo

  $mesSeleccionado = $select.options[$select.selectedIndex].text; //tomamos el texto del select:  EJ: "ENERO"
  
  $nuevoDia=""; // creamos una variable vacia para guardar luego los divs

  /*Creamos un array con los dias de la semana
  Es la forma más sencilla que se nos ocurrio hacer */
  $diaSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo', 
                'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo', 
                'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo', 
                'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo', 
                'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  for($i=1;$i<=$dias;$i++){
    /*El FOR nuevamente va a ser el que limite la creacion de cuadros */
      
      /*Este if va validar ctos días tiene el mes
      y va a asignarle un color tomado de bootsrap
      y lo guarda en una variable para poder concatenar luego */

      if($dias==28){
        $bgcolor = "bg-danger";
      } else if($dias==30){
        $bgcolor = "bg-success";
      } else{
        $bgcolor = "bg-info";
      }
      /*Este IF va a asignarle un día de la semana a cada una de las cajas.
      Para este punto creamos el array de arriba */

      if ($diaSemana[$i -1] == "Domingo") { //$i-1 lo usamos porque los array comienzan en 0 pero $i inicia en 1
          $bgcolor = "bg-dark";
      } else if($diaSemana[$i -1] == "Sábado") {
        $bgcolor = "bg-primary";
      }
      /*Este IF hace que si el día es 14 del mes de ENERO
      cambie de color, porque? porque es el cumple del Leo 
      y se le ocurrio eso jajja.
      Por eso tomamos mas arriba el texto del select. Línea 44 */

      if ($mesSeleccionado == "Enero" && $i == 14) {
          $bgcolor = "bg-warning";
      }


      /*Esta línea hace toda la magia:
      Guarda en la variable el texto del HTML creando del DIV
      y le agrega a traves de la variable $bgcolor una clase de bootstrap
      con el color que hicimos en el IF de la linea 63.
      Tambien le asigna un id con el valor de $i.
      Agrega el onclicl y le pasamos como parametro el ID que creamos.
      Y por ultimo concatena el nombre del día de la semana */
      $nuevoDia=$nuevoDia+ '<div class="cuadro ' + $bgcolor + '" id="' + $i + '" onclick="ocultarDia('+ $i +')">'+ $i + '<br>' + $diaSemana[$i -1] + '</div>';
    }

    /*selecionamos el ID=dias y lo guardamos en la variable */
  $contenedor = document.getElementById('dias');
  /*incrustramos en el HTML todo lo creado en la variable $nuevoDia, osea lo creado
  en la línea 95*/
  $contenedor.innerHTML = $nuevoDia;
}

/*Por último esta funcion va a asignar la clase op=0 o quitarla en caso de que exista.
Esto permite que los cuadros del calendario desaparezcan o aparezcan segun cliquemos */

function ocultarDia($dia){
    $bloqueDia= document.getElementById($dia);

    $bloqueDia.classList.toggle('op-0');
}