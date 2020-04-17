function generateMarkdown(data) {
  return `

## Name:
${data.answers.name}
![github avatar img](${data.ghResp.avatar_url} "My Image");

## Title 
${data.answers.title}

## Project Description
 ${data.answers.description}

 ## Installation
 ${data.answers.installation}

 ## Usage
 ${data.answers.usage}

 ## License
${data.answers.license}

## Contribution
${data.answers.contributing}

`;
}

module.exports = generateMarkdown;
