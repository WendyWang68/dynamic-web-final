import styles from "./components.module.css";

const PostCard = ({ post }) => {
    return (
        <div className={styles.PostCard}>
            <img className={styles.PostImage} src={post.imageURL} alt="" />
            <p className={styles.PostContent}>{post.postContent}</p>
            <p className={styles.PostDate}>Date: {post.postDate}</p>
        </div>
    );
};

export default PostCard;
