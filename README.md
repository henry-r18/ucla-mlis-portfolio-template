# UCLA MLIS Portfolio Template
This project is intended to provide a template for a digital portfolio satisfying the requirements of the UCLA MLIS program, but feel free to use it however you like!

## Using the template

### Prerequisites
Making use of the template will require knowledge of web development technologies (HTML, CSS, and JavaScript) and workflows (using an integrated development environment (IDE) and command-line applications). [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-web-design-and-development-14628245?replacementOf=introduction-to-web-design-and-development-2014) has an introductory web development course, and it is available for free through UCLA and many library systems. Experience with frameworks including [Vue.js](https://vuejs.org) and [Bulma](https://bulma.io) will be helpful, but not required to get up and running.

This guide will go through an example of how to build your own portfolio from this template using the popular IDE [Visual Studio Code](https://code.visualstudio.com/). The guide assumes you have Visual Studio Code installed on your computer, and that you've got the [GitHub integration](https://code.visualstudio.com/docs/editor/github) set up. You'll also need [Node.js](https://nodejs.org/en/download/) installed.

### Getting started
After [cloning this project](https://code.visualstudio.com/docs/editor/github#_setting-up-a-repository) and getting it set up in Visual Studio Code, open a new terminal (shortcut ctrl + shift + `) and run
```
npm install
```
This will install all the project's dependencies. Once the installations complete, run
```
npm run serve
```
This will start a local development server on your computer. You should be able to navigate to the server port on ```localhost``` in your browser and see the active template site!

### Modifying the template with your own content
From here, you can add your own content to the various Vue templates in the ```src/views``` directory. There should be a Vue file corresponding to each of the required components of the MLIS portfolio.

With the local development server up and running, your project should be reloaded each time you save a file, reflecting changes on the local site.

The ```public/index.html``` file is the project's main HTML index file. Update the ```<meta>``` and ```<title>``` tags in that file to reflect your portfolio's metadata.

### Building
Once you've added all your content to the Vue files under ```src/views```, run
```
npm run build
```
This will build the project for production, creating a ```dist``` directory with all the material from the ```src``` directory bundled up for deployment to the web.

### Deploying
After building your portfolio, you can deploy it to GitHub Pages. Follow the instructions [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) to set up a GitHub Pages site, then push your portfolio's ```dist``` directory to the GitHub repository for your GitHub Pages site. It might take a few minutes, but your portfolio site should now be deployed on GitHub pages (normally at <username>.github.io)!
