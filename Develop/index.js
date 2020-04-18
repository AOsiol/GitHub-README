const inquirer = require("inquirer");
const fs = require("fs");

const getUsers = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [
  {
    type: "input",
    name: "githubName",
    message: "What is your GitHub user name?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Add description of project.",
  },
  {
    type: "input",
    name: "tableOfContents",
    message: "List the table of contents.",
  },
  {
    type: "input",
    name: "installation",
    message: "How is this project installed?",
  },
  {
    type: "input",
    name: "usage",
    message: "How is this project used?",
  },
  {
    type: "input",
    name: "license",
    message: "How is this project licensed?",
  },
  {
    type: "input",
    name: "contributing",
    message: "How can people contribute to the project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What tests were done on this project?",
  },
  {
    type: "input",
    name: "questions",
    message: "Are there any common questions or faqs?",
  },
];

function writeToFile(fileName, mdContent) {
  fs.writeFile(fileName, mdContent, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      getUsers(answers.githubName).then((ghResp) => {
        const result = generateMarkdown({ answers, ghResp });
        const fileName = answers.githubName;
        writeToFile(fileName + ".md", result);

        console.log("result", result);
      });
    })
    .catch((err) => {});
}

init();
