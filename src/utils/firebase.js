import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBgGO4_X9vLim7Bv_-qxVLTHQFew1vfhAA",
	authDomain: "eventtizz.firebaseapp.com",
	projectId: "eventtizz",
	storageBucket: "eventtizz.appspot.com",
	messagingSenderId: "144901565155",
	appId: "1:144901565155:web:3a018a98940c385e36b3d6",
};

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { provider, auth, storage };
export default db;
