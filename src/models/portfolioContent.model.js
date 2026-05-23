import mongoose from "mongoose";

const portfolioContentSchema = new mongoose.Schema(
  {
    hero: {
      name: {
        type: String,
        default: "Suryanshu Verma",
      },

      subtitle: {
        type: String,
        default: "Software Engineer & Builder",
      },

      description: {
        type: String,
        default: "",
      },

      heroImage: {
        type: String,
        default: "",
      },

      resumeUrl: {
        type: String,
        default: "",
      },

      titles: [
        {
          type: String,
        },
      ],
    },

    about: {
      description: {
        type: String,
        default: "",
      },
    },

    education: [
      {
        title: String,

        description: String,

        status: String,
      },
    ],

    skills: [
      {
        title: String,

        icon: String,
      },
    ],

 services: [

  {

    title: String,

    description: String,

    icon: String,
  },
],

    experiences: [

  {

    role: String,

    company: String,

    description: String,

    duration: String,

    location: String,

    logo: String,

    company_url: String,

    certificate_url: String,
  },
],

    socialLinks: {
      linkedin: String,

      github: String,

      twitter: String,

      instagram: String,

      facebook: String,

      email: String,
    },

    navbarSections: [
      {
        label: String,

        sectionId: String,
      },
    ],
  },

  {
    timestamps: true,
  },
);

const PortfolioContent = mongoose.model(
  "PortfolioContent",
  portfolioContentSchema,
);

export default PortfolioContent;
