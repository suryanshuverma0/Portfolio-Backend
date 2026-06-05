import PortfolioContent from "../models/portfolioContent.model.js";

/* GET PORTFOLIO CONTENT */

export const getPortfolioContent = async (req, res) => {
  try {
    let content = await PortfolioContent.findOne();

    /* CREATE DEFAULT DOC */

    if (!content) {
      content = await PortfolioContent.create({
        hero: {

  name: "Suryanshu Verma",

  subtitle:
    "Computer Engineer • MERN Developer • Backend Focused Builder",

  description:
    "Focused on building scalable backend systems, production-oriented MERN applications, and practical blockchain solutions with strong emphasis on engineering fundamentals and real-world problem solving.",

  heroImage: "",

  titles: [

    "MERN Stack Developer",

    "Backend Engineer",

    "Blockchain Developer",
  ],

  metrics: [

    {
      label: "Projects Built",
      value: "10+",
    },

    {
      label: "Tech Stack",
      value: "MERN + Web3",
    },

    {
      label: "Experience",
      value: "Frontend Internship",
    },
  ],

  availability:
    "Open to remote opportunities",
},

        about: {
          description:
            "Computer Engineering Student passionate about full stack and blockchain development.",
        },

        education: [
          {
            title: "Khwopa Secondary School",

            description:
              "Graduated with strong academic performance in Computer Science.",

            status: "Higher Secondary",
          },

          {
            title: "Advanced College of Engineering and Management",

            description: "Currently pursuing Computer Engineering.",

            status: "Bachelor's Degree",
          },
        ],

        skills: [
          {
            title: "ReactJS",

            logo: "",

            category: "Frontend",

            level: 90,

            years: "2+ Years",

            featured: true,
          },

          {
            title: "Node.js",

            logo: "",

            category: "Backend",

            level: 88,

            years: "2+ Years",

            featured: true,
          },

          {
            title: "MongoDB",

            logo: "",

            category: "Database",

            level: 85,

            years: "2+ Years",

            featured: false,
          },

          {
            title: "Solidity",

            logo: "",

            category: "Blockchain",

            level: 75,

            years: "1+ Years",

            featured: true,
          },
        ],

        services: [
          {
            title: "MERN Stack Development",

            shortDescription: "Scalable full stack applications",

            description:
              "Building production-oriented MERN stack applications with scalable backend architecture, authentication systems, dashboards, analytics, and cloud integrations.",

            image: "",

            category: "Full Stack Development",

            technologies: ["React", "Node.js", "Express", "MongoDB"],

            featured: true,

            accentColor: "blue",
          },
        ],

        experiences: [
          {
            role: "ReactJS Frontend Developer Intern",

            company: "CyberArrow",

            description:
              "Worked on frontend performance optimization, reusable ReactJS components, and production-level UI improvements while collaborating with senior developers.",

            startDate: "Jan 2025",

            endDate: "Jun 2025",

            employmentType: "Internship",

            location: "Dubai, United Arab Emirates",

            logo: "",

            company_url: "",

            certificate_url: "",

            technologies: ["ReactJS", "JavaScript", "Frontend Optimization"],

            featured: true,
          },
        ],

        socialLinks: {
          linkedin: "",

          github: "",

          twitter: "",

          instagram: "",

          facebook: "",

          email: "",
        },

        navbarSections: [
          {
            label: "Home",
            sectionId: "home",
          },

          {
            label: "About",
            sectionId: "about",
          },

          {
            label: "Experience",
            sectionId: "experience",
          },

          {
            label: "Skills",
            sectionId: "skills",
          },

          {
            label: "Services",
            sectionId: "services",
          },

          {
            label: "Projects",
            sectionId: "projects",
          },

          {
            label: "Contact",
            sectionId: "contact",
          },
        ],
      });
    }

    res.status(200).json({
      success: true,

      content,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,

      message: "Failed to fetch portfolio content",
    });
  }
};

/* UPDATE PORTFOLIO CONTENT */

export const updatePortfolioContent = async (req, res) => {
  try {
    const updatedContent = await PortfolioContent.findOneAndUpdate(
      {},

      req.body,

      {
        new: true,

        upsert: true,
      },
    );

    res.status(200).json({
      success: true,

      message: "Portfolio content updated successfully",

      content: updatedContent,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,

      message: "Failed to update portfolio content",
    });
  }
};
