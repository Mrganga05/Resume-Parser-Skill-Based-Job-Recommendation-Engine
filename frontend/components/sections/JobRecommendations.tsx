"use client"

import { motion } from "framer-motion"
import styles from "@/styles/components/sections/jobs.module.css"

interface JobRecommendationsProps {
  recommendations?: any
}

export function JobRecommendations({ recommendations }: JobRecommendationsProps) {
  const jobs = recommendations?.jobs || [
    {
      title: "Senior React Developer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      match: 92,
      missing: ["Vue.js"],
    },
    {
      title: "Full Stack Engineer",
      company: "StartUp Inc",
      location: "Remote",
      match: 85,
      missing: ["Kubernetes"],
    },
    {
      title: "ML Engineer",
      company: "AI Labs",
      location: "New York, NY",
      match: 78,
      missing: ["TensorFlow", "Spark"],
    },
  ]

  return (
    <motion.div
      className={styles.section}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className={styles.title}>Job Recommendations</h2>
      <div className={styles.jobsGrid}>
        {jobs.map((job: any, index: number) => (
          <motion.div
            key={index}
            className={styles.jobCard}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className={styles.jobHeader}>
              <div>
                <h3 className={styles.jobTitle}>{job.title}</h3>
                <p className={styles.jobCompany}>{job.company}</p>
              </div>
              <div className={styles.matchBadge}>
                <span className={styles.matchText}>{job.match}%</span>
              </div>
            </div>

            <div className={styles.matchBar}>
              <motion.div
                className={styles.matchProgress}
                initial={{ width: 0 }}
                animate={{ width: `${job.match}%` }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
              />
            </div>

            <p className={styles.jobLocation}>📍 {job.location}</p>

            {job.missing && job.missing.length > 0 && (
              <div className={styles.missingSkills}>
                <p className={styles.missingLabel}>Skills to learn:</p>
                <div className={styles.skillTags}>
                  {job.missing.map((skill: string, i: number) => (
                    <span key={i} className={styles.missingSkill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
