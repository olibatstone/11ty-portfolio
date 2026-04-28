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

  // Block Markdown filter for case study body content
  eleventyConfig.addLiquidFilter("markdownify", (str) => (str ? md.render(String(str)) : ""));

  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/fonts/");
  eleventyConfig.addPassthroughCopy("src/documents/");
  eleventyConfig.addPassthroughCopy({"src/assets/img": "assets/img"});
  eleventyConfig.addPassthroughCopy({"src/assets/video": "assets/video"});
  eleventyConfig.addPassthroughCopy("src/selected-work/**/{img,video}");

  eleventyConfig.addCollection("work", (api) =>
    api.getFilteredByTag("work").sort((a, b) => (a.data.order||0) - (b.data.order||0))
  );

  eleventyConfig.addCollection("blog", (api) =>
    api.getFilteredByTag("blog").sort((a, b) => b.date - a.date)
  );

  return {
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    dir: { input: "src", output: "_site", includes: "_includes" }
  };
};