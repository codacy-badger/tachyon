# Tachyon  
A modular, open-source Discord bot.
[![CircleCI](https://img.shields.io/circleci/project/github/initializesahib/tachyon/master.svg)](https://circleci.com/gh/initializesahib/tachyon/tree/master)  
[![codecov](https://img.shields.io/codecov/c/github/initializesahib/tachyon.svg)](https://codecov.io/gh/initializesahib/tachyon)  
[![Known Vulnerabilities](https://snyk.io/test/github/initializesahib/tachyon/badge.svg?targetFile=package.json)](https://snyk.io/test/github/initializesahib/tachyon?targetFile=package.json)  
[![Maintainability](https://img.shields.io/codeclimate/maintainability/initializesahib/tachyon.svg)](https://codeclimate.com/github/initializesahib/tachyon/maintainability)  
[![Dependencies](https://david-dm.org/initializesahib/tachyon.svg)](https://david-dm.org/initializesahib/tachyon)  
[![Developer Dependencies](https://david-dm.org/initializesahib/tachyon/dev-status.svg)](https://david-dm.org/initializesahib/tachyon?type=dev)  
[![Inch CI](https://inch-ci.org/github/initializesahib/tachyon.svg?branch=master)](https://inch-ci.org/github/initializesahib/tachyon)  
## How to Use
### Method 1: Using Bundles
This method is the simplest, but does not allow adding or removing modules, or changing what modules are loaded.
1. Download the latest bundle from the GitHub Releases page.  
2. Install Node.js.  
3. Run `TOKEN=[token] node bundle.js`.  
### Method 2: Using Git
This method is slightly more involved, but allows you to edit modules.json and add/remove modules or addons.
1. Clone this repository: `git clone https://github.com/initializesahib/tachyon`  
2. Install Node.js and NPM.  
3. Download dependencies: `cd tachyon && npm install`  
4. Run `TOKEN=[token] npm start` to start Tachyon.  
