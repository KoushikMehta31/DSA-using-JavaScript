
var maximumWealth = function(accounts) {
    let max = 0;
    let n = accounts.length;
    for(let i=0; i<n; i++){
        let sum = 0;
        let m = accounts[i].length;
        for(let j=0; j<m; j++){
            sum = sum + accounts[i][j];
        }
        if(sum > max){
            max = sum;
        }
    }
    return max;
};
