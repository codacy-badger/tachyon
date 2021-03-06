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
 */

const assert = require('assert') // Needed to assert.
const tachyon = require('./addons/core') // The code we are testing.
const stdout = require('test-console').stdout // Needed to check console output.
const stderr = require('test-console').stderr // Same as above.
const equals = require('array-equal') // Needed to compare arrays.

describe('Tachyon', () => {
  describe('addons/core', () => {
    it('should run successfully', () => {
      assert.equal(tachyon.testTachyon(false), 0)
    })
    it('should fail when an error occurs', () => {
      assert.equal(tachyon.testTachyon(true), 1)
    })
    it('should output errors in both modes', () => {
      const output = stderr.inspectSync(() => {
        tachyon.testTachyon(true)
        tachyon.initializeTachyon(true)
      })
      assert(equals(output, ['Mock error!\n', 'Mock error!\n']))
    })
    it('should produce normal output outside of testing mode', () => {
      const output = stdout.inspectSync(() => {
        tachyon.initializeTachyon(false)
      })
      assert(equals(output, ['Starting Tachyon 1.0.0\n',
        'Hello, world!\n',
        'Loaded module hello\n',
        'Tachyon is up and running\n']))
    })
  })
})
