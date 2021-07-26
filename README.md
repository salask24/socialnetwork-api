# socialnetwork-api

## Description
A REST API for a social media app. Built with Express, Mongoose, and MongoDB.

## User Story
As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data.

## Packages
- express
- Mongoose
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

## How to test in Insomnia (Endpoints)

### User

- Get all users: GET /api/users
- Create a user: POST /api/users
- Get user by ID: GET /api/users/:id
- Update a user: PUT /api/users/:id
- Delete a user: DELETE /api/users/:id
- Add a friend: PUT /api/users/:userId/friends/:friendId
- Delete a friend: DELETE /api/users/:userId/friends/:friendId

### Thought

- Get all thoughts: GET /api/thoughts
- Create a thought: POST /api/thoughts
- Get thought by ID: GET /api/thoughts/:id
- Update a thought: PUT /api/thoughts/:id
- Delete a thought: DELETE /api/thoughts/:id


### Reaction

- Add a reaction: PUT /api/thoughts/:id/reactions
- Delete a reaction: DELETE /api/thoughts/:id/reactions

## Questions

If you have questions, email me at salask.0104@gmail.com or reach out on GitHub @ salask24.

