import firebase from "firebase";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBfpOjj-qiDj0bBchciobeVJ_YQrD7SvLM",
    authDomain: "react-example-10ad3.firebaseapp.com",
    projectId: "react-example-10ad3",
    storageBucket: "react-example-10ad3.appspot.com",
    messagingSenderId: "609191692591",
    appId: "1:609191692591:web:ba1c17b3c94c44593079da"
};


const app = firebase.initializeApp(firebaseConfig)

export default app;