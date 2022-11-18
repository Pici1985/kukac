
let days = 365;
let felnottkukac = 2;
let peteszam = felnottkukac * 2.7;
let gyerekkukac = 0; 

function calculate(days, felnottkukac){
    if(days > 90 && days < 174  ){
        let newfelnottkukac = Math.floor(felnottkukac + ((days - 90) * peteszam)); 
        let newgyerekkukac = (days / 3) * peteszam;  
        console.log(`A ${days}. napon a felnott kukacok szama ${newfelnottkukac} es gyerekkukakcok szama ${newgyerekkukac}!`);
    } else if(days >= 174 ){
        let iteracioszama = (days - 90) / 3; 
        let newfelnottkukac2 = Math.floor(felnottkukac + ((days - 90) * peteszam) + (iteracioszama * peteszam)); 
        let newgyerekkukac2 = Math.floor(((days / 3) * peteszam) * (iteracioszama * peteszam));
        console.log(`A ${days}. napon a felnott kukacok szama ${newfelnottkukac2} es gyerekkukakcok szama ${newgyerekkukac2}!`);
    }else{
        console.log("anyad");
    }
}

calculate(days, felnottkukac);

// a 87 napig 2 felnott kukac van
// a 90. napon 2 + 6
// a 91. napon (2 + 6) + 6
// a 92. napon ((2 + 6) + 6 ) + 6
// a 93. napon (((2 + 6) + 6) + 6 ) + 6
// a 174. nap utan (((2 + 6) + 6) + 6 ) + 6   



// function calculate(days, felnottkukac, gyerekkukac){
    
//     let hanyadikfelnoves = Math.ceil(days / 87);
    
//     console.log(hanyadikfelnoves);

//     let napiszorzo = Math.ceil((days - 87) / 3);
    
//     console.log(napiszorzo);
    
//     let generaciokszama = Math.floor(days / 3); 

//     if(days <= 87 ){
//         felnottkukac = 2;
//         gyerekkukac = Math.floor(generaciokszama * 2.7)
//     } else {
//         gyerekkukac = Math.floor(( generaciokszama * 2.7 ) * napiszorzo ) * hanyadikfelnoves;
//         felnottkukac = Math.floor(felnottkukac + ((napiszorzo * 2.7) * hanyadikfelnoves)); 
//     } 

//     console.log(`A ${days}. napon a felnott kukacok szama ${felnottkukac}, a gyerekkukacok szama ${gyerekkukac}!`);
// }
   

// calculate(days, felnottkukac, gyerekkukac);

// ez tuti nem jo igy mert pl a ha a napokat elkezded betenni 261-tol folfele akkor latszik hogy a felnottek szmaanak a 
// tuti nem helyes egyik nap ugrik 160at utana meg csak egyet kettot :) Szal valami tuti nem jo :) 