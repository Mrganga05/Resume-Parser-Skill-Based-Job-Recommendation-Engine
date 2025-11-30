"use client"

import { useState } from "react"
import { Home } from "@/components/pages/Home"
import { Upload } from "@/components/pages/Upload"
import { Dashboard } from "@/components/pages/Dashboard"
import styles from "@/styles/app.module.css"

type Page = "home" | "upload" | "dashboard"

interface UserData {
  email: string
  skills: string[]
  recommendations?: any
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home")
  const [userData, setUserData] = useState<UserData>({
    email: "",
    skills: [],
  })
  const [loading, setLoading] = useState(false)

  const navigateTo = (page: Page) => setCurrentPage(page)

  const handleUploadComplete = (email: string, skills: string[], recommendations?: any) => {
    setUserData({
      email,
      skills,
      recommendations,
    })
    navigateTo("dashboard")
  }

  const handleLogout = () => {
    setUserData({
      email: "",
      skills: [],
    })
    navigateTo("home")
  }

  return (
    <div className={styles.container}>
      <div className={styles.backgroundGradient} />

      {currentPage === "home" && <Home onNavigate={navigateTo} />}
      {currentPage === "upload" && (
        <Upload
          onNavigate={navigateTo}
          onUploadComplete={handleUploadComplete}
          loading={loading}
          setLoading={setLoading}
        />
      )}
      {currentPage === "dashboard" && (
        <Dashboard
          email={userData.email}
          skills={userData.skills}
          recommendations={userData.recommendations}
          onNavigate={navigateTo}
          onLogout={handleLogout}
        />
      )}
    </div>
  )
}
