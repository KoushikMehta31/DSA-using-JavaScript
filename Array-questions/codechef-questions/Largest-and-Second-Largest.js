let arr = [1,9,3,7,2,8];
let largest = arr[0];
let secondlargest = arr[0];

for(let i=1; i<arr.length; i++){
    if(arr[i] > largest){
        secondlargest = largest;
        largest = arr[i];
    }
    else if(arr[i] > secondlargest && arr[i] != largest){
        secondlargest = arr[i];
    }
}
console.log("largest number : " + largest);
console.log("second largest number : " + secondlargest);
