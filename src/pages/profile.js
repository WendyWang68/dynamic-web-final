import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { 
    query,
    collection,
    getFirestore,
    where,
    getDocs,
} from "firebase/firestore";
import UserProfileCard from "@/app/components/UserProfileCard";

export default function UserProfile({ isLoggedIn, userInformation }) {
    const router = useRouter();
    const [user, setUser] = useState({});

    useEffect(() => {
        if (!isLoggedIn) router.push("/login");
    }, [isLoggedIn]);

    useEffect(() => {
        async function getUser() {
            let user = {};
            const db = getFirestore();
            const q = query(
                collection(db, "users"),
                where("userId", "==", userInformation?.uid)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                user = doc.data();
            });
            setUser(user);
        }

        if (userInformation){
            getUser();
        }
    }, [userInformation]);

    return(
        <main>
                <UserProfileCard user={user} userInformation={userInformation} />
        </main>
    );
}

