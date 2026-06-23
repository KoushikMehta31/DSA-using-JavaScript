let arr = [1,2,3,4,5,6];
let min = Math.min(...arr);
let count = 0;
for(let i=0; i<arr.length; i++){
    if(arr[i] > min){
        count++;
    }
}
console.log(count);
