import inquirer from "inquirer";
import chalk from "chalk";
export const diagonostics = async () => {
    const input = await inquirer.prompt([{ name: "txt", message: chalk.yellowBright("Enter your sentence..."), type: "input" }]);
    const wordsArray = input.txt.trim().split(/\s+/);
    const wordsCount = chalk.bold.magentaBright(wordsArray.length);
    const lettersCount = chalk.magentaBright.bold(wordsArray.join("").length);
    const noOfArticles = chalk.magentaBright.bold(wordsArray.filter((word) => word == "a" || word == "an" || word == "the").length);
    const pronouns = ["i", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them", "my", "your", "his", "its", "our", "their", "mine", "yours", "ours", "theirs", "myself", "yourself", "himself", "herself", "itself", "ourselves", "yourselves", "themselves", "this", "that", "these", "those", "who", "whom", "whose", "which", "that", "anybody", "anyone", "anything", "somebody", "someone", "something", "nobody", "no one", "nothing", "everybody", "everyone", "everything", "both", "few", "many", "several", "all", "each", "either", "none", "some", "one", "neither", "every", "any"];
    const pronounCount = chalk.magentaBright.bold(wordsArray.filter((word) => pronouns.includes(word.toLowerCase())).length);
    let wordsArrayLowercase = wordsArray.map((word) => word.toLowerCase());
    const wordFrequencies = {};
    wordsArray.forEach(word => {
        wordFrequencies[word] = (wordFrequencies[word] || 0) + 1;
    });
    console.log(chalk.cyanBright(`
                 *********************************************
                              Diagonostics report: 
                                   Basics:     

                  Word Count: ${wordsCount} words           
                  Letter Count: ${lettersCount} letters  
                  No. of Articles: ${noOfArticles} artciles
                  No. of Pronouns: ${pronounCount} pronouns

                 ********************************************`));
    console.log(chalk.cyanBright(`
                          Word Frequency Analysis:`));
    Object.entries(wordFrequencies).forEach(([word, frequency]) => {
        console.log(chalk.magentaBright.bold(`                  ${word}: ${frequency} Times`));
    });
    console.log(chalk.cyanBright("                 ********************************************"));
};
