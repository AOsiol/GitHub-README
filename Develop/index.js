const inquirer = require("inquirer");
const fs = require("fs");
// const axios = require("axios");
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
        console.log("result", result);
        //   writeToFile("temp_README.md", generateMarkdown({ answers, ghResp }));
      });
    })
    .catch((err) => {});
}

// init();
function mock() {
  const answers = {
    name: "aosiol",
    title: "Sorrell",
    description: "awesome",
    installation: "easy",
    usage: "fun time",
    license: "yes",
    contributing: "Scotty Z.",
  };
  getUsers(answers.name).then((ghResp) => {
    const result = generateMarkdown({ answers, ghResp });
    const fileName = answers.name;

    writeToFile(fileName + ".md", result);
  });
}

mock();
