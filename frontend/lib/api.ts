import axios from "axios";

export const API_BASE = "http://127.0.0.1:8000";

const client = axios.create({
  baseURL: API_BASE,
  timeout: 60000, // ⏱️ 60 seconds instead of 30s
});

export const api = {
  async parseResume(email: string, file: File) {
    const formData = new FormData();
    formData.append("file", file);
    const res = await client.post(`/resume/parse?email=${email}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  },

  async getRecommendations(email: string, top_k = 5) {
    try {
      const res = await client.get(`/recommend/${email}?top_k=${top_k}`);
      return res.data;
    } catch (err: any) {
      console.error("[API] Recommendation Error:", err);
      throw new Error("Failed to fetch AI recommendations.");
    }
  },
};
