// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'lta',
        message: 'Please add a link to your GitHub account:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Would you like to add your email so others could contact you? Leave Empty if not.'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How is your application installed?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your application used?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How has your application been tested?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'If your application uses licenses, please select them below:',
        choices: [
            'AFL-3.0',
            'Apache-2.0',
            'Artistic-2.0',
            'BSL-1.0',
            'BSD-2-Clause',
            'BSD-3-Clause',
            'BSD-3-Clause-Clear',
            'BSD-4-Clause',
            '0BSD',
            'CC',
            'CC0-1.0',
            'CC-BY-4.0',
            'WTFPL',
            'ECL-2.0',
            'EPL-1.0',
            'EPL-2.0',
            'EUPL-1.1',
            'AGPL-3.0',
            'GPL',
            'GPL-2.0',
            'GPL-3.0',
            'LGPL',
            'LGPL-2.1',
            'LGPL-3.0',
            'ISC',
            'LPPL-1.3c',
            'MS-PL',
            'MIT',
            'MPL-2.0',
            'OSL-3.0',
            'PostgreSQL',
            'OFL-1.1',
            'NCSA',
            'Unlicense',
            'Zlib',
            'No License Used'
            
        ]
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Are there any contributors to your application? If so, list them. If not, leave empty.'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateReadme(data), (err) => {
        if (err) throw err;
        console.log('README.md has been generated!')
    })
}

function generateReadme(data) {
    return `
# ${data.title}

## Table of Contents:

[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributors](#contributors) 
[Questions](#questions)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Testing

${data.testing}

## License

${data.license}

## Contributors

${data.contributors}

## Questions

My GitHub
${data.lta}
${data.email}
    `
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', answers)
    })
}

// Function call to initialize app
init();