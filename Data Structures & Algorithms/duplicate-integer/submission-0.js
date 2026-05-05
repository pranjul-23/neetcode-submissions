class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();
        for (const item of nums) {
            if (map.has(item)) {
                map.set(item, map.get(item) + 1)
            } else {
                map.set(item, 1)
            }
        }
        for (const [key, value] of map) {
            if (value > 1) {
                return true
            }
        }
        return false;
    }
}
