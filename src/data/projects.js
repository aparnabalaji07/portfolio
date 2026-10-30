export const projects = [
  {
    slug: "planet-or-binary",
    title: "Planet or Binary",
    kind: "data",
    status: "in progress",
    dateRange: "Oct 2026 – present",
    description:
      "An ML classifier I am building to sort TESS transit signals into real exoplanets and eclipsing binaries, with an accuracy study and false positive checks.",
    tech: ["Python"],
    github: "https://github.com/aparnabalaji07/planet-or-binary",
    demo: null,
    thumbnail: null,
    detail: {
      intro:
        "This project uses transit data from TESS, the NASA telescope that searches for planets around other stars. When a planet passes in front of its star, the star gets a little dimmer. An eclipsing binary, where two stars pass in front of each other, can make a dip that looks very similar. I am building a classifier that sorts these transit signals into real exoplanets and eclipsing binaries.",
      mechanics: [
        {
          term: "Classifier",
          detail:
            "A machine learning model that takes a TESS transit signal and labels it as either a real exoplanet or an eclipsing binary.",
        },
        {
          term: "Accuracy study",
          detail:
            "Testing how often the classifier gets the label right, so I know how much to trust its results.",
        },
        {
          term: "False positive checks",
          detail:
            "Checks for signals that the classifier calls a planet when they are not actually a planet.",
        },
        {
          term: "Web app",
          detail: "A Streamlit web app is planned as the final milestone.",
        },
      ],
    },
  },
  {
    slug: "janta-power-solar-tracker",
    title: "Janta Power Solar Tracker",
    kind: "hardware",
    status: "in progress",
    dateRange: "Sept 2026 – present",
    description:
      "An industry-sponsored sun-position sensor for Janta Power solar towers that reads three photodiodes on an ESP32 and publishes sun-angle data to AWS S3.",
    tech: ["ESP32", "C++", "AWS S3"],
    github: null,
    demo: null,
    thumbnail: null,
    detail: {
      intro:
        "Janta Power sponsored this project through Comet Robotics. We are building a sensor for their solar towers that measures the position of the sun and sends that data to the cloud. I designed the circuit schematic and built the bill of materials, which meant picking each of the components for the design.",
      specs: [
        { label: "Board", value: "ESP32" },
        { label: "Sensors", value: "3 photodiodes" },
        { label: "Data storage", value: "AWS S3" },
        { label: "Firmware", value: "C++" },
      ],
      note: "The design reads three photodiodes on the ESP32 and publishes sun-angle data to AWS S3. On the software side, I also write the sun position calculations.",
    },
  },
  {
    slug: "ai-skill-gap-analyzer",
    title: "AI Skill Gap Analyzer",
    kind: "data",
    status: "in progress",
    dateRange: "Sept 2026 – present",
    description:
      "An IEEE UTD project that uses an LLM API to pull skills out of job postings as structured JSON, then processes the results with pandas.",
    tech: ["Python", "LLM API", "pandas"],
    github: "https://github.com/ieee-utd/cis-skill-gap-analyzer",
    demo: null,
    thumbnail: null,
    detail: {
      intro:
        "This is a project I lead through IEEE UTD. The tool reads job postings and pulls out the skills that each one asks for, then turns those results into data we can work with in Python.",
      mechanics: [
        {
          term: "Skill extraction",
          detail:
            "Each job posting is sent to an LLM API, which returns the skills it mentions.",
        },
        {
          term: "Structured JSON",
          detail:
            "The LLM returns its answer as structured JSON instead of free text, so every result has the same shape.",
        },
        {
          term: "pandas processing",
          detail:
            "The JSON results are loaded into pandas and processed together as one dataset.",
        },
      ],
    },
  },
  {
    slug: "market-trading-simulator",
    title: "Market Trading Simulator",
    kind: "data",
    status: "in progress",
    dateRange: "Sept 2026 – present",
    description:
      "A backtesting engine I am building from scratch to test momentum and mean-reversion strategies against historical data. It has buy and sell logic with portfolio tracking and realized versus unrealized P&L. Strategies run through a walk-forward loop with a look-ahead guard.",
    tagline: "walk-forward backtest, no look-ahead",
    tech: ["Python"],
    github: "https://github.com/aparnabalaji07/market-simulator",
    demo: null,
    thumbnail: null,
    detail: {
      intro:
        "This year, I began my personal finance journey. I was immediately bombarded with information about trading strategies, what kinds of portolio to open, the best ETFs to invest in, and more trading content. I wanted to know if the trading strategies people talk about online actually hold up. To do this, I built the infrastructure to test their strategies properly instead of taking anyone's word for it. That meant writing my own portfolio tracker, order logic, and P&L accounting before I could even get to the strategies themselves. This project is currently helping me figure out where to invest my own money for the future.",
      mechanics: [
        {
          term: "Portfolio tracking",
          detail:
            "Buy and sell logic with running position sizes, plus separate realized and unrealized profit/loss calculations at every step.",
        },
        {
          term: "Walk-forward loop",
          detail:
            "Strategies are trained and tested on rolling windows of historical data, moving forward in time rather than testing on the whole dataset at once.",
        },
        {
          term: "Look-ahead guard",
          detail:
            "A check that prevents a strategy from using data that would not have been available yet. This is the most common source of unrealistic backtest results.",
        },
        {
          term: "Strategies tested",
          detail:
            "Momentum and mean-reversion, coded and run against historical price data.",
        },
      ],
      future:
        "Next, I am extending it into an agent-based market simulator with learning agents in PyTorch.",
    },
  },
  {
    slug: "pet-adoption-bio-generator",
    title: "Pet Adoption Bio Generator",
    kind: "web",
    status: "live",
    dateRange: "July 2026",
    description:
      "A small web app that turns a shelter pet's basic info into a written adoption bio, using an LLM API.",
    tech: ["React", "Claude API", "Vercel"],
    github: null,
    demo: "https://adoption-bio-generator.vercel.app/",
    thumbnail: {
      src: "/images/projects/AdoptionBioGenerator.png",
      alt: "The Adoption Bio Generator form",
    },
    detail: {
      intro: `I love animals and got my cat from a shelter. I have volunteered at local shelters in the past, and most shelters write their pets biography for adoption one at a time. I wanted to build a tool that could help speed up this process. Most volunteers make notes of a pets temperments, needs, and behaviors while taking care of them. Having the shelter volunteers or staff fill in these fields, a REST API creates a short adoption bio to put on a flyer or website.`,
      note: `I built both the frontend and backend myself as a self-directed project to get real, end-to-end experience integrating an LLM API into a product rather than just calling it from a script.`,
      steps: [
        {
          label: "Input",
          detail:
            "You enter a pet's basic details: species, breed, age, temperament, anything notable.",
        },
        {
          label: "Generate",
          detail:
            "The backend sends that to the Claude API with a prompt built to produce an adoption-listing style bio.",
        },
        {
          label: "Output",
          detail:
            "A written bio comes back in the React frontend, ready to copy into a listing.",
        },
      ],
      screenshot: {
        src: "/images/projects/AdoptionBioGenerator.png",
        alt: "The Adoption Bio Generator form, with fields for name, species, age, and notes",
      },
      future:
        "I am currently in the process of contacting to shelters to use my tool. After I get a few shelters to use it, I will add an authentication feature as well as a database to store the bios for each pet.",
    },
  },
  {
    slug: "esp32-digital-camera",
    title: "ESP32 Digital Camera",
    kind: "hardware",
    status: "in progress",
    dateRange: "Feb 2026 – present",
    description:
      "A digital camera built around an ESP32 microcontroller, with firmware I wrote to control image capture and storage.",
    tech: ["ESP32", "C++", "Arduino", "OV2640", "MicroSD"],
    github: null,
    demo: null,
    thumbnail: {
      src: "/images/projects/ESP32FirstIteration.JPG",
      alt: "The ESP32-CAM module wired up on a breadboard",
    },
    detail: {
      intro:
        "I began to get interested in photography. Soon, I started to wonder how a camera worked and processed images. I decided the best way to learn about cameras was to build one. This project is entirely hardware and firmware, with no web component. I wanted to understand what it actually takes to make a microcontroller function as a reliable camera, one that captures multiple images in a session and stores each one correctly rather than working only once.",
      specs: [
        { label: "Board", value: "ESP32" },
        { label: "Image sensor", value: "OV2640" },
        { label: "Storage", value: "MicroSD" },
        { label: "Firmware", value: "C++, Arduino framework" },
      ],
      note: "The firmware handles triggering the sensor, capturing multiple photos in a session, and writing each one to the SD card without corrupting earlier files.",
      buildPhotos: [
        {
          src: "/images/projects/AparnaSoldering.JPG",
          alt: "Soldering a component onto a small circuit board",
        },
        {
          src: "/images/projects/ESP32FirstIteration.JPG",
          alt: "The ESP32-CAM module wired up on a breadboard",
        },
      ],
      cameraRoll: [
        {
          src: "/images/projects/FirstPictureTakenOnDC.jpg",
          caption: "first photo, before I even knew it had fired",
        },
        {
          src: "/images/projects/NextPictureTakenAfterAdjustingSettings.jpg",
          caption: "after adjusting the sensor settings",
        },
        {
          src: "/images/projects/PictureWithCurrentCameraSettings.jpg",
          caption: "current settings",
        },
      ],
    },
  },
  {
    slug: "ieee-uottawa-website",
    title: "IEEE uOttawa Student Branch Website",
    kind: "web",
    status: "live",
    dateRange: "Nov 2025 – May 2026",
    description:
      "The branch website for IEEE uOttawa, built with the software team so non-technical officers could update content without touching code.",
    tech: ["React", "Next.js", "Payload CMS", "Tailwind CSS", "Vercel"],
    github: "https://github.com/ieee-webmaster/ieeeuottawa-v3",
    demo: "https://ieeeuottawa.ca/en/",
    thumbnail: {
      src: "/images/projects/IEEEWebsite.png",
      alt: "The IEEE uOttawa Student Branch homepage",
    },
    detail: {
      intro:
        "I worked on this alongside the rest of the IEEE uOttawa software team. My focus was building reusable React components and setting up Payload CMS so that future officers, most of whom will not be developers, can update the site themselves after we hand it off.",
      role: "I contributed components and the CMS integration as part of a team, rather than building the whole site by myself.",
      outcome:
        "The site is live and currently in use by the branch. That was the actual goal, not simply having something deployed.",
      screenshot: {
        src: "/images/projects/IEEEWebsite.png",
        alt: "The IEEE uOttawa Student Branch homepage",
      },
    },
  },
];
