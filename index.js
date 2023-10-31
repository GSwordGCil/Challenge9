// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide the installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide the usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide the contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide the test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'None']
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    },
];

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => {
        if (err) throw err;
        console.log('README.md has been generated!');
    });
}

function init() {
    inquirer.prompt(questions)
        .then((data) => {
            const markdownContent = generateMarkdown(data);
            writeToFile('Generated-README.md', markdownContent);
        });
}

init();

