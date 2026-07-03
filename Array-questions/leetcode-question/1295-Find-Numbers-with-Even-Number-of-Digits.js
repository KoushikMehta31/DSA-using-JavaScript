var findNumbers = function(nums) {
    let ans = 0;
    for(let i=0; i<nums.length; i++){
        let number = nums[i];
        let count=0;

        while(number > 0){
            count++;
            number = Math.floor(number/10);
        }
        if(count%2===0){
            ans++;
        }
    }
    return ans;
};
