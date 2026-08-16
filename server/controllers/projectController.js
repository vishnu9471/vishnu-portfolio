const Project = require("../models/project");

async function getProjects(req, res) {
  try {
    const filter = {};

    if (req.query.category && req.query.category !== "All") {
      filter.category = req.query.category;
    }

    if (req.query.featured === "true") {
      filter.featured = true;
    }

    const projects = await Project.find(filter).sort({
      featured: -1,
      createdAt: -1,
    });

    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch projects.",
    });
  }
}

async function getProjectBySlug(req, res) {
  try {
    const project = await Project.findOne({
      slug: req.params.slug,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found.",
      });
    }

    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch project.",
    });
  }
}

module.exports = {
  getProjects,
  getProjectBySlug,
};

module.exports = { getProjects, getProjectBySlug };
