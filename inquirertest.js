var inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'input',
      name: 'Source',
      message: 'Left temperature is source? ',
    },
    {
      type: 'input',
      name: 'Value',
      message: 'Temperature value to convert?',
    },
    {
        type: 'list',
        name: 'Temperature',
        message: 'From ?',
        choices: ['Celsius','Farenheit','Kelvin'],
    },
    {
        type: 'list',
        name: 'Temperature2',
        message: 'To?',
        choices: ['Celsius','Farenheit','Kelvin'],
    },
  ])
  .then((answers) => {
    const source = answers.source
    const Value = answers.Value  
    const Temperature = answers.Temperature;
    const Temperature2 = answers.Temperature2;
  });