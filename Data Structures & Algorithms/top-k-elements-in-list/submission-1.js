class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const result = [];
        const buckets = [];
        for (const item of nums) {
           map.set(item, (map.get(item) || 0) + 1)
        }
        for (const [key, value] of map) {
            if (!buckets[value]) buckets[value] = [];
            buckets[value].push(key)
        }
        for (let i = buckets.length - 1; i >=0 && result.length < k; i--) {
            if (buckets[i]) {
                result.push(...buckets[i])
            }
        }
        return result.slice(0, k)
    }
}
