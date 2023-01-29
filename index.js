const inq = require('inquirer');
const fs = require('fs');
const lic = require('license');

const year = new Date().getFullYear();
console.log(year);

const generate_README = ({}) =>
`# ${title} ${lic_badge}

## Description

${gen_desc}

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

${collabs}

${third_party}

## Tests

${tests}

## Questions

-GitHub Username: ${gh_user}
-GitHub Profile: ${gh_profile}
-Email Address: ${email}`;