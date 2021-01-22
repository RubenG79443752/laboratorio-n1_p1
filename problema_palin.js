function problema_palin(en) {
    var palin = true;
    var m = 0;
    var arreglo = en.split("");
    while(palin && arreglo.length > 0)
    {
        if(arreglo.indexOf(arreglo[0], 1) > 0)
            arreglo.splice(arreglo.indexOf(arreglo[0], 1), 1);
        else
        {
            if(m < 1)
                m ++;
            else 
                palin = false;
        }
        arreglo = arreglo.slice(1);
        
    }
    if(palin === true) 
        console.log("Verdadero");
    else
        console.log("Falso");   
}
problema_palin('aabb');
problema_palin('cama');
problema_palin('oso');
problema_palin('libro');