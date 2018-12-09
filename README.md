# Tachyon  
## A modular, open-source Discord bot.
### Statuses
**CI**: [![CircleCI](https://circleci.com/gh/initializesahib/tachyon/tree/master.svg?style=svg)](https://circleci.com/gh/initializesahib/tachyon/tree/master)  
**Code Coverage**: [![codecov](https://codecov.io/gh/initializesahib/tachyon/branch/master/graph/badge.svg)](https://codecov.io/gh/initializesahib/tachyon)  
**Vulnerabilities**: [![Known Vulnerabilities](https://snyk.io/test/github/initializesahib/tachyon/badge.svg?targetFile=package.json)](https://snyk.io/test/github/initializesahib/tachyon?targetFile=package.json)  
**Maintainability**: [![Maintainability](https://api.codeclimate.com/v1/badges/1fd6d97d11e65130cdae/maintainability)](https://codeclimate.com/github/initializesahib/tachyon/maintainability)  
**Dependencies**: [![Dependencies](https://david-dm.org/initializesahib/tachyon.svg)](https://david-dm.org/initializesahib/tachyon)  
**devDependencies**: [![Developer Dependencies](https://david-dm.org/initializesahib/tachyon/dev-status.svg)](https://david-dm.org/initializesahib/tachyon?type=dev)  
**Documentation**: [![Inch CI](https://inch-ci.org/github/initializesahib/tachyon.svg?branch=master)](https://inch-ci.org/github/initializesahib/tachyon)  
### How to Use
#### Method 1: Using Bundles
This method is the simplest, but does not allow adding or removing modules, or changing what modules are loaded.
1. Download the latest bundle from the GitHub Releases page.  
2. Install Node.js.  
3. Run `TOKEN=[token] node bundle.js`.  
#### Method 2: Using Git
This method is slightly more involved, but allows you to edit modules.json and add/remove modules or addons.
1. Clone this repository: `git clone https://github.com/initializesahib/tachyon`  
2. Install Node.js and NPM.  
3. Download dependencies: `cd tachyon && npm install`  
4. Run `TOKEN=[token] npm start` to start Tachyon.  
#### Method 3: Serverless Deployment using Now
This method allows the bot to be run serverlessly using Now. You have to make changes to addons and modules before deploying.  
1. Clone the repository: `git clone https://github.com/initializahib/tachyon`
2. Install Node.js and NPM.
3. Download dependencies: `cd tachyon && npm install`  
4. Install Now: `npm install -g now` (might require sudo)
5. Run `now login` to log into your Now account.
6. Run `now` to deploy your changes. It should give you a url.
7. Visit `[now url]/now.js?token=[token]` in your browser / with CURL to start Tachyon.
