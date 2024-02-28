/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Alexander Girardet",
  title: "Hey there, I'm Alex",
  subTitle: emoji(
    "Data Engineer and ML enthusiast with a knack for building scalable data solutions and advancing ML applications. My expertise spans creating real-time distributed systems using Kafka, to pioneering industrial-scale web scraping, and crafting end-to-end ML systems with a focus on MLOps efficiency. With a strong startup background, I'm committed to leveraging technology to solve complex challenges and drive innovation."
  ),
  resumeLink:
    "https://grand-leo-707.notion.site/Readwise-81de502fce7b4ad3b0824917301bb3f5", // Set to empty to hide the button
  displayGreeting: true,
  knowledgeBaseLink: "https://publish.obsidian.md/alexgirardet/Welcome+to+my+Second+Brain",
  libraryLink: "https://grand-leo-707.notion.site/Readwise-81de502fce7b4ad3b0824917301bb3f5",
  consultingLink: "https://dcypher-ai.co.uk/"
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/alexandergirardet",
  linkedin: "https://www.linkedin.com/in/alexandergirardet/",
  gmail: "alexgirardet@gmail.com",
  medium: "https://medium.com/@alexgirardet",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Professionally Certified Data Engineer and ML practitioner with a strong foundation in business and finance.",
  skills: [
    emoji(
      "📊 Develop end to end ML systems, from data collection to model deployment"
    ),
    emoji("⚡ Real time data processing and distributed systems with Kafka"),
    emoji(
      "⚙️ DevOps and MLOps best practices, CI/CD, Docker, Kubernetes, Terraform"
    ),
    emoji(
      "🤖 Machine Learning, and Deep Learning with Scikit-learn, Keras, Tensorflow, and PyTorch"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },

    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "kafka",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "nosql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Edinburgh",
      logo: require("./assets/images/uni_of_edinburgh.png"),
      subHeader: "Master of Arts in Business and Finance",
      duration: "September 2018 - May 2022",
      desc: "Co-Founded a startup Digital and Design Agency. Helped create product strategy for Edinburgh based social nightlife app called Jigr. Part of the 4 person founding team.",
      descBullets: [
        "Edinburgh Award for Entrepreneurship and Innovation",
        "Investment Society",
      ]
    },
    {
      schoolName: "Le Wagon Data Science Bootcamp",
      logo: require("./assets/images/le_wagon.png"),
      subHeader: "Bootcamp in Data Science",
      duration: "September 2020 - December 2020",
      desc: "9 Week intensive bootcamp in Data Science and Machine Learning on top of my full time studies.",
      descBullets: ["Scikit-learn Pandas Numpy", "Keras Tensorflow", "SQL and NoSQL databases"]
    },
    {
      schoolName: "International School of Geneva",
      logo: require("./assets/images/international_school_geneva.jpeg"),
      subHeader: "International Baccalaureate",
      duration: "September 2014 - May 2018",
      desc: "81st percentile in the world for the IB diploma."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer",
      company: "LiveScore",
      companylogo: require("./assets/images/livescore_logo.png"),
      date: "June 2023 – Present",
      desc: "Leading the development of our real time data platform. Utilizing Kafka, Spark and Google Cloud Platform to build a scalable and reliable data infrastructure. Bringing GenAI to livescore through the development of our internal RAG system.",
      descBullets: [
        "Real time data processing with Kafka",
        "Production System Monitoring and Alerting",
        "GenAI with Langchain and Vector Databases"

      ]
    },
    {
      role: "Data Engineer Apprentice",
      company: "Richemont",
      companylogo: require("./assets/images/richemont_logo.jpeg"),
      date: "November 2022 – June 2023",
      desc: "Data Engineer in the data platform team. Data Modelling and ETL development with Python and SQL. Working on the FinOps team to optimize cloud costs.",
    },
    {
      role: "Quantitative Investment Analyst",
      company: "Nexus Equities",
      companylogo: require("./assets/images/nexus_equities.jpeg"),
      date: "July 2022 - November 2022",
      desc: "Private Equity Start-up, working on the development of a ML image recognition model to identify potential investment opportunities across Industrial Outdoor Storage sites.",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Cloud Professional Data Engineer",
      subtitle:
        "Certified Professional Data Engineer from Google Cloud",
      image: require("./assets/images/data_engineer.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
      ]
    },
    {
      title: "Google Cloud Cloud Associate",
      subtitle:
        "Certified Professional Data Engineer from Google Cloud",
      image: require("./assets/images/associate_engineer.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
      ]
    },
    {
      title: "Marathon Runner",
      subtitle:
        "Ran the Geneva Marathon in 2023",
      image: require("./assets/images/marathon_logo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I am developing a habit of writing blogs on Medium.com. I write about topics that I feel passionate about. I also love to share my knowledge and experience with the community.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "alexgirardet@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "alexgirardet", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
