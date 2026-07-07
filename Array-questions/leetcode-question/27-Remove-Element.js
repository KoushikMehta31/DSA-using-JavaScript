var removeElement = function(nums, val) {
    let count = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] != val){
            nums[count] = nums[i];
            count++;
        }
    }
    return count;
};

______________________________________________________

let nums = [3,2,2,3];
let ans = [];
let count = 0;
let val = 3;
for(let i=0; i<nums.length; i++){
    if(nums[i] != val){
        ans[count] = nums[i];
        count++;
    }
}
console.log(count);
console.log(ans);
