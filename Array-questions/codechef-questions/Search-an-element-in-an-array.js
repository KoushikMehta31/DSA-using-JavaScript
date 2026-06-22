function searchElement(N,X,A) {
    // write your code here
    for(let i=0; i< N; i++){
        if(A[i] === X){
            return "YES";
        }
    }
    return "NO";
}

_____________________________________________________


let a = [7, 3, 5, 2, 1];
let x = 3;
let n = a.length;

for(let i=0; i<n; i++){
    if(a[i] === x){
        console.log("YES");
        return;
    }
}
console.log("NO");
