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

// Testing mode removes output and returns 0 or 1 instead of exiting.
module.exports = (testingMode, createError) => {
  try {
    if (createError) throw 'Mock error!' // Used in testing mode.
    if (!testingMode) console.log('Starting Tachyon 1.0.0')

    const config = require('../config.json') // Loads the bot configuration.

    for (let moduleEntry of config.modules) {
      // Loads the module.
      const mod = require(`../modules/${moduleEntry.name}.js`)
      if (!testingMode) console.log(`Loaded module ${moduleEntry.name}`)
      mod()
      // TODO: Register the module with the Discord bot.
    }

    if (!testingMode) console.log('Tachyon is up and running')
    return 0
  } catch (e) {
    console.error(e)
    return 1
  }
}
