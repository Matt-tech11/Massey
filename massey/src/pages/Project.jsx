import { useState } from "react";
import styles from "./Project.module.css";

export default function Project() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form logic here (e.g., API call)
    setSubmitted(true);
  };

  return (
    <section className={styles.contact}>
      {/* Left content */}
      <div className={styles.left}>
        <span className={styles.tag}>[ CONTACT ]</span>
        <h1 className={styles.title}>
          Request a project to <br />
          start the conversation
        </h1>
        <p className={styles.subtitle}>
          You will hear from me within 2 business days. I’m looking forward
          to meeting you and answering any questions.
        </p>
      </div>

      {/* Right side: Conditional Rendering */}
      <div className={styles.right}>
        {!submitted ? (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label>Full name</label>
              <input type="text" required />
            </div>

            <div className={styles.field}>
              <label>Email</label>
              <input type="email" required />
            </div>

            <div className={styles.field}>
              <label>Company</label>
              <input type="text" />
            </div>

            <div className={styles.budget}>
              <p>What is your budget for this project?</p>
              <div className={styles.budgetOptions}>
                <label>
                  <input type="radio" name="budget" /> $10k - 20k
                </label>
                <label>
                  <input type="radio" name="budget" /> $20k - 50k
                </label>
                <label>
                  <input type="radio" name="budget" /> $50k - 100k
                </label>
              </div>
            </div>

            <div className={styles.field}>
              <label>Message</label>
              <textarea placeholder="Is there anything you can share about the project?" />
            </div>

            <p className={styles.privacy}>
              Your data will only be used to contact you. For more information,
              please see the <a href="#">privacy policy</a>.
            </p>

            <button type="submit" className={styles.submit}>Submit</button>
          </form>
        ) : (
          /* SUCCESS STATE: Matches Screenshot (241).png */
          <div className={styles.successWrapper}>
            <h2 className={styles.successTitle}>Thank you for your submission!</h2>
          </div>
        )}
      </div>
    </section>
  );
}