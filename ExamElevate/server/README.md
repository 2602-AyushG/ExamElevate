# First two steps are for that person ***which is making the backend from scratch*** but the ***person who is cloning this repo*** must follow from the fourth step so as to have a fast hands on (if not done this type of thing earlier)


## First Step is to follow these substeps

1. `npm init `  initializes a new Node.js project by creating a package.json file, which contains metadata about the project and its dependencies.
2. `npm i -D nodemon` Installs nodemon as a development dependency, which automatically restarts the server when changes are made to the code.
3. `npm i express` Installs the Express framework, which is used for building web applications and APIs.
4. `npm i mysql` Installs the mysql package which is used to interact with MySQL databases in Node.js.
5. `npm i cors` Installs Cors, which is a middleware used to enable Cross-Origin Resource Sharing in Node.js.
6. `npm i express-validator` Installs Express Validator, which is a set of validation middleware for Express.
7. `npm i bcryptjs` Installs Bcrypt, which is a library used for password hashing.
8. `npm i jsonwebtoken` Installs JsonWebToken, which is a library used for generating and verifying JSON Web Tokens.
9. `npm i body-parser` Installs the body-parser package which is used to parse incoming request bodies in middleware and make it available under the req.body property.
10. `npm i cookie-parser` Installs the cookie-parser package which is used to parse HTTP request cookies and make them available under the req.cookies property.
11. `npm i npm i crypto` Installs the built-in crypto module in Node.js which provides cryptographic functionality, such as encryption and decryption.
12. `npm i email-validator` Installs the email-validator package which is used to validate email addresses in Node.js.
13. `npm i nodemailer` Installs the nodemailer package which is used to send emails with Node.js using SMTP or other transport mechanisms.

PS: Development dependencies are packages or modules that are only required during the development or testing phase of a project, and not during the runtime of the application. 

---

## Second Step is to initialize git repository by typing `git init`

---

## Third Step is to make `index.js`

---
 1. Note : index.js will be our entry point, also it is our express app
 2. Note : We can use ThunderClient or Postman to test our API's or https requests(mainly GET, POST, PUT, DELETE)
 3. Note : Always add your node_modules in .gitignore
 
 
---

## Fourth Step

Type `nodemon .\index.js` in a new terminal to start your server

---
