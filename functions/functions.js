

const findVocals = (string) => {
    const vocals = ["a", "e", "i", "o", "u"]
    let arr = string.split("")
    let retArr = []
    arr.forEach(element => {
        vocals.find(vocal => vocal === element.toLowerCase()) && retArr.push(element)  ;

        // Vorrei contare ogni singola vocale

    });

    return retArr.length

}

export { findVocals };