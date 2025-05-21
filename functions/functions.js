

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

export { findVocals };