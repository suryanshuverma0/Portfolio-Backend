import asyncHandler from "express-async-handler";

import slugify from "slugify";

import Project from "../models/project.model.js";

import {
  createProject,
  deleteProject,
  getAllProjects,
  getProjectBySlug,
  updateProject,
} from "../services/project.service.js";

export const createProjectController =
  asyncHandler(async (req, res) => {

    const {
      title,
      description,
      technologies,
      githubUrl,
      liveUrl,
      featured,
      deployed,
      projectCategory,
      overview,
      challenges,
      learnings,
      features,
    } = req.body;

    if (
      !req.files ||
      !req.files.image
    ) {

      res.status(400);

      throw new Error(
        "Project image is required"
      );
    }

    const project =
      await createProject({

        title,

        slug: slugify(title),

        description,

        technologies: technologies
          ? JSON.parse(technologies)
          : [],

        imageUrl:
          req.files.image[0].path,

        galleryImages:
          req.files.galleryImages
            ? req.files.galleryImages.map(
                (file) => file.path
              )
            : [],

        githubUrl,

        liveUrl,

        featured:
          featured === "true",

        deployed:
          deployed === "true",

        projectCategory,

        overview,

        challenges,

        learnings,

        features: features
          ? JSON.parse(features)
          : [],
      });

    res.status(201).json({

      success: true,

      message:
        "Project created successfully",

      data: project,
    });
});

export const getProjectsController =
  asyncHandler(async (req, res) => {

    const projects =
      await getAllProjects();

    res.status(200).json({

      success: true,

      data: projects,
    });
});

export const getSingleProjectController =
  asyncHandler(async (req, res) => {

    const project =
      await getProjectBySlug(
        req.params.slug
      );

    if (!project) {

      res.status(404);

      throw new Error(
        "Project not found"
      );
    }

    res.status(200).json({

      success: true,

      data: project,
    });
});

export const getProjectByIdController =
  asyncHandler(async (req, res) => {

    const project =
      await Project.findById(
        req.params.id
      );

    if (!project) {

      res.status(404);

      throw new Error(
        "Project not found"
      );
    }

    res.status(200).json({

      success: true,

      data: project,
    });
});

export const updateProjectController =
  asyncHandler(async (req, res) => {

    const {
      title,
      description,
      technologies,
      githubUrl,
      liveUrl,
      featured,
      deployed,
      projectCategory,
      overview,
      challenges,
      learnings,
      features,
    } = req.body;

    const existingProject =
      await Project.findById(
        req.params.id
      );

    if (!existingProject) {

      res.status(404);

      throw new Error(
        "Project not found"
      );
    }

    const updatedData = {

      title,

      slug: slugify(title),

      description,

      technologies: technologies
        ? JSON.parse(technologies)
        : existingProject.technologies,

      githubUrl,

      liveUrl,

      featured:
        featured === "true",

      deployed:
        deployed === "true",

      projectCategory,

      overview,

      challenges,

      learnings,

      features: features
        ? JSON.parse(features)
        : existingProject.features,
    };

    if (
      req.files &&
      req.files.image
    ) {

      updatedData.imageUrl =
        req.files.image[0].path;
    }

    if (
      req.files &&
      req.files.galleryImages
    ) {

      updatedData.galleryImages =
        req.files.galleryImages.map(
          (file) => file.path
        );
    }

    const updatedProject =
      await updateProject(
        req.params.id,
        updatedData
      );

    res.status(200).json({

      success: true,

      message:
        "Project updated successfully",

      data: updatedProject,
    });
});

export const deleteProjectController =
  asyncHandler(async (req, res) => {

    await deleteProject(
      req.params.id
    );

    res.status(200).json({

      success: true,

      message:
        "Project deleted successfully",
    });
});