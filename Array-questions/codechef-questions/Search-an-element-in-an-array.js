function searchElement(N,X,A) {
    // write your code here
    for(let i=0; i< N; i++){
        if(A[i] === X){
            return "YES";
        }
    }
    return "NO";
}
