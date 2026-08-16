const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true },
    longDescription: { type: String, default: "" },
    category: { type: String, required: true, trim: true },
    technologies: { type: [String], default: [] },
    features: { type: [String], default: [] },
    image: { type: String, default: "" },
    liveUrl: { type: String, default: "#" },
    githubUrl: { type: String, default: "#" },
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);