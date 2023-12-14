import styles from './components.module.css';

const UserProfileCard = ({ user }) => {
    return(
        <main className={styles.UserProfileBody}>
        <div className={styles.UserProfile}>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
        </div>
        </main>
    )
}

export default UserProfileCard;

