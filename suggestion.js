import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDL8OMTtITV4xAYurAYZS7Hx3gQp3OLjzY",
    authDomain: "simplivert.firebaseapp.com",
    projectId: "simplivert",
    storageBucket: "simplivert.firebasestorage.app",
    messagingSenderId: "1002927561174",
    appId: "1:1002927561174:web:3afaf169504c956634ac77",
    measurementId: "G-KFSD3P164P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Reference to the feedback collection in Firestore
const feedbackCollection = collection(db, "feedback");

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('suggestionForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        const suggestionText = document.getElementById('suggestionText').value;
        const responseMessage = document.getElementById('responseMessage');

        try {
            await addDoc(feedbackCollection, {
                suggestion: suggestionText,
                timestamp: new Date(),
            });
            responseMessage.style.display = 'block';
            responseMessage.style.color = 'green';
            responseMessage.textContent = 'Thank you for your suggestion!';
            document.getElementById('suggestionText').value = '';
            alert('Thank you! Your feedback has been submitted successfully.');
        } catch (error) {
            console.error('Error submitting suggestion:', error);
            responseMessage.style.display = 'block';
            responseMessage.style.color = 'red';
            responseMessage.textContent = 'An error occurred. Please try again later.';
        }
    });
});
