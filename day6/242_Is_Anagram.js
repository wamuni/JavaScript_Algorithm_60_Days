/**
 *
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length != t.length) return false;
    const map_s = new Map();
    const map_t = new Map();
    for (let i of s) {
        if (map_s.has(i)) {
            map_s.set(i, map_s.get(i) + 1);
        } else {
            map_s.set(i, 1);
        }
    }
    for (let i of t) {
        if (map_t.has(i)) map_t.set(i, map_t.get(i) + 1);
        else map_t.set(i, 1);
    }
    for (const x of map_s.keys()) {
        if (map_s.get(x) !== map_t.get(x)) {
            return false;
        }
    }
    return true;
};
