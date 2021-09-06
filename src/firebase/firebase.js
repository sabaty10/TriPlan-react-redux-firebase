import firebase from "firebase/compat/app";
import "firebase/compat/database";

const PUBLIC_FIREBASE_API_KEY = "AIzaSyCs3eyZ_wHYtq4OJj3GY5a0KDVb9vuT88E";
const PUBLIC_FIREBASE_PROJECT_ID = "triplan-1cab8";

const config = {
    apiKey: PUBLIC_FIREBASE_API_KEY,
    authDomain: `${PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${PUBLIC_FIREBASE_PROJECT_ID}-default-rtdb.firebaseio.com`,
    projectId: PUBLIC_FIREBASE_PROJECT_ID,
};

function initFirebase() {
    firebase.initializeApp(config)
}

initFirebase();
export { firebase }