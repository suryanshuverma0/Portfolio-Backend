import PortfolioContent from "../models/portfolioContent.model.js";

/* GET PORTFOLIO CONTENT */

export const getPortfolioContent =
  async (
    req,
    res
  ) => {

    try {

      let content =
        await PortfolioContent.findOne();

      /* CREATE DEFAULT DOC */

      if (!content) {

        content =
          await PortfolioContent.create({

            hero: {

              name:
                "Suryanshu Verma",

              titles: [

                "Software Developer",

                "MERN Stack Developer",

                "Blockchain Developer",
              ],

              resumeUrl: "",
            },

            about: {

              description:
                "Computer Engineering Student passionate about full stack and blockchain development.",
            },

            education: [

              {

                title:
                  "Khwopa Secondary School",

                description:
                  "Graduated with strong academic performance in Computer Science.",

                status:
                  "Higher Secondary",
              },

              {

                title:
                  "Advanced College of Engineering and Management",

                description:
                  "Currently pursuing Computer Engineering.",

                status:
                  "Bachelor's Degree",
              },
            ],

            skills: [

              {
                title: "React",
                icon: "react",
              },

              {
                title: "Node.js",
                icon: "node",
              },

              {
                title: "MongoDB",
                icon: "mongodb",
              },

              {
                title: "Solidity",
                icon: "solidity",
              },
            ],

            services: [

              {

                title:
                  "MERN Stack Development",

                description:
                  "Building scalable full stack web applications.",
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

        message:
          "Failed to fetch portfolio content",
      });
    }
  };

  /* UPDATE PORTFOLIO CONTENT */

export const updatePortfolioContent =
  async (
    req,
    res
  ) => {

    try {

      const updatedContent =
        await PortfolioContent.findOneAndUpdate(

          {},

          req.body,

          {

            new: true,

            upsert: true,
          }
        );

      res.status(200).json({

        success: true,

        message:
          "Portfolio content updated successfully",

        content:
          updatedContent,
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({

        success: false,

        message:
          "Failed to update portfolio content",
      });
    }
  };