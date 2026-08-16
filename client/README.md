<!-- # Vishnu Kant Pandey — AI Automation & Full-Stack Portfolio

A responsive, animated MERN portfolio built with React + Vite, Tailwind CSS, Framer Motion, Express, MongoDB/Mongoose and Axios.

## Features

- Responsive dark AI/developer portfolio
- Hero section with profile image
- Scroll navigation and active section
- Framer Motion animations
- Skills and services sections
- Interactive AI automation flow
- Experience and education timeline
- Dynamic projects loaded from MongoDB
- Project category filtering
- Individual project detail pages
- Functional contact form
- Contact messages stored in MongoDB
- Optional email notification through Nodemailer
- Loading, success and error states
- SEO metadata
- Ready for deployment

## 1. Requirements

- Node.js 20+
- MongoDB Atlas account or local MongoDB
- Git

## 2. Install

From the project root:

```bash
npm install
npm run install-all
```

## 3. Environment variables

Create `server/.env`:

```env
PORT=5000
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/vishnu_portfolio
CLIENT_URL=http://localhost:5173

# Optional email notification
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
CONTACT_RECEIVER=
```

Create `client/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

## 4. Seed projects

From the root:

```bash
cd server
npm run seed
```

This inserts the portfolio projects into MongoDB.

## 5. Run

From the root:

```bash
npm run dev
```

Frontend:
`http://localhost:5173`

Backend:
`http://localhost:5000`

## API

### Health
`GET /api/health`

### Projects
`GET /api/projects`
`GET /api/projects/:slug`

### Contact
`POST /api/contact`

Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project enquiry",
  "message": "Hello Vishnu..."
}
```

## MongoDB

Create a database named:

`vishnu_portfolio`

The application creates the `projects` and `contacts` collections automatically.

## Image

The supplied profile image is stored at:

`client/public/profile.png`

Replace that file whenever you want to update the hero image.

## Production

Set the production frontend URL in `CLIENT_URL`, and set `VITE_API_URL` to the deployed API URL before building the client. -->
