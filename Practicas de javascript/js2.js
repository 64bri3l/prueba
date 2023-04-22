/*for($i=1; $i*4<30; $i++) {
    console.log("i vale"  + $i);
}*/

/* $month= prompt ("Ingresa el numero de tu mes favorito");
if ($month<1 || $month>12){
    document.write (" El número ingresado no es válido")
}
if ($month==4||$month==6||$month==9||$month==11){ 
    document.write ("El mes elegido tiene 30 días ");
} else if ($month==2){
    document.write ("El mes elegido tiene 28 días");
} else { 
    document.write ("El mes elegido tiene 31 días");
} */

/* $month= prompt ("Ingresa el numero de tu mes favorito");
switch ($month) {
    case "12":
    case "1":
    case "2":
        document.write ("La estación del mes que ingresaste es Verano");
break;
    case "3":
    case "4":
    case "5":
        document.write ("La estación del mes que ingresaste es Otoño")
break;
    case "6":
    case "7":
    case "8":
        document.write ("La estación del mes que ingresaste es Invierno")
break;
    case "9":
    case "10":
    case "11":
        document.write ("La estación del mes que ingresaste es Primavera")

default:
    document.write("el mes no existe webon")

} */

$car= prompt ("Introduce tu modelo favorito");
if ($car.toLowerCase()=="focus"){
    $precio= 10000
    $desc= $precio- ($precio*0.1) 
    document.write ("El precio final es de " +$desc+ "<br>");
} else if ($car.toLowerCase ()=="fiesta"){
    $precio= 8000
    $desc= $precio- ($precio*0.05)
    document.write ("El precio final es de " +$desc+ "<br>");
} else {
    document.write ("El modelo ingresado no es válido");
}

