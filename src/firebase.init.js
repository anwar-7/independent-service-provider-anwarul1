// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAn5xUjrx92Z-vjGGNlo1e4DiiPymSo0CQ',
  authDomain: 'assignment-10-7ce25.firebaseapp.com',
  projectId: 'assignment-10-7ce25',
  storageBucket: 'assignment-10-7ce25.appspot.com',
  messagingSenderId: '170633936256',
  appId: '1:170633936256:web:11de65d011ee7d31c95565',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
