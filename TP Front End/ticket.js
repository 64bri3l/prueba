 $formapago=  (prompt ("Ingrese su forma de pago"));
    if ($formapago.toLowerCase()=="mercadopago" || $formapago.toLowerCase()=="lemon"|| $formapago.toLowerCase()=="uala"){
        alert ('seleccionaste '+$formapago+ '' ); //solo continua la ejecución si se eligen las formas de pago indicadas, si no se interrumpe//

        $cantidad= Number (prompt ("Ingrese la cantidad de entradas (hasta 3/usuario)"));
            if ($cantidad<=3 && $cantidad>0){
            alert ('Seleccionaste ' +$cantidad+ ' entrada/s' );   //solo continua la ejecucion si elige una, dos o tres entradas, sino se interrumpe//

            $saldo= Number (prompt ("Indique la cantidad de saldo que posee en su app"));
                if ($cantidad==3 && $saldo>=7500||$cantidad==2 && $saldo>=5000||$cantidad==1 && $saldo>=2500) { 
                    swal ('Compra realizada','En tu e-mail recibirás tus entradas','success');
                }else if ($cantidad==3 && $saldo<7500||$cantidad==2 && $saldo<5000||$cantidad==1 && $saldo<2500||$saldo==""||$saldo==0){
                    swal ('Saldo insuficiente', 'Revisa tu app', 'error'); 
                }

        } else if ($cantidad==""|| $cantidad<=0 ||$cantidad>3) {
            alert ("Error, revisa tu respuesta");
        }
    }else  {alert (  'Forma de pago no valida, intenta de nuevo');
    }
    