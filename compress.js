const {
  format
} = require('util')
const {
  readFileSync,
  writeFileSync
} = require('fs')
const path = require('path');
const jsonConfig = require('./angular.json');
let outputPath = '';
let root = ''
try {
  let {
    defaultProject
  } = jsonConfig;
  ({
    root
  } = jsonConfig.projects[defaultProject])
  outputPath = jsonConfig.projects[defaultProject].architect.build.options.outputPath
} catch (error) {
  console.error('路径查找失败,请手动指定路径')
}
// console.log(jsonConfig)
let dir = path.join(__dirname, root, outputPath)
let jsList = ['runtime.js', 'polyfills.js', 'scripts.js', 'main.js']
let jsRawList = []
jsList.forEach((val) => {
  jsRawList.push(readFileSync(path.join(dir, val), {
    encoding: 'utf8'
  }))
})
let merge = format(...jsRawList)
writeFileSync(`element.js`, merge)
