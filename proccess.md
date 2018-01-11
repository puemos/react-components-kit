- mkdir my-uikit
- npm init
- package name: (my-uikit)
- version: (1.0.0) 0.0.1
- description: A React component library boilerplate
- entry point: (index.js) ./src/index.js
- test command: jest
- git repository: (https://github.com/puemos/my-uikit.git)
- keywords: 
- author: Shy Alter
- license: (ISC)
- 
About to write to /Users/shyalter/Code/puemos/my-uikit/package.json:

{
  "name": "my-uikit",
  "version": "0.0.1",
  "description": "A React component library boilerplate",
  "main": "./src/index.js",
  "scripts": {
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/puemos/my-uikit.git"
  },
  "keywords": [],
  "author": "Shy Alter",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/puemos/my-uikit/issues"
  },
  "homepage": "https://github.com/puemos/my-uikit#readme"
}


- add react peerDeps
- npm install --save-dev babel-cli
- add build script
- created src structure
- add babel react