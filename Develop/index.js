// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// Questions asked to the user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do users use your project?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Who are your collaborators if there are any?'
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