import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getDocs, getFirestore, collection } from "firebase/firestore";
import PostCard from "../app/components/PostCard";
import styles from "../app/components/components.module.css";

export default function Dashboard({ isLoggedIn }) {
    const router = useRouter();
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        if (!isLoggedIn) router.push("/login");
    }, [isLoggedIn]);

    useEffect(() => {
        async function getAllPosts() {
            const postsArray = [];
            const db = getFirestore();
            const postsQuery = await getDocs(collection(db, "posts"));

            postsQuery.forEach((post) => {
                postsArray.push({ id: post.id, ...post.data()});
            
            });
            setAllPosts(postsArray);
        }

        getAllPosts();
    }, []);

    return (
        <main className={styles.body}>
            <h1 className={styles.heading}>Wishes</h1>
            <p className={styles.paragraph}>
                Congratulations! You finally made it through the end of the year. A new year is coming soon! Best of luck to you. All your wishes will come true!
            </p>
            {allPosts.map((post) => (
                <PostCard post={post} key={post.id}/>
            ))}
        </main>
    );
}

