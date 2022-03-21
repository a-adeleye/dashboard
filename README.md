# Dashboard App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) + [Tailwind CSS](tailwindcss.com/) and hosted on [Vercel](https://vercel.com/).

## Available Scripts

In the project directory, you can run:

### `yarn start` or ### `npm start` 

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

- [x] Login page (POST/auth/admin-login)
- [x] Profile page (API GET /auth/me)
- [x] Profile edit page (API PUT /auth/me)
- [x] Refresh mechanism (GET /auth/refresh) (Checks token on each request and updates it whenever it's expired) 
- [x] Logout  (GET /auth/logout)

<div align="center"><img src="./src/dashboard-screenshot.png" alt="app screenshot" width="1000" /></div>

[Live App here](https://dashboard-six-bay.vercel.app/)