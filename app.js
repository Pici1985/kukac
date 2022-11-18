
let days = 108;
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
    
    // if(i <= 87){       


    //     console.log(`A ${days}. napon a felnott kukacok szama ${felnottkukac}, a gyerekkukacok szama ${gyerekkukac}!`)
    // }    

    // } else if(87 < days && days <= 174){
    //     let generaciokszama = Math.floor(days / 3);    


    //     console.log(szorzo);

    //     if(szorzo === 0){
    //         gyerekkukac = generaciokszama * 2.7 
    //         felnottkukac = felnottkukac
    //     } else {
    //         gyerekkukac = Math.floor(generaciokszama * 2.7);
    //         felnottkukac += (szorzo * 2);  
    //     }            

    //     console.log(`A ${days}. napon a felnott kukacok szama ${felnottkukac}, a gyerekkukacok szama ${gyerekkukac}!`)

    // } else if(174 < days && days < 261){
    //     console.log("anyad");
    // }

calculate(days, felnottkukac, gyerekkukac);