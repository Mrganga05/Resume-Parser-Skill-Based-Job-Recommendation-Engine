"use client";

import { motion } from "framer-motion";
import styles from "@/styles/pages/dashboard.module.css";
import { Sidebar } from "@/components/Sidebar";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { JobRecommendations } from "@/components/sections/JobRecommendations";
import { LearningPlan } from "@/components/sections/LearningPlan";
import { LogoutIcon } from "@/components/Icons";

type Page = "home" | "upload" | "dashboard";

interface DashboardProps {
  email: string;
  skills: string[];
  recommendations?: any;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

export function Dashboard({ email, skills, recommendations, onNavigate, onLogout }: DashboardProps) {
  return (
    <div className={styles.dashboard}>
      <Sidebar onNavigate={onNavigate} currentPage="dashboard" />

      <motion.div
        className={styles.mainContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <header className={styles.header}>
          <div className={styles.userInfo}>
            <div className={styles.avatar}>{email.charAt(0).toUpperCase()}</div>
            <div className={styles.userDetails}>
              <p className={styles.userLabel}>Logged in as</p>
              <span className={styles.userEmail}>{email}</span>
            </div>
          </div>
          <button className={styles.logoutButton} onClick={() => { onLogout(); onNavigate("home"); }}>
            <LogoutIcon />
          </button>
        </header>

        <div className={styles.contentGrid}>
          <SkillsSection skills={skills} />
          <JobRecommendations recommendations={recommendations} />
          <LearningPlan recommendations={recommendations} />
        </div>
      </motion.div>
    </div>
  );
}
