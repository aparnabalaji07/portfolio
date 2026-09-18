export const projects = [
  {
    slug: "market-trading-simulator",
    title: "Market Trading Simulator",
    kind: "data",
    status: "in progress",
    dateRange: "Sept 2026 – present",
    description:
      "A backtesting engine I am building from scratch to test trading strategies against historical data, with a guard against look-ahead bias.",
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
