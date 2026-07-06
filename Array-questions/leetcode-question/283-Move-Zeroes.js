var moveZeroes = function(nums) {
    let index = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
            nums[index] = nums[i];
            index++;
        }
    }
    while(nums.length > index){
        nums[index] = 0;
        index++;
    }
    
};

_____________________________________________________

var moveZeroes = function(nums) {
    let index = 0;
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            ans[index] = nums[i];
            index++;
        }
    }

    while (index < nums.length) {
        ans[index] = 0;
        index++;
    }

    console.log(ans);
};

moveZeroes([0, 1, 0, 3, 12]);
