"use client"

import { motion } from "framer-motion"
import styles from "@/styles/components/sidebar.module.css"
import { HomeIcon, UploadIcon, DashboardIcon } from "@/components/Icons"

type Page = "home" | "upload" | "dashboard"

interface SidebarProps {
  onNavigate: (page: Page) => void
  currentPage: Page
}

export function Sidebar({ onNavigate, currentPage }: SidebarProps) {
  const navItems = [
    { id: "home", label: "Home", icon: <HomeIcon />, page: "home" as Page },
    { id: "upload", label: "Upload", icon: <UploadIcon />, page: "upload" as Page },
    { id: "dashboard", label: "Dashboard", icon: <DashboardIcon />, page: "dashboard" as Page },
  ]

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>AI Coach</div>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            className={`${styles.navItem} ${currentPage === item.page ? styles.active : ""}`}
            onClick={() => onNavigate(item.page)}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.icon}
            <span>{item.label}</span>
          </motion.button>
        ))}
      </nav>
    </aside>
  )
}
