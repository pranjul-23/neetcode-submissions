class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    createMap(str) {
        const map = new Map();
        for (let char of str) {
            if (!map.has(char)) {
                map.set(char, 1)
            } else {
                map.set(char, map.get(char) + 1)
            }
        }
        return map;
    }
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let s1 = this.createMap(s);
        let t1 = this.createMap(t);
        for (let [key, value] of s1) {
            if (value !== t1.get(key)) return false;
        }
        return true;
    }
}
