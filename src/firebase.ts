import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyDHZOmC4LUQgqo99pxYk_OxLQWKqM8pqxY",
  authDomain: "my-page-990f5.firebaseapp.com",
  projectId: "my-page-990f5",
  storageBucket: "my-page-990f5.appspot.com",
  messagingSenderId: "654917999573",
  appId: "1:654917999573:web:a1a08e88e76c9a5c5b6c4a",
  measurementId: "G-HNQFC4HKQZ"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app); 
