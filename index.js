const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

const FILE_NAME = "example.svg";

const questions = [
  {
    type: "input",
    name: "text",
    message: "What text would you like to write (3 chars max)?",
    validate: function (value) {
      if (value.length > 3) {
        return "Please enter 3 characters or less.";
      }

      return true;
    },
  },
  {
    type: "input",
    name: "text-color",
    message: "What color text would you like to use (keyword or hex value)?",
    validate: function (value) {
      if (value.length === 0) {
        return "Please enter a color.";
      }

      return true;
    },
  },
  {
    type: "list",
    name: "shape",
    message: "What shape would you like to use?",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shape-color",
    message: "What color shape would you like to use (keyword or hex value)?",
    validate: function (value) {
      if (value.length === 0) {
        return "Please enter a color.";
      }

      return true;
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  const {
    text,
    "text-color": textColor,
    shape,
    "shape-color": shapeColor,
  } = answers;

  let shapeObj;

  switch (shape) {
    case "circle":
      shapeObj = new Circle(200, 300);
      break;
    case "triangle":
      shapeObj = new Triangle(200, 300);
      break;
    case "square":
      shapeObj = new Square(200, 300);
      break;
    default:
      throw new Error("Invalid shape");
  }

  shapeObj.setColor(shapeColor);
  shapeObj.setTextColour(textColor);

  const svg = shapeObj.render(text, textColor);
  const filePath = `./examples/${FILE_NAME}`;

  fs.writeFile(filePath, svg, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});
