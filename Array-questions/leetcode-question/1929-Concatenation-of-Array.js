var getConcatenation = function(nums) {
    let ans = [];
    let n = nums.length;
    for(let i=0; i<=n; i++){
        if(ans[i] == nums[i] && ans[i + n] == nums[i]){
            ans = nums.concat(nums);
        }
    }
    return ans;
};

_______________________________________________________

var getConcatenation = function(nums) {
    let ans = [...nums, ...nums];
    console.log(ans);
};
getConcatenation([1,2,1]);

___________________________________________________________



var getConcatenation = function(nums) {
    let ans = nums.concat(nums);
    console.log(ans);
};
getConcatenation([1,2,1]);
