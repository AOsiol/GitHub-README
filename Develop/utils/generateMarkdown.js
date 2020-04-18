function generateMarkdown(data) {
  return `

## Name 
 ${data.answers.githubName}
![github avatar img](${data.ghResp.avatar_url} "My Image")

## Email
 ${data.ghResp.email}

## Title 
 ${data.answers.title}

## Project Description
 ${data.answers.description}

## Table of Contents
 ${data.answers.tableOfContents}

## Installation
 ${data.answers.installation}

## Usage
 ${data.answers.usage}

## License
 ${data.answers.license}

## Contributing
 ${data.answers.contributing}

## Tests
 ${data.answers.tests}

## Questions
 ${data.answers.questions}


`;
}

module.exports = generateMarkdown;
