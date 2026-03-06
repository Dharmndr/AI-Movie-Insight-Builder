# AI Movie Insight Builder 🎬🤖

A full-stack web application that allows users to enter an **IMDb Movie ID** and retrieve movie information along with **AI-powered audience sentiment insights**.

The app fetches movie details, analyzes audience reviews, and displays an overall sentiment classification in a clean, responsive UI.

---

# 🚀 Live Demo


```
https://movie-insight-ai.vercel.app
```

---

# 📌 Features

### 🎥 Movie Information

* Fetch movie data using IMDb Movie ID
* Displays:

  * Movie poster
  * Title
  * Release year
  * IMDb rating
  * Cast list
  * Plot summary

### 🧠 AI Sentiment Analysis

* Retrieves audience reviews
* Performs sentiment analysis using a natural language processing library
* Generates:

  * AI summary of audience sentiment
  * Overall sentiment classification:

    * 🟢 Positive
    * 🟡 Mixed
    * 🔴 Negative

### 📊 Sentiment Visualization

* Sentiment meter with progress bar
* Color-coded sentiment indicators

### ⚡ User Experience

* Loading animation while fetching data
* Error handling for invalid IDs
* Responsive design (mobile + desktop)
* Smooth UI animations

---

# 🏗 Tech Stack

## Frontend

* **Next.js (React)**
* **Tailwind CSS**
* **Framer Motion**

## Backend

* **Next.js API Routes**
* **Node.js**

## APIs

* **OMDb API** – Fetch movie details
* **TMDB API** – Fetch audience reviews

## AI / NLP

* **Sentiment.js** – Sentiment analysis of reviews

---

# 📂 Project Structure

```
movie-insight-ai
│
├── app
│   ├── api
│   │   └── movie
│   │       └── route.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── components
│   ├── SearchBar.jsx
│   ├── MovieCard.jsx
│   └── Loader.jsx
│
├── public
│
├── .env.local
├── package.json
└── README.md
```

---

# ⚙️ Setup Instructions

## 1️⃣ Clone the repository

```
git clone https://github.com/Dharmndr/AI-Movie-Insight-Builder.git
```

```
cd movie-insight-ai
```

---

## 2️⃣ Install dependencies

```
npm install
```

---

## 3️⃣ Create environment variables

Create a `.env.local` file in the root folder.

```
OMDB_API_KEY=your_omdb_api_key
TMDB_API_KEY=your_tmdb_api_key
```

You can obtain API keys from:

* https://www.omdbapi.com/apikey.aspx
* https://www.themoviedb.org/settings/api

---

## 4️⃣ Run the development server

```
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 🧪 Example Usage

Enter an IMDb Movie ID:

```
tt0133093
```

The app will display:

* Movie information
* AI-generated audience sentiment summary
* Overall sentiment classification

---

# 📱 Responsive Design

The UI is optimized for:

* Desktop
* Tablet
* Mobile devices

Using **Tailwind responsive utilities**.

---

# 🧠 Tech Stack Rationale

### Next.js

Chosen for its full-stack capabilities, allowing both frontend UI and backend API routes in a single project.

### Tailwind CSS

Provides rapid UI development and responsive design utilities.

### Sentiment.js

A lightweight NLP library used to analyze review sentiment without requiring paid AI APIs.

### OMDb + TMDB APIs

Used to retrieve reliable movie metadata and audience reviews.

---




# 👨‍💻 Author

Dharmendra Kumar
