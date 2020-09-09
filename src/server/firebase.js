import app from 'firebase/app'

const config = {
    apiKey: "AIzaSyCm92jzVvC_xRpAAPzUBZFU0LQrC6kpapU",
    authDomain: "gestionpropiedades-7b5e5.firebaseapp.com",
    databaseURL: "https://gestionpropiedades-7b5e5.firebaseio.com",
    projectId: "gestionpropiedades-7b5e5",
    storageBucket: "gestionpropiedades-7b5e5.appspot.com",
    messagingSenderId: "223352663356",
    appId: "1:223352663356:web:844d8df0392e4bfe534239",
    measurementId: "G-HJK0DGVJZL"
}

class Firebase {
    constructor() {
        app.initializeApp(config)
        this.db = app.firestore()
    }
}

export default Firebase