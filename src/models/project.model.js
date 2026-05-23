import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },

    technologies: [
      {
        type: String,
      },
    ],

    imageUrl: {
      type: String,
      required: true,
    },

    galleryImages: [
      {
        type: String,
      },
    ],

    githubUrl: {
      type: String,
    },

    liveUrl: {
      type: String,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    deployed: {
      type: Boolean,
      default: false,
    },

    projectCategory: {
      type: String,

      enum: [
        "major",
        "minor",
        "normal",
      ],

      default: "normal",
    },

    overview: {
      type: String,
    },

    challenges: {
      type: String,
    },

    learnings: {
      type: String,
    },

    features: [
      {
        type: String,
      },
    ],
  },

  {
    timestamps: true,
  }
);

const Project = mongoose.model(
  "Project",
  projectSchema
);

export default Project;