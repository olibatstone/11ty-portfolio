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