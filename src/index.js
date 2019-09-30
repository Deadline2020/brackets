module.exports = function check(str, bracketsConfig) {
    let resultArr = [];
    for (let char of str) {
        let resultFind = bracketsConfig.find(item => item[1] === char);
        if (resultFind) {
            if (resultArr[resultArr.length - 1] === resultFind[0]) resultArr.pop()
            else resultArr.push(char)
        }
        else resultArr.push(char)
    }
    return !resultArr.length;
}
