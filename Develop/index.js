// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Who are your collaborators.'
    },
    {
        type: 'input',
        name: 'features',
        message: 'What are some features of your project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What message do you have for your contributors?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license:',
        choices: [
            'GNU AGPLv3',
            'GNU GPLv3',
            'GNU LGPLv3',
            'Mozilla Public License 2.0',
            'Apache License 2.0',
            'MIT License',
            'Boost Software License 1.0',
            'The Unlicense'
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, error =>{
        if (error) {
            throw new Error(error);
        } else {
            console.log("Successfully wrote to file.");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data =>{
        writeToFile('./README.md', generateMarkdown(data));
    })
}

// Function call to initialize app
init();