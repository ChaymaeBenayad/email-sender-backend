
# Mail Express

Mail Express is a responsive web application that allows users to stay connected with their contacts. They can send emails from any device. It is developed using React.js and Axios for the front-end and Node.js, Express.js and Nodemailer for the back-end.
## Screenshot

![mailExpress-screenshot](https://user-images.githubusercontent.com/78702422/209901885-d4b61836-310e-46b0-b3d7-f44deef23ef6.png)


## Tech Stack

**Client:** React and Axios. (Repository Link: https://github.com/ChaymaeBenayad/email-sender-frontend)

**Server:** Node, Express and Nodemailer.


## Features

- Check if form inputs are valid
- Send email to a specific person
- Display a loading spinner while waiting for the email to be sent
- Notify the user if the email is sent successfully or if something went wrong

## Run Project Locally

Clone the project

```bash
  https://github.com/ChaymaeBenayad/email-sender-backend
```

Go to the project directory

```bash
  cd email-sender-backend
```
Create .env file

```bash
  touch .env
```
Add the environment variables to .env file

```bash
HOST=your SMTP hostname (example: outlook hostname: smtp.office365.com)
USER=your email address (example: example@outlook.fr)
PASSWORD=your password (example: example1234)
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```




## Lessons Learned

- Handling data between the client and the server side using Axios
- Creating a server using Express.js
- Working with Nodemailer, a module for Node.js apps that makes email sending so easy 
- Adding environment variables
- Deploying a full-stack JavaScript app on Render


## Live Demo

https://email-sender-hyv6.onrender.com/