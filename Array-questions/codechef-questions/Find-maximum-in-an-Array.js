let arr = [7,4,9,2,4,7,2];
let max = arr[0];

for(let i=1; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log(max);
