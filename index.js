// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'Enter a title for your project.',
        type: 'input',
        name: 'title',
    },
    {
        message: 'Enter a description of your project.',
        type: 'input',
        name: 'description',
    },
    {
        message: 'Enter the table of contents for this project.',
        type: 'input',
        name: 'table',
    },
    {
        message: 'Enter the installation instructions for this project.',
        type: 'input',
        name: 'install',
    },
    {
        message: 'Enter the usage information for this project.',
        type: 'input',
        name: 'usage',
    },
    {
        message: 'Choose a license badge for this project',
        type: 'list',
        choices: ['MIT', 'Apache License 2.0', 'Mozilla Public License 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        name: 'license',
    },
    {
        message: 'List the contributors to this project.',
        type: 'input',
        name: 'contributors',
    },
    {
        message: 'Enter the testing instructions for this project.',
        type: 'input',
        name: 'testing',
    },
    {
        message: 'Enter the email address you would like to contacted at for questions regarding this project.',
        type: 'input',
        name: 'contact',
    },
    {
        message: 'Enter your GitHub username.',
        type: 'input',
        name: 'github',
    },
];

    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers)
    })
    .catch(err => console.log(err))

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();