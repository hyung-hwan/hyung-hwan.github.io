export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets", "src/robots.txt": "robots.txt" });

  const byOrder = (items) =>
    [...items].sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));

  const byStatus = (collectionApi, status) =>
    byOrder(
      collectionApi
        .getFilteredByTag("projects")
        .filter((project) => project.data.status === status)
    );

  eleventyConfig.addCollection("activeProjects", (collectionApi) =>
    byStatus(collectionApi, "active")
  );

  eleventyConfig.addCollection("pastProjects", (collectionApi) =>
    byStatus(collectionApi, "past")
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
}
