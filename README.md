## Rongo Web API

## [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FStarnamics%2Frongo-api)

This is intended to be a (near) 1:1 duplicate of the endpoints for the MongoDB Atlas Data API.

⚠️ **This is in **early** development, expect bugs or incomplete features.**

## Running

To run this API, simply clone the Git repo and run the `npm run dev` command for development servers or `npm run build` and `node ./dist/index.js` for production.

As of right now the API lacks the following:

-  Authentication (no built-in authentication methods, if you would like to protect the API from unauthorized use, you will need to implement your own auth system.
-  Documentation (will add later)

The way which you connect to a MongoDB instance through the API is by sending the MongoDB Connection URI in the `Authorization` header.

If you have any features or feedback, please make an issue or implement it yourself by submitting a pull request!

(still have a lot of work to do for this!)
