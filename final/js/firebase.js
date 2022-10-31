const firebaseConfig = {
    apiKey: "AIzaSyBGgKUZdrqn9Lnw1gzFheRZtI8PESMl3No",
    authDomain: "profile-dashboard-6b2da.firebaseapp.com",
    databaseURL: "https://profile-dashboard-6b2da-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "profile-dashboard-6b2da",
    storageBucket: "profile-dashboard-6b2da.appspot.com",
    messagingSenderId: "316365657856",
    appId: "1:316365657856:web:b42a5ccbe6248b53af05e5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);