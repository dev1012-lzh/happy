import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBRGgerCt3O17myLSvTIc91buE-kq9296k",
    authDomain: "okay-3754e.firebaseapp.com",
    projectId: "okay-3754e",
    storageBucket: "okay-3754e.firebasestorage.app",
    messagingSenderId: "882375202470",
    appId: "1:882375202470:web:5077212946a8319a670667",
    measurementId: "G-X99V2V6PN1"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const messagesRef = ref(database, "messages");

console.log("Firebase initialized!", app);

onChildAdded(messagesRef, (snapshot) => {
    const msg = snapshot.val().text;
    document.getElementById("chat").innerHTML += `<p>${msg}</p>`;
});

function sendMessage() {
    const message = document.getElementById("messageInput").value;
    push(messagesRef, { text: message });
}
