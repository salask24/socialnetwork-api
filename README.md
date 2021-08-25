# socialnetwork-api

## Description
A REST API for a social media app. Built with Express, Mongoose, and MongoDB.

## User Story
As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data.

## Packages
- express
- Mongoose ODM
- MongoDB
- moment

## Usage

1. Make sure you have MongoDB installed
2. Clone repo above 
3. Install dependencies [npm i] 
4. Run server with ```npm start``` 
5. Open insomnia to test API

## Models
- User
- Thought 
- Reaction


## DEMO

(Part 1) https://drive.google.com/file/d/1DgoFdgecTt8qkuEmHOEo03O9oCDGPeBN/view?usp=sharing

(Part 2) https://drive.google.com/file/d/1RRVrWUrRXM27XotdY21A7q4iBa6vXCTB/view?usp=sharing


## How to test in Insomnia (Endpoints)

### User

- Get all users: GET /api/user
- Create a user: POST /api/user
- Get user by ID: GET /api/user/:id
- Update a user: PUT /api/user/:id
- Delete a user: DELETE /api/user/:id
- Add a friend: PUT /api/user/:userId/friends/:friendId
- Delete a friend: DELETE /api/user/:userId/friends/:friendId

### Thought

- Get all thoughts: GET /api/thought
- Create a thought: POST /api/thought
- Get thought by ID: GET /api/thought/:id
- Update a thought: PUT /api/thought/:id
- Delete a thought: DELETE /api/thought/:id


### Reaction

- Add a reaction: PUT /api/thought/:id/reactions
- Delete a reaction: DELETE /api/thought/:id/reactions

## Questions

If you have questions, email me at salask.0104@gmail.com or reach out on GitHub @ salask24.

