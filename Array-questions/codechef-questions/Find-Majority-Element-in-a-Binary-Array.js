let arr = [1,1,0,0,1,1,1];

let zeroCount = 0;
let oneCount = 0;

for(let num of arr){
    if(num === 0){
        zeroCount++;
    } else {
        oneCount++;
    }
}

if(oneCount > zeroCount){
    console.log(`count -> ${oneCount} and which number -> 1`);
} else {
    console.log(`count -> ${zeroCount} and which number -> 0`);
}


answer is count -> 5 and which number -> 1
