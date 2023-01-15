import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCFAliI5MsQ6dA-1qqCp7CxYmcyREdABRU",
  authDomain: "auth-test-fc60a.firebaseapp.com",
  projectId: "auth-test-fc60a",
  storageBucket: "auth-test-fc60a.appspot.com",
  messagingSenderId: "508055717273",
  appId: "1:508055717273:web:fb0f57854ae72f093fbf08",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app; 