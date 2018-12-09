/*
 * Tachyon
 * Copyright 2018 Sahibdeep Nann
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

console.log('initializing')

const manifest = require('./manifest.json')

console.log(`${manifest.name} version ${manifest.version}`)
console.log(`read manifest protocol ${manifest.protocol}`)

let logger = null
let interpreter = null
let loader = null

for (let component of manifest.components) {
  if (component.load) {
    if (logger) {
      logger.info(`Loading component ${component.name} v${component.version}`)
    } else {
      console.log(`Loading component ${component.name} v${component.version}`)
    }
    const mod = require(`./components/${component.name}.js`)
    if (component.designation === 'interpreter') {
      interpreter = mod
    } else if (component.designation === 'logger') {
      logger = mod(manifest)
    } else if (component.designation === 'loader') {
      loader = mod
    }
  }
}

if (interpreter === null || logger === null || loader === null) {
  if (logger) {
    logger.error('One or more components were not loaded')
  } else {
    console.error('One or more components were not loaded')
  }
  process.exit(1)
}

for (let mod of manifest.modules) {
  if (mod.load) {
    logger.info(`Loading module ${mod.name} v${mod.version}`)
    if (mod.type === 'action') {
      loader(mod.name, logger, interpreter.run)
    }
  }
}
