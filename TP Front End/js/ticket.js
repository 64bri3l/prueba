function pago (){ 
    $formapago=  (prompt ("Ingrese su forma de pago"));
    
    if ($formapago.toLowerCase()=="mercadopago" || $formapago.toLowerCase()=="lemon"|| $formapago.toLowerCase()=="uala"){
        alert ('seleccionaste '+$formapago+ '' );
        }else { alert ('Forma de pago no valida');
    }
    } 
    pago ()
    //si la forma de pago no es valida, quiero que vuelva a ejecutar el codigo desde el principio, antes de que se ejecute todo el programa//
    
    function entrada (){
     $cantidad= Number (prompt ("Ingrese la cantidad de entradas (hasta 3/usuario)"));
    if ($cantidad>3){
            alert ("Superaste el limite de entradas");   
        }else if ($cantidad==""|| $cantidad==0) {
            alert ("No has seleccionado niguna entrada");
        }
    }
    entrada ()
        //si se supera el limite de entrada o no se selecciona ninguna, quiero que se vuelva a ejecutar esta parte del codigo antes de seguir con la siguiente funcion// 
    
        function saldo (){
    $saldo= Number (prompt ("Indique la cantidad de saldo que posee en su app"));
    if ($saldo==""||$saldo==0){
        alert ("Saldo no válido");
    }
    //si el saldo no es valido, comenzar esta funcion de vuelta//
    if ($cantidad==3 && $saldo<7500||$cantidad==2 && $saldo<5000||$cantidad==1 && $saldo<2500) {
            swal ('Saldo insuficiente', 'Revisa tu app', 'error'); 
        } else { swal ('Compra realizada','En tu e-mail recibirás tus entradas','success'); 
    }
        }
    
    saldo ()