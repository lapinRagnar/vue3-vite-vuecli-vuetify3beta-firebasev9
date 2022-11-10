import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
salut: ''
}

console.log('les mots de passes',firebaseConfig)
// console.log('apikey', import.meta.env.VITE_API_KEY)


const app = initializeApp(firebaseConfig)

const db = getFirestore(app);

export { db }