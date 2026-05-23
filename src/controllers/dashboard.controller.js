import Project from "../models/project.model.js";

import Analytics from "../models/analytics.model.js";

import PortfolioContent from "../models/portfolioContent.model.js";

export const getDashboardStats =
  async (req, res) => {

    try {

      const totalProjects =
        await Project.countDocuments();

      const featuredProjects =
        await Project.countDocuments({

          featured: true,
        });

      const analyticsCount =
        await Analytics.countDocuments();

      const uniqueVisitors =
        await Analytics.distinct(
          "ip"
        );

      const content =
        await PortfolioContent.findOne();

      const totalSkills =
        content?.skills?.length || 0;

      const totalServices =
        content?.services?.length || 0;

      const totalEducation =
        content?.education?.length || 0;

      const totalExperience =
        content?.experiences?.length || 0;

      res.status(200).json({

        success: true,

        stats: {

          totalProjects,

          featuredProjects,

          totalSkills,

          totalServices,

          totalEducation,

          totalExperience,

          totalVisits:
            analyticsCount,

          uniqueVisitors:
            uniqueVisitors.length,

          resumeUploaded:
            !!content?.hero
              ?.resumeUrl,

          heroImageUploaded:
            !!content?.hero
              ?.heroImage,
        },
      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
  };