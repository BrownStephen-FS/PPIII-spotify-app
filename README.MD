# Spotify App for PP3
### By Stephen Brown

## Project Overview
This is a simple Spotify music search app that allows the user to tap into Spotify's vast library through their API.

## Prerequisites
- Docker Engine >= latest (for Mac or other platform)
- NodeJS >= v18.12.1
- npm >= v8.19.2
- Brew >= v3.6.11 (if MacOS)
- MongoDB Compass => v1.33.1

## Getting Started
Open terminal and run
```
cd api
npm i
cd ..
cd ui
npm i
```

Then open separate terminals and cd into api and ui folders then run the below command in both terminals
	npm start

## Links
[http://localhost:3000](http://localhost:3000) - Link to the frontend (Nuxt.js) application. This is the primary user interface of the Spotify application
- [http://localhost:3001](http://localhost:3001) - Link to the backend (Express) API.
- [http://localhost:3001/spotify/v1](http://localhost:3001/spotify/v1) - Link to the Spotify API middleware. 
- [http://localhost:3001/spotify/v1/status](http://localhost:3001/spotify/v1/status) - Endpoint to check the status of our application's JWT. Returns true if a valid JWT exists. False otherwise.
- [http://localhost:3001/spotify/v1/login](http://localhost:3001/spotify/v1/login) - Endpoint request a new JWT from Spotify using the authentication workflow
- [http://localhost:3001/spotify/v1/search](http://localhost:3001/spotify/v1/search) - Endpoint for a general/global search to Spotify. Returns JSON of all results. 
