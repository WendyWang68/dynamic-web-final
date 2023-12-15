import styles from './components.module.css';

const UserProfileCard = ({ user, userInformation }) => {
    return(
        <main className={styles.UserProfileBody}>
        <div className={styles.UserProfile}>
            <p>Name: {user?.name}</p>
            <p>Email: {userInformation?.email}</p>
            <p>Hello! This is your Christmas User Profile! Welcome to the online Christmas world! </p>
        </div>
        </main>
    )
}

export default UserProfileCard;