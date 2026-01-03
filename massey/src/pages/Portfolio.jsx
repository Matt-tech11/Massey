import React from "react";
import styles from "./Portfolio.module.css";

const projects = [
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

export default function Portfolio() {
  return (
    <div className={styles.portfolioContainer}>

      <h1 className={styles.heading}>Case Studies</h1>
      <p className={styles.subtext}>
        My purpose is to help you thrive with a scalable Webflow site that represents your product. Read a selection of stories about forward-thinking clients, their new websites, and impressive results
      </p>


      <div className={styles.grid}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${styles.card} ${
              project.blurred ? styles.blurred : ""
            }`}
          >
            <img src={project.img} alt={project.title} />
            <div className={styles.title}>{project.title}</div>
          </div>
        ))} 
      </div>
    </div>
  );
}

