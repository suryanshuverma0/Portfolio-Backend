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

     

      titles: [
        {
          type: String,
        },
      ],

      metrics: [
        {
          label: String,

          value: String,
        },
      ],

      availability: {
        type: String,

        default: "Open to opportunities",
      },
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

        logo: String,

        category: String,

        level: Number,

        years: String,

        featured: {
          type: Boolean,

          default: false,
        },
      },
    ],

    services: [
      {
        title: String,

        shortDescription: String,

        description: String,

        image: String,

        category: String,

        technologies: [String],

        featured: {
          type: Boolean,

          default: false,
        },

        accentColor: {
          type: String,

          default: "blue",
        },
      },
    ],

    experiences: [
      {
        role: String,

        company: String,

        description: String,

        startDate: String,

        endDate: String,

        employmentType: String,

        location: String,

        logo: String,

        company_url: String,

        certificate_url: String,

        technologies: [String],

        featured: {
          type: Boolean,

          default: false,
        },
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
