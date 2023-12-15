import styles from './components.module.css'

const LoginForm = ({ loginUser }) => {

    return (
        <div className={styles.whole}>
            <h1>Login Form</h1>
            <form className={styles.Form} onSubmit={(e) => loginUser(e)}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Enter your Email"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Enter your password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;