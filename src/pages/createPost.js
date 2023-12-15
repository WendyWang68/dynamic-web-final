import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import CreatePostForm from "@/app/components/CreatePostForm";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { ref, getDownloadURL, getStorage, uploadBytes } from "firebase/storage";

export default function CreatePost({ isLoggedIn, userInformation }) {
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) router.push("/");
    }, [isLoggedIn]);

    const createPostFunction = useCallback(
        async (e, imageUpload, postDate) => {
            e.preventDefault();
            const storage = getStorage();
            const db = getFirestore();
            const postContent = e.currentTarget.postContent.value;

            try {
                const storageRef = ref(storage, imageUpload.name);
                const snapshot = await uploadBytes(storageRef, imageUpload);
                const imageURL = await getDownloadURL(snapshot.ref);
                const userId = userInformation.uid;

                const postData = {
                    postContent: postContent,
                    userId: userId,
                    imageURL: imageURL,
                    postDate: postDate || 'No Date', 
                };

                await addDoc(collection(db, "posts"), postData);

                router.push("/");
            } catch (error) {
                console.error("Error creating post:", error);
            }
        },
        [userInformation, router]
    );

    return (
        <main>
            <CreatePostForm createPostFunction={createPostFunction} />
        </main>
    );
}


