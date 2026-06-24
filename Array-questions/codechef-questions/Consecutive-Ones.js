let arr = [1,1,0,0,0,0,1,0,1,0,1,1,1];
let count = 0;
let maxcount = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i] == 1){
        count++;
    } else {
        count = 0;
    }
    if(count > maxcount){
        maxcount = count;
    }
}
console.log(maxcount);



answer is 3
