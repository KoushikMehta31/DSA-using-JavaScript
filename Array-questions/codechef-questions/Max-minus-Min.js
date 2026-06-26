let arr = [1,4,6,7,9,1,10];
let max = Math.max(...arr);
let min = Math.min(...arr);
let result = max - min;
console.log(result);

_______________________________________________


let arr = [1,4,6,7,9,1,10];
let max = arr[0];
let min = arr[0];

for(let i=0; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
    if(arr[i] < min){
        min = arr[i];
    }
}
let result = max - min;
console.log(result);
