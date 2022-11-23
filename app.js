
// let days = 175;
// let felnottkukac = 2;
// let peteszam = felnottkukac * 2.7;
// let gyerekkukac = 0; 

// function calculate(days, felnottkukac){
//     if(days > 90 && days < 174  ){
//         let newfelnottkukac = Math.floor(felnottkukac + ((days - 90) * peteszam)); 
//         let newgyerekkukac = (days / 3) * peteszam;  
//         console.log(`A ${days}. napon a felnott kukacok szama ${newfelnottkukac} es gyerekkukakcok szama ${newgyerekkukac}!`);
//     } else if(days >= 174 ){
//         let iteracioszama = (days - 90) / 3; 
//         let newfelnottkukac2 = Math.floor(felnottkukac + ((days - 90) * peteszam) + (iteracioszama * peteszam)); 
//         let newgyerekkukac2 = Math.floor(((days / 3) * peteszam) + (iteracioszama * peteszam));
//         console.log(`A ${days}. napon a felnott kukacok szama ${newfelnottkukac2} es gyerekkukakcok szama ${newgyerekkukac2}!`);
//     }else{
//         console.log("anyad");
//     }
// }

// for(let i = 91; i < days; i++){
//     calculate(i, felnottkukac);
// }

// a 87 napig 2 felnott kukac van
// a 90. napon 2 + 6
// a 91. napon (2 + 6) + 6
// a 92. napon ((2 + 6) + 6 ) + 6
// a 93. napon (((2 + 6) + 6) + 6 ) + 6
// a 174. nap utan (((2 + 6) + 6) + 6 ) + 6   

const daysToMature = 87; 



function calculate(){  
    let days = document.getElementById('days').value;
    let startingAdults = document.getElementById('adults').value;

    let actualYoungs = 0;
    let actualAdults = startingAdults;

    for(let i = 0; i <= days; i++ ){
        if((i % 3) == 0 && i < daysToMature){
            actualYoungs = Math.floor(actualYoungs + ( startingAdults * 2.7 ))
        }else if((i % 3) == 0 && i > daysToMature && i < (daysToMature * 2)){
            actualYoungs = Math.floor(actualYoungs + ( startingAdults * 2.7 ) + (startingAdults * 2.7)) 
            actualAdults = Math.floor((( i - daysToMature ) * (startingAdults)))
        } else if((i % 3) == 0 && i > (daysToMature * 2) && i < (daysToMature * 3)){
            // ha ez a ket sor helyes az egesz muvelet helyes
            actualYoungs = Math.floor(actualYoungs + ( startingAdults * 2.7 ) + (startingAdults * 2.7) + (startingAdults * 2.7)) 
            actualAdults = Math.floor((( i - daysToMature ) * (startingAdults)) + (( i - daysToMature ) * (startingAdults)))
        } else if((i % 3) == 0 && i > (daysToMature * 3) && i < (daysToMature * 4)){
            actualYoungs = Math.floor(actualYoungs + ( startingAdults * 2.7 ) + (startingAdults * 2.7) + (startingAdults * 2.7) + (startingAdults * 2.7) + (startingAdults * 2.7)) 
            actualAdults = Math.floor((( i - daysToMature ) * (startingAdults)) + (( i - daysToMature ) * (startingAdults)) + (( i - daysToMature ) * (startingAdults)))
        } 
    }
    console.log(`nr of youngs: ${actualYoungs}, nr of adults ${actualAdults}!`)   
}

// calculate(days, startingAdults);
   
