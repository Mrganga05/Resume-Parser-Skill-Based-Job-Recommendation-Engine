"use client";

import { motion } from "framer-motion";
import styles from "../../styles/components/sections/learning-plan.module.css";

interface LearningPlanProps {
  recommendations?: {
    learning_plan?: string;
  };
}

export function LearningPlan({ recommendations }: LearningPlanProps) {
  const learningText = recommendations?.learning_plan || "";

  // ✅ Handle empty or failed AI response gracefully
  if (!learningText) {
    return (
      <motion.div
        className={styles.learningPlan}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className={styles.title}>AI Learning Plan</h2>
        <p className={styles.emptyText}>
          Upload your resume and analyze it to get a personalized AI-powered learning roadmap.
        </p>
      </motion.div>
    );
  }

  // ✅ Split learning plan into numbered steps or paragraphs
  const steps = learningText
    .split(/\n[0-9]+\.\s/)
    .filter((s) => s.trim() !== "")
    .map((s) => s.trim());

  return (
    <motion.div
      className={styles.learningPlan}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h2 className={styles.title}>AI Learning Plan</h2>
      <ul className={styles.steps}>
        {steps.map((step, index) => (
          <motion.li
            key={index}
            className={styles.stepItem}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className={styles.stepNumber}>{index + 1}</span>
            <p>{step}</p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
