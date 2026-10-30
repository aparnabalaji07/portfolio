import { projects } from "@/data/projects";

const siteUrl = "https://aparnabalaji.vercel.app";

export default function sitemap() {
  const projectPages = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      priority: 1,
    },
    ...projectPages,
  ];
}
