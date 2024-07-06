import { firebase_app } from "../firebaseConfiguration";
import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signUp(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }
  await signOut(auth);

  return { result, error };
}