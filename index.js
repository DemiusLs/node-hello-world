import { findVocals, findMaxNumber } from "./functions/functions.js"
import chalk from 'chalk';






if (process.argv[2] === "vocali") {
    console.log(findVocals(process.argv[3]))
} else if (process.argv[2] === "numeri") {

    console.log(findMaxNumber(process.argv))
} else {

    console.log(chalk.magenta("inserisci come terzo argomento 'numeri' o 'vocali' per utilizzare la funzione corrispondente"))
}