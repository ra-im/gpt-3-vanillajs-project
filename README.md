# gpt-3-vanillajs-project

## Description

This project is a simple clone of ChatGpt for answering tech related questions.

## Table of Contents

- [Technologies_Used](#technologies_used)
- [Install_and_Run](#install_and_run)
- [Usage](#usage)
- [Features](#features)
- [Documentation](#documentation)
- [Contact](#contact)

## Technologies_Used

- `Vite`: Vite is a build tool that enables fast development and optimized production builds for modern web applications.
- `HTML`: HTML is used for structuring and presenting content.
- `CSS`: CSS is used for styling and layout of the web page.
- `Javascript`: JavaScript is used for adding interactivity and behavior to the web page.
- `Shell`: The shell is a command-line interface that provides an environment for interacting with an operating system. There exists some shell scripts within this project.
- `Docker`: Docker is a containerization platform that allows developers to package applications and their dependencies into portable containers. It provides a consistent and isolated environment for running applications across different systems, making deploying and managing software easier.
- `cors`: CORS (Cross-Origin Resource Sharing) is a mechanism that allows web browsers to make cross-origin requests securely. It is used to control access to resources (e.g., APIs) on different domains, ensuring proper security and preventing unauthorized access.
- `dotenv`: dotenv is a library that allows you to load environment variables from a .env file into your application's environment. It is used in this development environment to manage sensitive configuration information, such as the API key.
- `express`: Express is a popular web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs. Express is used to build the server-side of this application.
- `nodemon`: Nodemon is a development tool that monitors changes in your Node.js applications and automatically restarts the server when files are modified.
- `openAIApi`: OpenAi offers various tools and APIs for natural language processing, machine learning, and other AI-related tasks. One of their APIs was used in this project.

## Install_and_Run
To install and run this program, you have to generate an OpenAi API key. Create a .env file within the backend directory and paste your key in this file using thie format:
```.env
OPENAI_API_KEY="YOUR_API_KEY"
```
save this file.

### Install

Step-by-step instructions on how to install and set up the project. Include any dependencies, libraries, or specific configurations required. In your terminal, run:

```shell
$ git clone https://github.com/ra-im/gpt-3-vanillajs-project.git
$ cd gpt-3-vanillajs-project
$ cd frontend
$ npm install
$ cd ../backend
$ npm install
```

### Run

Step-by-step instructions on how to run the program.

For the frontend side, while in the directory of the cloned project, run the following command in your terminal:

```shell
$ cd frontend
$ npm run dev
```

the frontend application will start to run on port 5173 on your machine.

For the server side, open a new terminal and while in the directory of the cloned project, run the following command in your terminal:

```shell
$ cd backend
$ npm start
```

the backend application will start to run on port 5000 on your machine.

## Usage

- Begin your conversation with the AI chatbot by inserting your query into the prompt session.

## Features

- Use the input field to ask tech related questions.
- Query the ChatGpt text-davinci-003 model to troubleshoot code snippets, or generate insights to your code.

## contact

Connect with me on [LinkedIn](https://www.linkedin.com/in/raheem-isaac/) and also on [Twitter](https://twitter.com/ra_im00?t=lWseaxeErEm0y9ZjyrdOOQ&s=03)
