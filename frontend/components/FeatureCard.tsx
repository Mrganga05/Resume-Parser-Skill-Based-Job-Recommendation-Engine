"use client"

import type React from "react"

import { motion } from "framer-motion"
import styles from "@/styles/components/feature-card.module.css"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className={styles.card}
      whileHover={{
        y: -8,
        boxShadow: "0 0 30px rgba(0, 207, 255, 0.3)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </motion.div>
  )
}
