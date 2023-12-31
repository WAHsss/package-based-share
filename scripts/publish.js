// scripts/publish.js
const globby = require('globby')
const inquirer = require('inquirer')
const fs = require('fs-extra')
const handlebars = require('handlebars')
const execa = require('execa')
const cwd = process.cwd()

const getPackagePath = () => {
  const packagePaths = globby.sync('../packages', {
    cwd: __dirname,
    onlyDirectories: true,
    deep: 1,
  })
  return packagePaths.map((item) => item.replace('../', ''))
}

const choosePackage = async (packages) => {
  const answer = await inquirer.prompt({
    type: 'checkbox',
    name: 'packages',
    message: '选择你要发布的包',
    choices: [...packages],
  })
  return answer
}


const publish = async () => {
  const packages = getPackagePath()
  const publishPackages = await choosePackage(packages)
  if(publishPackages.packages.length !== 0){
    execa.commandSync('lerna publish', {
      stdio: 'inherit',
      cwd,
    })
  } else {
    console.log("没有选择包")
  }
}

publish()