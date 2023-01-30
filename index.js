const inq = require('inquirer');
const fs = require('fs');
const { default: Choice } = require('inquirer/lib/objects/choice');
const { default: Choices } = require('inquirer/lib/objects/choices');

const generate_README = (title, description, install, usage, alt_text,screenshot, video_link, license, authors, third_party, test, gh_user, gh_profile, email) =>
`# ${title} ![License Badge](${license[1]})

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

${license[0]}

## Credits

### Contributing Authors

${authors}

${third_party}

## Tests

${test}

## Questions

-GitHub Username: ${gh_user}
-GitHub Profile: ${gh_profile}
-Email Address: ${email}`;

inq
  .prompt([
    {
      type: 'input',
      message: 'Please enter the title of your project:',
      name: 'title'
    },
    {
      type: 'input',
      message: 'Please enter a general description of your project:',
      name: 'description'
    },
    {
      type: 'input',
      message: 'Please enter the general installation guidlines for your project',
      name: 'install'
    },
    {
      type: 'input',
      message: 'Please describe how to use your project once installed:',
      name: 'usage'
    },
    {
      type: 'input',
      message: 'Please enter the url for a screenshot, for example ./images/screenshot :',
      name: 'screenshot'
    },
    {
      type: 'input',
      message: 'Please enter alternative text for your screenshot:',
      name: 'alt_text'
    },
    {
      type: 'input',
      message: 'Please enter the complete URL for a video link that shows your project in action:',
      name: 'video_link'
    },
    {
      type: 'input',
      message: 'Please enter the year of copyright:',
      name: 'year'
    },
    {
      type: 'checkbox',
      message: 'Please select the license that youd like to use.',
      name: 'license',
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
      message: 'Please enter the names of all the authors or contributors:',
      name: 'authors'
    },
    {
      type: 'input',
      message: 'Please enter the names of any third-party utilities used in yout project:',
      name: 'third_party'
    },
    {
      type: 'input',
      message: 'Please enter any relevant test instructions:',
      name: 'test'
    },
    {
      type: 'input',
      message: 'Please enter your GitHub username:',
      name: 'gh_user'
    },
    {
      type: 'input',
      message: 'Please enter the URL or your GitHub profile:',
      name: 'gh_profile'
    },
    {
      type: 'input',
      message: 'Please enter an email for users to submit questions:',
      name: 'email'
    },
  ])
.then((response) => {
  console.log(response);

  let license = generate_license(response);
  // console.log(license);

  const { title, description, install, usage, alt_text, screenshot, video_link, authors, third_party, test, gh_user, gh_profile, email } = response;

  const README_content = generate_README(title, description, install, usage, alt_text, screenshot, video_link, license, authors, third_party, test, gh_user, gh_profile, email);

  console.log(README_content);

  fs.writeFile('README.md', README_content, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md file!')
  );
});

function generate_license({year, license: lic, authors}){
  let MIT = 
  `MIT License

  Copyright (c) ${year} ${authors}

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;

  const MIT_badge = "https://img.shields.io/badge/license-MIT-green";

  let GLWTPL = 
  `GLWT(Good Luck With That) Public License

  Copyright (c) ${year} Everyone, except ${authors}

  Everyone is permitted to copy, distribute, modify, merge, sell, publish, sublicense or whatever they want with this software but at their OWN RISK.

  Preamble

  The author has absolutely no clue what the code in this project does. It might just work or not, there is no third option.

  GOOD LUCK WITH THAT PUBLIC LICENSE

  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION, AND MODIFICATION

      0. You just DO WHATEVER YOU WANT TO as long as you NEVER LEAVE A TRACE TO TRACK THE AUTHOR of the original product to blame for or hold responsible.

  IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  Good luck and Godspeed.`;

  const GLWTPL_badge = "https://img.shields.io/badge/license-GLWTPL-green";

  let license = "";
  let badge = "";

  switch (lic[0]) {
    case 'MIT':
      license = MIT;
      badge = MIT_badge;
      return [license, badge];
    case 'GLWTPL':
      license = GLWTPL;
      badge = GLWTPL_badge;
      return [license, badge];
    default:
      console.log("FML");
  }
}