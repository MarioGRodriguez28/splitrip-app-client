# SPLITRIP

<br>

## Description

Thee easiest way to share expenses with friends and family and stop stressing about “who owes who”. Millions of people around the world use Splitrip to organize group bills for households, trips, and more.

This is a repository for a project called "splitrip-app-server". This repository contains the server-side code for a web application that allows users to split travel expenses among a group of people.

The repository is written in JavaScript using Node.js and Express.js. It also uses MongoDB as its database. The code includes routes for handling user authentication, managing trips and expenses, and generating reports.

It appears to be an open-source project, which means that anyone can contribute to it or use it as a starting point for their own project. It may be helpful to read through the code and documentation to better understand how it works and how it could be used.

## Backlog

- Travel bucket list
- Travel piggy bank
- Books media
- Email invitation
- Add more members to the groups
- Improve styles
- Time when is created a group
- Time when is created a expense

<br>


# Frontend

## Components

- AddGroup

- GastosForm

- IsPrivate

- ListExpenses

- ListGroups

- UserGroups

## Context

- auth.context


## Services

- auth.services
  - const signupService = (newUser) => {
  return service.post('/auth/signup', newUser)
}

- const loginService = (userCredentials) => {
  return service.post('/auth/login', userCredentials)
}

- const verifyService = () => {
  return service.get('/auth/verify')
}

- const getUsersService = () => {
  return service.get('/auth/users')
}

<br>



## Links

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/MarioGRodriguez28/splitrip-app-client.git)

[Server repository Link](https://github.com/MarioGRodriguez28/splitrip-app-server.git)

[Deployed App Link](https://splitrip.netlify.app/)

### Slides

The url to your presentation slides

[Slides Link](pendding)
