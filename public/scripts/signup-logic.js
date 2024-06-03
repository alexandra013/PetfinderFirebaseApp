// Initialize Firebase
const firebaseConfig = {
    // Your Firebase project configuration
    apiKey: "AIzaSyA2R_sslVzbXHqwbGeYkIPwarqyDmLatR4",
  authDomain: "petfinder-a877d.firebaseapp.com",
  projectId: "petfinder-a877d",
  storageBucket: "petfinder-a877d.appspot.com",
  messagingSenderId: "15112357500",
  appId: "1:15112357500:web:cd97d3c5cf2e838761abf9",
  measurementId: "G-JLL390PYTE"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Get elements
  const signupForm = document.getElementById('signup-form');
  
  // Handle sign-up
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
  
    // Sign up with email and password
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up successfully
        console.log('User signed up:', userCredential.user);
        // You can redirect to another page or perform other actions here
      })
      .catch((error) => {
        // Handle errors
        console.error('Sign up error:', error.message);
        // Display error message to the user if needed
      });
  });
  