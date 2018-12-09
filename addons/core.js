/* Copyright 2018 Sahibdeep Nann
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
 *
 * PLEASE DO NOT DELETE THIS FILE:
 * This file is required for Tachyon to run.
 * Deleted it will make the bot crash on startup.
 * Unless syou plan to replace it or change the code, don't delete it. */

/**
  * Runs Tachyon in testing mode.
  * @param {boolean} causeError - If an error should be thrown or not.
  * @returns {number} - 0 if successful, 1 if failed.
  */
function testTachyon(causeError) {
  try {
    if (causeError) throw 'Mock error!'
    const modules = require('../modules.json')
    for (let moduleEntry of modules) {
      require(`../modules/${moduleEntry}.js`)()
    }
    return 0
  } catch (e) {
    console.error(e)
    return 1
  }
}

/**
 * Runs Tachyon in normal mode.
 * @param {boolean} causeError - If an error should be thrown or not.
 * @returns {number} - 0 if successful, 1 if failed.
 */
function initializeTachyon(causeError) {
  try {
    if (causeError) throw 'Mock error!'
    console.log('Starting Tachyon 1.0.0')
    const modules = require('../modules.json') // Loads the bot configuration.
    for (let moduleEntry of modules) {
      // Loads the module.
      require(`../modules/${moduleEntry}.js`)()
      console.log(`Loaded module ${moduleEntry}`)
    }
    console.log('Tachyon is up and running')
    return 0
  } catch (e) {
    console.error(e)
    return 1
  }
}

module.exports = {
  initializeTachyon,
  testTachyon
}
