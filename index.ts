#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

import { diagonostics } from "./function.js";

console.log(chalk.greenBright("---------::::::: WELCOME TO SOHAIB SENTENCE DIAGONOSTICS :::::::---------"));


async function wantRepeat(fun:Function){
    let condition = true
    do{
       await fun()
    const repeat = await inquirer.prompt
    ([{name:"choice",message:"Do you want to try another sentence?",
    type:"confirm",default:false,}])
    condition = repeat.choice
    }while (condition)
}
wantRepeat(diagonostics)


//////////////////////////////////////////////

// import inquirer from "inquirer";

// async function countWords() {
//     const answers: { Sentence: string } = await inquirer.prompt([
//         {
//             name: "Sentence",
//             type: "input",
//             message: "Enter your text to count the words: "
//         }
//     ]);

//     const words = answers.Sentence.trim().split(/\s+/);

//     console.log(`Your sentence has ${words.length} words`);
// }

// async function wantRepeat() {
//     const answer = await inquirer.prompt([
//         {
//             type: 'confirm',
//             name: 'confirmation',
//             message: 'Do you want to try another sentence?',
//             default: false
//         }
//     ]);

//     const confirmed: boolean = answer.confirmation;

//     if (confirmed) {
//         await countWords();
//     } else {
//         console.log('Thank you');
//         process.exit(); // Exit the process when the user doesn't want to repeat
//     }
// }


//     await countWords();
    
//     do {
//         await wantRepeat();
//     } while (true);
///////////////////////////////////////////////////

//issue with this code is that program is exting the function wantRepeat
// import inquirer from "inquirer";

// async function countWords(){
// const answers: {
//     Sentence: string
// } = await inquirer.prompt([{
//     name: "Sentence",
//     type: "input",
//     message: "Enter you text to count the words: "
// }])


// const words = answers.Sentence.trim().split(/\s+/)

// console.log(`Your sentence has ${words.length} words`)
// }

// async function wantRepeat() {
//     const answer = await inquirer.prompt([
//         {
//             type: 'confirm',
//             name: 'confirmation',
//             message: 'Do you want to try another sentence?',
//             default: false
//         }
//     ]);

//     const confirmed: boolean = answer.confirmation;

//     if (confirmed) {
//         await countWords()
//     } 
//     else {
//         console.log('Thank you');
//         return

//     }
//     return
// }

// await countWords()
// do{
// await wantRepeat()
// }
// while(true)

