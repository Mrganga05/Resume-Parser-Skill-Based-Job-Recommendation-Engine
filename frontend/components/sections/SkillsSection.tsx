"use client"

import { motion } from "framer-motion"
import styles from "@/styles/components/sections/skills.module.css"

interface SkillsSectionProps {
  skills: string[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <motion.div
      className={styles.section}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <h2 className={styles.title}>Extracted Skills</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className={styles.skillBadge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.08 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
