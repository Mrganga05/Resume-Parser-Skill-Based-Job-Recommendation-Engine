"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { api } from "@/lib/api";
import styles from "@/styles/pages/upload.module.css";
import { ArrowLeftIcon } from "@/components/Icons";

type Page = "home" | "upload" | "dashboard";

interface UploadProps {
  onNavigate: (page: Page) => void;
  onUploadComplete: (email: string, skills: string[], recommendations?: any) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export function Upload({ onNavigate, onUploadComplete, loading, setLoading }: UploadProps) {
  const [email, setEmail] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isDragActive, setIsDragActive] = useState(false);
  const [error, setError] = useState<string>("");

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile?.type === "application/pdf") {
      setFile(selectedFile);
      setIsUploaded(true);
      setError("");
    } else {
      setError("Please upload a PDF file");
    }
  };

  const handleAnalyze = async () => {
    if (!email || !file) {
      setError("Please enter an email and select a PDF file.");
      return;
    }

    setLoading(true);
    try {
      const parsed = await api.parseResume(email, file);
      const skills = parsed.skills || [];
      const recommendations = await api.getRecommendations(email, 5);
      onUploadComplete(email, skills, recommendations);
    } catch (err: any) {
      setError(err.message || "Analysis failed.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div className={styles.uploadPage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <button className={styles.backButton} onClick={() => onNavigate("home")}>
        <ArrowLeftIcon /> Back
      </button>

      <div className={styles.uploadContainer}>
        <h1 className={styles.title}>Upload Your Resume</h1>
        <p className={styles.subtitle}>Let AI analyze your skills & generate insights</p>

        <input
          type="email"
          className={styles.emailInput}
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />

        <motion.div
          className={`${styles.uploadZone} ${isDragActive ? styles.active : ""}`}
          onClick={() => document.getElementById("fileInput")?.click()}
          whileHover={{ borderColor: "#00eaff" }}
        >
          <input type="file" id="fileInput" accept=".pdf" style={{ display: "none" }} onChange={handleFileSelect} />
          {!isUploaded ? (
            <>
              <div className={styles.uploadIcon}>📄</div>
              <p className={styles.uploadText}>Drag and drop or click to upload</p>
            </>
          ) : (
            <>
              <div className={styles.successIcon}>✓</div>
              <p className={styles.uploadText}>{file?.name}</p>
            </>
          )}
        </motion.div>

        {error && <p className={styles.errorMessage}>{error}</p>}

        <motion.button
          className={styles.analyzeButton}
          onClick={handleAnalyze}
          disabled={!email || !isUploaded || loading}
          whileHover={!loading ? { scale: 1.05 } : {}}
          whileTap={!loading ? { scale: 0.95 } : {}}
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </motion.button>
      </div>
    </motion.div>
  );
}
