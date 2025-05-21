
/**
 * Data una stringa ritorna il numero di vocali
 * 
 * @param {string} string 
 * @returns {number} count 
 */
const findVocals = (string) => {
    const vocals = ["a", "e", "i", "o", "u"]
    let arr = string.split("")
    let vocalsCount = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
    }
    arr.forEach(element => {
        vocals.find(vocal => vocal === element.toLowerCase()) && (vocalsCount[element.toLowerCase()]++);

        // Vorrei contare ogni singola vocale

    });
    let count = 0;
    for (let vocal in vocalsCount) {
        count = count + vocalsCount[vocal]
    }


    return count
}



/**
 * Description placeholder
 *
 * @param {array} array 
 * @returns {number} maxNum
 */
const findMaxNumber = (array) => {

    //elimino i primi 3 elementi di process.argv
    let newArr = array.slice(3);

    //ciclo l'array in cerca del maggiore
    let maxNum = parseInt(newArr[0])

    newArr.forEach(num => maxNum < parseInt(num) && (maxNum = parseInt(num)))

    return maxNum

}

export { findVocals, findMaxNumber };