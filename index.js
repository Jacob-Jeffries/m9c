const inq = require('inquirer');
const fs = require('fs');
const lic = require('license');

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
      message: 'PLease enter a general description of your project:',
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
    
  ]
  );