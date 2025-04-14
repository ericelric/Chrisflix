
<div align="center" dir="auto">
   <a href="https://chrisflix-react.vercel.app" rel="nofollow"><img width="250" alt="logo" src="https://github.com/user-attachments/assets/f2260462-9b10-41b1-a8d8-ae008dd332e7"></a><br>
</div>

<h1 align="center">Chrisflix - A Netflix-inspired Trailer Streaming App</h1>

Chrisflix is a **Netflix-inspired** trailer streaming application built with **React**. It leverages the **TMDB API** to display the latest, upcoming and trending movies and TV shows. Users can explore content through interactive sliders, search for their favorite titles in real-time and watch trailers on a dedicated player page.

🚀 **Live Demo**: [Chrisflix on Vercel](https://chrisflix-react.vercel.app/)

<img width="1898" alt="Screenshot 2025-03-06 at 17 00 13" src="https://github.com/user-attachments/assets/9fdc709e-1d95-4851-913c-2b6d9acfaee8" />

## Features

- **Fetch Movies & TV Shows** using the TMDB API
- **Responsive UI** for a seamless experience on all devices
- **Swiper.js Sliders** for smooth content browsing
- **Real-time Search** with debounce to reduce API calls
- **Trailer Player Page** for each movie/TV show
- **React Router** for easy navigation
- **User Authentication** with Firebase
- **Deployed on Vercel** for fast and simple hosting

## Tech Stack

- **Frontend**: React (v19), React Router, Swiper.js, CSS
- **API**: [TMDB API](https://www.themoviedb.org/)
- **Video Provider**: YouTube (for trailers)
- **Authentication**: Firebase Auth
- **Hosting**: Vercel

## Installation & Setup

1. **Clone the repository**

    ```sh
    git clone https://github.com/ericelric/chrisflix.git
    cd chrisflix
    ```

2. **Install dependencies**

    ```sh
    npm install
    ```

3. **Create a .env file and add your TMDB API key**

    ```sh
    VITE_TMDB_API_KEY=your_api_key_here
    VITE_FIREBASE_API_KEY=your_firebase_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    ```

4. **Start the development server**

    ```sh
    npm start
    ```

## 📌 Future Enhancements

- [ ] React Query
- [ ] Genre selector
- [ ] Favorites

## Screenshots

<img width="1898" alt="Screenshot 2025-03-06 at 17 00 23" src="https://github.com/user-attachments/assets/30d4ace4-a484-407c-801f-f171645de178" />
<img width="1898" alt="mobile" src="https://github.com/user-attachments/assets/2f4e8e86-51cf-43ee-b8de-5f80c1e60adc" />

---
Chrisflix - A Netflix-inspired Trailer Streaming App<br>
Licensed under the MIT License. See LICENSE file for details.
