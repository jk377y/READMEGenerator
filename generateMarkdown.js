
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (renderLicenseBadge = null) {
    return (license = '');
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license);
}

// TODO: Create a function to generate markdown for README

const readmeTemplate = ({ title, description, installation, usage, demoImageDirectory, demoImageAltText, license, contributing, tests, questions }) =>
`# ${title}
## Description
${description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${installation}
## Usage
${usage}
![${demoImageAltText}](${demoImageDirectory})
## License
function ifMIT() {
	$
}{license}
## Contributing
${contributing}
## Tests
${tests}
## Questions
${questions}
For Questions, I can be reached at the following:
GitHub:  https://github.com/${questionsGithub}
Email:  ${questionsEmail}

`;
module.exports = readmeTemplate;
