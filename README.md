Project Title: Music library

Installation:

Create a new directory of the project. You can call it whatever you like, something along the lines of music-library would work.

Initialize a git repo with git init.

Add a README.md file in the root of your music-library folder. Use this file to document your project.

Create a remote repository for the project on Github.

Connect your remote and local repositories. There will be instructions on how to do this on Github.

Initialize a node project in your folder with npm init -y. This will create a default package.json.

Create a .gitignore file. You can do this automatically with npx gitignore node, npx is similar to npm, but is used to run scripts without having to store them on your computer. This will create a new file filled with common .gitignore entries.

Set up eslint in this project with npx eslint --init. Answer the question to configure it for common js that runs in node.

We are also going to use Prettier to format our code. Install the Prettier VS Code extension for javascript, and create a new file called .prettierrc.json. This should contain:

{
"trailingComma": "es5",
"tabWidth": 2,
"semi": true,
"singleQuote": true
}
You can format all the files in your project with the command npx prettier . --write
Its best to do this just before committing code to github.
