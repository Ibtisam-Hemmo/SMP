
<h1 align="center">Social Media Platform</h1>

<p align="center">
  <img src="https://user-images.githubusercontent.com/62811477/221262301-c0c7e8a2-25ad-4e61-a049-b7a6e8077568.png" alt="Logo" width='100px'>
</p>

This is a full-stack social media platform built using the MERN stack (MongoDB, Express, React, Node.js) with real-time chat functionality. The platform allows users to create and edit profiles, post content such as text and images, and like and comment on posts, and connect with other users through real-time chat. The chat functionality is built using Socket.IO, allowing users to send and receive messages instantly.

Whether you're looking to connect with friends, share your thoughts, or simply explore new content, our social media platform has you covered.

## Features

- User authentication and authorization
- Ability for users to create, edit, and delete posts
- Posting system with likes.
- Real-time chat functionality for users to communicate with each other
- User profile pages to display user information and their posts
- Built with the MERN stack, providing a fast and reliable user experience.

## Technologies Used

- MongoDB
- Express.js
- React.js
- Vite
- Node.js
- Socket.io
- Redux
- Axios
- timeago.js
- sweetalert
- multer
- yup

## Setup

To run this project locally, you need to have Node.js and MongoDB installed on your system. Follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory and run `npm install` to install the dependencies.
3. Create a `.env` file in the root directory and add the following environment variables:

```
MONGO_DB=<your_mongodb_uri> 
JWT_KEY=<your_jwt_secret>
```

4. Start the server by running `npm run server`.
5. Start the client by running `npm start`.
6. Open your browser and navigate to `http://localhost:5173`.

## Contributing
Contributions are welcome! If you find a bug or want to add a new feature, please submit an issue or pull request.
