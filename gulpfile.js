const { series } = require('gulp')
const { execSync, exec } = require('child_process')

const services = [
  'service-aaron',
  'searchbar-service',
  'David-service',
  'service-blake'
]

const tasks = {
  clone: function(cb) {
    exec(`git clone https://github.com/objectobject-hr/proxy-blake.git`)
    services.forEach(service =>
      exec(`git clone https://github.com/objectobject-hr/${service}.git`)
    )
    cb()
  },

  npmI: function(cb) {
    services.forEach(service =>
      execSync(`cd ${service} && npm i`, { stdio: 'inherit' })
    )
    cb()
  },

  fix: function(cb) {
    services.forEach(service =>
      execSync(`cd ${service} && npm audit fix`, { stdio: 'inherit' })
    )
    cb()
  },

  pull: function(cb) {
    execSync('cd proxy-blake && git pull', { stdio: 'inherit' })
    console.log(`\n\n ---------- proxy ${'proxy'}  \n\n`)
    services.forEach((service, i) => {
      execSync(`cd ${service} && git pull`, { stdio: 'inherit' })
      console.log(`\n\n ---------- ${service}  \n\n`)
    })
    cb()
  },

  build: function(cb) {
    execSync('webpack -d', { stdio: 'inherit' })
    cb()
  },

  start: function(cb) {
    const startScripts = []
    services.map(service => startScripts.push(`"cd ${service} && npm start"`))
    let startScript =
      'concurrently ' + startScripts.reduce((a, b) => a + ' ' + b)
    startScript += ' "npm start" "webpack -d --watch"'
    const child = exec(startScript)
    child.stdout.on('data', data => console.log(data.toString()))
    cb()
  }
}

module.exports = {
  ...tasks,
  init: series(tasks.clone, tasks.npmI, tasks.build, tasks.start)
}
