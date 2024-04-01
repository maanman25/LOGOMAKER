const inquirer = require("inquirer");
const fs = require("fs");
const {Triangle,Circle,Square} = require("./shapes")
// Create an array of questions for user input

const questions =[{
    type: 'input',
    name: 'text',
    message: 'Please enter up to 3 characters'
},{
    type: 'input',
    name: 'textColor',
    message: 'Please enter a text color'
},{
    type: 'list',
    name: 'shape',
    message: 'Select a shape',
    choices: ['circle','square','triangle']
},{
    type: 'input',
    name: 'shapeColor',
    message: 'Please enter a shape color'
}]
console.log(Triangle)
inquirer.prompt(questions).then(res =>{
    let svg;
    if(res.shape==="triangle"){
        svg = new Triangle (res.shapeColor,res.text,res.textColor)
    }
    if(res.shape==="circle"){
        svg = new Circle (res.shapeColor,res.text,res.textColor)
    }
    if(res.shape==="square"){
        svg = new Square (res.shapeColor,res.text,res.textColor)
    }
    fs.writeFileSync("./logo.svg",svg.render())
})