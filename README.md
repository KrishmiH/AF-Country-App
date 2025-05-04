# AF-Country-App
A responsive React application that fetches and displays country data using the REST Countries API.

## Live Demo

👉 [View the live application here](host link)

---

## Project Structure

----

AF-Country-APP/
├── api/ # Backend API routes
├── client/ # Frontend React app
├── utils/ # Utility files (e.g., database config)
├── .env
├── vercel.json
├── package.json


## Setup Instructions

### 1️⃣ **Clone the repository**

```bash
git clone https://github.com/KrishmiH/AF-Country-App.git
cd AF-Country-APP

### 2️⃣  **Install backend dependencies**

```bash
npm install

### 3️⃣ **Install frontend dependencies**

```bash
cd client
npm install

### 4️⃣ **Set environment variables - create env*

```ini
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

### 5️⃣ **Run the backend server**

```bash
npm run dev

### 6️⃣ **Run the frontend client**

```bash
cd client
npm run dev

✅ Frontend runs on http://localhost:5173/
✅ Backend runs on http://localhost:3000/


Features:

Country list with search & filters (region, subregion, alphabet)
View country details
User authentication (JWT-based)
Add/remove favorite countries
View user profile
Responsive UI with React and Tailwind CSS


APIs Used

https://restcountries.com/


Deployment

Project is configured for deployment on Vercel via vercel.json.


Contributor - IT22352026 - Hansara K D K U

---

##  **Brief Report (API + challenges)**

```markdown
## Brief Report for AF-Country-APP

###  Chosen API

I used the **REST Countries API (v3)** to retrieve country-related data including name, population, region, subregion, languages, currencies, and flags.

API endpoint:

GET /all – to get a list of all countries.
GET /name/{name} – to search a country by its name.
GET /region/{region} – to get countries from a specific region.
GET /alpha/{code} – to get full details using a country code.

---

I integrated this API into the React frontend via `fetch` and `axios` calls inside React components.

---

### Challenges & Solutions

| Challenge                                   | Solution                                                         |
|---------------------------------------------|------------------------------------------------------------------|
| Handling nested JSON data                   | Used JavaScript optional chaining and map/filter functions        |
| CORS issues when calling API in development | Configured Vite proxy & enabled CORS middleware in backend        |
| JWT token expiration handling               | Implemented token refresh logic + logout on token invalidation    |
| Syncing favorites with MongoDB              | Created protected API routes under `/api/user/favorite.js`        |
| Deployment environment variables            | Used `.env` for local, and Vercel dashboard for production vars   |

---

###  Reflections

Working with third-party APIs introduced challenges around inconsistent data fields (some countries missing optional properties). I resolved these by implementing defensive coding practices (checking for null/undefined).

Authentication security was ensured with **bcrypt** password hashing and **JWT tokens**. We also faced deployment configuration issues on **Vercel**, especially with environment variables for MongoDB connection, which were resolved by setting these manually in the Vercel dashboard.

---

## Conclusion

The project successfully integrates a REST API with authentication, state management, and a modern frontend build tool (Vite). The solution provides a responsive, user-friendly interface while maintaining backend security best practices.

