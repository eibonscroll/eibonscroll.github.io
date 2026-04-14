const fs = require("fs");
const path = require("path");
const rssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(rssPlugin);

  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("resume.json");
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });

  eleventyConfig.addGlobalData("site", {
    url: "https://www.mikepurvis.tech",
    title: "Michael G. Purvis",
    description:
      "Software engineering, AI-assisted development, Unreal Engine, and related technology.",
  });

  eleventyConfig.addGlobalData("resume", () => {
    const raw = fs.readFileSync(path.join(__dirname, "resume.json"), "utf8");
    return JSON.parse(raw);
  });

  eleventyConfig.addCollection("posts", (collectionApi) =>
    collectionApi.getFilteredByTag("posts").sort((a, b) => b.date - a.date),
  );

  eleventyConfig.addFilter("isoDate", (value) => {
    const d = value instanceof Date ? value : new Date(value);
    return Number.isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
  });

  eleventyConfig.addFilter("readableDate", (value) => {
    const d = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(d.getTime())) return "";
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    }).format(d);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
