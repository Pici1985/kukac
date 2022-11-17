
let days = 174;
let felnottkukac = 2;
let gyerekkukac = 0; 

function calculate(days, felnottkukac, gyerekkukac){
    if(days <= 87){       
        let generaciokszama = Math.floor(days / 3); 

        gyerekkukac = generaciokszama * 2.7;

        console.log(`A ${days}. napon a felnott kukacok szama ${felnottkukac}, a gyerekkukacok szama ${gyerekkukac}!`)

    } else if(87 < days && days <= 174){
        let generaciokszama = Math.floor(days / 3);    

        let szorzo = Math.floor((days - 87) / 3);

        console.log(szorzo);

        if(szorzo === 0){
            gyerekkukac = generaciokszama * 2.7 
            felnottkukac = felnottkukac
        } else {
            gyerekkukac = Math.floor(generaciokszama * 2.7);
            felnottkukac += (szorzo * 2);  
        }            

        console.log(`A ${days}. napon a felnott kukacok szama ${felnottkukac}, a gyerekkukacok szama ${gyerekkukac}!`)

    } else if(174 < days && days < 261){
        console.log("anyad");
    }
}

calculate(days, felnottkukac, gyerekkukac);