// .eleventy.js (CJS)
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require("eleventy-plugin-toc");
const fs = require("fs");
const path = require("path");

module.exports = function(eleventyConfig) {
  const md = markdownIt({ html: true, linkify: true })
    .use(markdownItAnchor, {
      slugify: s => s.trim().toLowerCase().replace(/[^\w]+/g, "-"),
    });
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPlugin(pluginTOC);

  // Inline Markdown filter for captions
  const mdInline = markdownIt({ html: true, linkify: true, breaks: false });
  eleventyConfig.addLiquidFilter("md", (str) => (str ? mdInline.renderInline(String(str)) : ""));

  // Determine existing image extension at build time (tries png, jpg, jpeg)
  eleventyConfig.addLiquidFilter("imgExt", (basePath) => {
    if (!basePath || typeof basePath !== "string") return "png";
    const exts = ["png", "jpg", "jpeg"];
    const rel = basePath.replace(/^\//, ""); // strip leading slash
    for (const ext of exts) {
      const p = path.join(process.cwd(), "src", `${rel}.${ext}`);
      try {
        if (fs.existsSync(p)) return ext;
      } catch (_) {
        // ignore
      }
    }
    return "png"; // default
  });

  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy("src/styles/");
  eleventyConfig.addPassthroughCopy("src/fonts/");
  eleventyConfig.addPassthroughCopy("src/images/");
  eleventyConfig.addPassthroughCopy("src/videos/");
  eleventyConfig.addPassthroughCopy("src/documents/");

  eleventyConfig.addCollection("work", (api) =>
    api.getFilteredByTag("work").sort((a, b) => (a.data.order||0) - (b.data.order||0))
  );

  return {
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    dir: { input: "src", output: "_site", includes: "_includes" }
  };
};