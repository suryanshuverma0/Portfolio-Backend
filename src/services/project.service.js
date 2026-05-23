import Project from "../models/project.model.js";

export const createProject = async (projectData) => {
  const project = await Project.create(projectData);

  return project;
};

export const getAllProjects = async () => {
  return await Project.find().sort({ createdAt: -1 });
};

export const getProjectBySlug = async (slug) => {
  return await Project.findOne({ slug });
};

export const updateProject = async (id, updateData) => {
  return await Project.findByIdAndUpdate(id, updateData, {
    new: true,
  });
};

export const deleteProject = async (id) => {
  return await Project.findByIdAndDelete(id);
};