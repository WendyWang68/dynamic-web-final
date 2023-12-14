import { useState } from "react";
import styles from "./components.module.css";

const CreatePostForm = ({ createPostFunction }) => {
    const [imageUpload, setImageUpload] = useState(null);
    const [postDate, setPostDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        createPostFunction(e, imageUpload, postDate); 
    };

    const handleDateChange = (e) => {
        setPostDate(e.target.value); 
    };

    return (
        <div className={styles.FormContainer}>
            <h2 className={styles.Title}>Create Your Christmas Wishlist</h2>
            <form className={styles.Form} onSubmit={handleSubmit}>
                <label htmlFor="postContent" className={styles.Label}>
                    Write Your Christmas Wishes
                </label>
                <input type="text" id="postContent" name="postContent" className={styles.Input} />

                <label htmlFor="image" className={styles.Label}>
                    Choose an Image
                </label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    className={styles.FileInput}
                    accept="image/png,image/jpeg"
                    onChange={(e) => {
                        setImageUpload(e.target.files[0]);
                    }}
                />

                <label htmlFor="postDate" className={styles.Label}>
                    Date
                </label>
                <input
                    type="date"
                    id="postDate"
                    name="postDate"
                    className={styles.Input}
                    value={postDate}
                    onChange={handleDateChange}
                />

                <button type="submit" className={styles.SubmitButton}>
                    Create Post
                </button>
            </form>
        </div>
    );
};

export default CreatePostForm;

