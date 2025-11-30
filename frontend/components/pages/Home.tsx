"use client";

import { motion, Variants } from "framer-motion";
import styles from "@/styles/pages/home.module.css";
import { FeatureCard } from "@/components/FeatureCard";
import { BrainIcon, TargetIcon, BookIcon } from "@/components/Icons";

type Page = "home" | "upload" | "dashboard";

interface HomeProps {
  onNavigate: (page: Page) => void;
}

// ✅ Type-safe motion variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function Home({ onNavigate }: HomeProps) {
  return (
    <motion.div
      className={styles.home}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.section className={styles.heroSection} variants={itemVariants}>
        <div className={styles.heroContent}>
          <motion.div className={styles.badge} variants={itemVariants}>
            <span>✨ Powered by Advanced AI</span>
          </motion.div>

          <h1 className={styles.title}>
            Your AI Career Coach{" "}
            <span className={styles.gradient}>Unlock Your Future</span>
          </h1>

          <p className={styles.subtitle}>
            Upload your resume and get AI-powered insights, intelligent job
            matches, and personalized learning paths tailored to your career
            goals.
          </p>

          <div className={styles.buttonGroup}>
            <motion.button
              className={styles.primaryButton}
              onClick={() => onNavigate("upload")}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 234, 255, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Upload Resume →
            </motion.button>

            <motion.button
              className={styles.secondaryButton}
              onClick={() => onNavigate("dashboard")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Dashboard
            </motion.button>
          </div>

          <motion.div className={styles.stats} variants={itemVariants}>
            <div className={styles.stat}>
              <span className={styles.statValue}>1000+</span>
              <span className={styles.statLabel}>Job Matches</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>50+</span>
              <span className={styles.statLabel}>Learning Paths</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>95%</span>
              <span className={styles.statLabel}>Success Rate</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Feature Section */}
      <motion.section className={styles.featuresSection} variants={itemVariants}>
        <h2 className={styles.featuresTitle}>Why Choose Us</h2>
        <div className={styles.featuresGrid}>
          <FeatureCard
            icon={<BrainIcon />}
            title="Smart Resume Parser"
            description="Advanced AI extracts and analyzes your skills, experience, and certifications with precision."
          />
          <FeatureCard
            icon={<TargetIcon />}
            title="Intelligent Job Matching"
            description="Get personalized job recommendations based on your profile and aspirations."
          />
          <FeatureCard
            icon={<BookIcon />}
            title="Personalized Learning"
            description="AI-generated plans to bridge skill gaps and accelerate your growth."
          />
        </div>
      </motion.section>
    </motion.div>
  );
}
