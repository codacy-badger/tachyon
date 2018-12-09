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

const {createLogger, format, transports} = require('winston')

module.exports = manifest => {
  return createLogger({
    level: manifest.log,
    format: format.combine(
      format.colorize(),
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      format.printf(
        i => `[${i.timestamp}] ${i.level}: ${i.message}`
      )),
    transports: [new transports.Console()],
  })
}
