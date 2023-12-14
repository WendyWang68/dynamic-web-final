import styles from './components.module.css'

const LoginForm = ({ loginUser }) => {
    return (
        <div className={styles.whole}>
            <h2>Login Form</h2>
            <form className={styles.Form} onSubmit={(e) => loginUser(e)}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" />

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;