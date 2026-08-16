import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  timeout: 10000,
});

export async function fetchProjects(params = {}) {
  const { data } = await api.get("/projects", {
    params,
  });

  return data;
}

export async function fetchProject(slug) {
  const { data } = await api.get(`/projects/${slug}`);
  return data;
}

export async function sendContactMessage(payload) {
  const { data } = await api.post("/contact", payload);
  return data;
}

export default api;