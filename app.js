
let days = 262;
let felnottkukac = 2;
let gyerekkukac = 0; 

function calculate(days, felnottkukac, gyerekkukac){
    
    let hanyadikfelnoves = Math.ceil(days / 87);
    
    console.log(hanyadikfelnoves);

    let napiszorzo = Math.ceil((days - 87) / 3);
    
    console.log(napiszorzo);
    
    let generaciokszama = Math.floor(days / 3); 

    if(days <= 87 ){
        felnottkukac = 2;
        gyerekkukac = Math.floor(generaciokszama * 2.7)
    } else {
        gyerekkukac = Math.floor(( generaciokszama * 2.7 ) * napiszorzo ) * hanyadikfelnoves;
        felnottkukac = Math.floor(felnottkukac + ((napiszorzo * 2.7) * hanyadikfelnoves)); 
    } 

    console.log(`A ${days}. napon a felnott kukacok szama ${felnottkukac}, a gyerekkukacok szama ${gyerekkukac}!`);
}
   

calculate(days, felnottkukac, gyerekkukac);

// ez tuti nem jo igy mert pl a ha a napokat elkezded betenni 261-tol folfele akkor latszik hogy a felnottek szmaanak a 
// tuti nem helyes egyik nap ugrik 160at utana meg csak egyet kettot :) Szal valami tuti nem jo :) 