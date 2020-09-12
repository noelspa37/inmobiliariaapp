import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { config } from './config'

class Firebase {
    constructor() {
        app.initializeApp(config)
        this.db = app.firestore()
        this.auth = app.auth()
    }
}

export default Firebase