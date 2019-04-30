#!/usr/bin/env node

const fs = require("fs-extra");
const path = require('path');
const {execSync} = require('child_process');

const source = path.join(__dirname, '../templates/react-boilerplate');
const destination = process.argv[2];

const handleExit = () => {
  console.log();
  console.log('-------------------------------------------------------');
  console.log('Exiting...');
  console.log('-------------------------------------------------------');
  console.log();
  process.exit();
};

const handleError = err => {
  console.error('An error occured while generating your boilerplate.');
  console.error(err);
  handleExit();
};

const handleSuccess = () => {
  const appName = process.argv[2];
  console.log('Generating your app directory...');
  const installCommands = `
    cd ${appName}
    yarn cache clean
    yarn global add json
    yarn install
    json -I -f package.json -e 'this.name="${appName}"'
  `
  const options = {
    encoding: 'utf8'
  };

  console.log(execSync(installCommands, options));
  console.log('Your boilerplate was successfully generated! 🚀');
  console.log('Happy coding! 👋');
  return;
};


// copy source folder to destination
fs.copy(source, destination, function (err) {
  if (err) {
    handleError(err);
  } else {
    handleSuccess();
  }
});