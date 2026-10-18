import styles from "./Signup.module.css";
import logo from "../assets/logo.svg";

export default function Signup() {
    return (
        <div className={styles.signupContainer}>
            {/* ---------- Left panel (Consistent with Login) ---------- */}
            <section className={styles.left}>
                <h1 className={styles.tagline}>
                    Need webdesign
                    <br />
                    for your business?
                    <br />
                    <strong>Design Spacee</strong>
                    <br />
                    will help you.
                </h1>

                <img className={styles.logo} src={logo} alt="Design Spacee logo" />

                <p className={styles.link}>figma.com/@designspacee</p>
            </section>

            {/* ---------- Right panel (Sign Up Form) ---------- */}
            <section className={styles.right}>
                <div className={styles.form}>
                    <h2>Create Account</h2>

                    <div className={styles.socialButtons}>
                        <button className={styles.socialBtn}>Sign up with Google</button>
                        <button className={styles.socialBtn}>Sign up with Facebook</button>
                    </div>

                    <div className={styles.divider}>
                        <span>— OR —</span>
                    </div>

                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />

                    <button className={styles.submitBtn}>Create Account</button>

                    <p className={styles.loginFooter}>
                        Already have an account? <a href="#">Login</a>
                    </p>
                </div>
            </section>
        </div>
    );
}