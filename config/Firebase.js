import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAXvC55IkNhiH6bmvh92OyH9f2Sxftik3k",
  authDomain: "barberapp-287503.firebaseapp.com",
  databaseURL: "https://barberapp-287503.firebaseio.com",
  projectId: "barberapp-287503",
  storageBucket: '',
  messagingSenderId: "245663814160",
  appId: "1:245663814160:web:eff2979c80ff3994707095"
}

const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase
