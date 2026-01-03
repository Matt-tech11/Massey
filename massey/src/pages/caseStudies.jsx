import React from "react";
import styles from "./caseStudies.module.css";

const caseStudies = [
  {
    id: 1,
    title: "High Converting Business Dashboards",
    img: "/images1.jpg",
    blurred: true,
  },
  {
    id: 2,
    title: "Mobile Applications Design & Development",
    img: "/images2.jpg",
    blurred: true,
  },
  {
    id: 3,
    title: "Web design & Development",
    img: "/images6.jpg",
    blurred: true,
  },
  {
    id: 4,
    title: "Web & App Remodelling",
    img: "/images4.jpg",
    blurred: true,
  },
];

export default function CaseStudies() {
  return (
    <div className={styles.portfolioContainer}>
      <h1 className={styles.heading}>Portfolio</h1>
      <p className={styles.subtext}>
        Flip through some of my case studies and learn about real business
        results my sites drove.
      </p>

      <div className={styles.grid}>
        {caseStudies.map((caseStudy) => (
          <div
            key={caseStudy.id}
            className={`${styles.card} ${
              caseStudy.blurred ? styles.blurred : ""
            }`}>
            <img src={caseStudy.img} alt={caseStudy.title} />
            <div className={styles.title}>{caseStudy.title}</div>
          </div>
        ))} 
      </div>
    </div>
  );
}

