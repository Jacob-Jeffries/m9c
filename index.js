const inq = require('inquirer');
const fs = require('fs');
const lic = require('./license');
const { default: Choice } = require('inquirer/lib/objects/choice');
const { default: Choices } = require('inquirer/lib/objects/choices');

const year = new Date().getFullYear();
console.log(year);

const generate_README = ({}) =>
`# ${title} ${lic_badge}

## Description

${description}

## Table of Contents

-[Installation](#isntallation)
-[Usage](#usage)
-[Credits](#credits)
-[License](#license)

## Installation

${install}

## Usage

${usage}

![${alt_text}](${screenshot})

${video_link}

## License

${license}

## Credits

### Contributing Authors

${authors}

${third_party}

## Tests

${tests}

## Questions

-GitHub Username: ${gh_user}
-GitHub Profile: ${gh_profile}
-Email Address: ${email}`;

inq
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Please enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a general description of your project:',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Please enter the general installation guidlines for your project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please describe how to use your project once installed:',
    },
    {
      type: 'input',
      name: 'screenshot',
      message: 'Please enter the url for a screenshot (./images/screenshot):',
    },
    {
      type: 'input',
      name: 'alt_text',
      message: 'Please enter alternative text for your screenshot:',
    },
    {
      type: 'input',
      name: 'video_link',
      message: 'Please enter the complete URL for a video link that shows your project in action:',
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Please select the license that youd like to use.',
      choices: ['MIT', 'GLWTPL'],
      validate(answer) {
        if(answer.length < 1){
          return 'You must choose a license type.'
        }else{
          return true;
        }
      },
    },
    {
      type: 'input',
      name: 'authors',
      message: 'Please enter the names of all the authors or contributors:',
    },
    {
      type: 'input',
      name: 'third_party',
      message: 'Please enter the names of any third-party utilities used in yout project:',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please enter any relevant test instructions:',
    },
    {
      type: 'input',
      name: 'gh_user',
      message: 'Please enter your GitHub username:'
    },
    {
      type: 'input',
      name: 'gh_profile',
      message: 'Please enter the URL or your GitHub profile:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter an email for users to submit questions:',
    },
  ])
  .then((response) => {
    console.log(response);
  }
);