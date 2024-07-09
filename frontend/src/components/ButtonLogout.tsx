"use client";

import { useAuthContext } from "../context/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { firebase_app } from "../services/firebase/firebaseConfiguration";
import {useRouter} from "next/navigation";

const auth = getAuth(firebase_app);


export default function ButtonLogout() {
    const router = useRouter();
    return <button onClick = {() => (signOut(auth), router.push("/signIn" ))}>Sign Out / Sign In</button>;
}