const { series } = require('gulp')
const { execSync, exec } = require('child_process')

const services = [
  'service-aaron',
  'searchbar-service',
  'David-service',
  'service-blake'
]

function clone(cb) {
  services.forEach(service =>
    exec(`git clone https://github.com/objectobject-hr/${service}.git`)
  )
  cb()
}

function npmI(cb) {
  services.forEach(service =>
    execSync(`cd ${service} && npm i`, { stdio: 'inherit' })
  )
  cb()
}

function fix(cb) {
  services.forEach(service =>
    execSync(`cd ${service} && npm audit fix`, { stdio: 'inherit' })
  )
  cb()
}

module.exports = {
  clone,
  npmI,
  fix
}
