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
    console.log(`\n\n ---------- proxy ${i + 1}  \n\n`)
    services.forEach((service, i) => {
      execSync(`cd ${service} && git pull`, { stdio: 'inherit' })
      console.log(`\n\n ---------- ${service}  \n\n`)
    })
    execSync('webpack -d', { stdio: 'inherit' })
    cb()
  },

  startServices: function(cb) {
    const startScripts = []
    services.map(service => startScripts.push(`"cd ${service} && npm start"`))
    let startScript =
      'concurrently ' + startScripts.reduce((a, b) => a + ' ' + b)
    const child = exec(startScript)
    child.stdout.on('data', data => console.log(data.toString()))
    cb()
  }
}

module.exports = {
  ...tasks
}
