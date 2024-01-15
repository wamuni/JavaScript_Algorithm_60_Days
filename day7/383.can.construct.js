/**
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @returns {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    if (ransomNote.length > magazine.length) return false;
    const map = new Map();
    for (const str of ransomNote) {
        map.set(str, (map.get(str) || 0) + 1);
    }
    for (const str of magazine) {
        if (!map.has(str) || map.get(str) === 0) return false;
        map.set(str, map.get(str) - 1);
    }
    return true;
};
