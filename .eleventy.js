// .eleventy.js (CJS)
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require("eleventy-plugin-toc");

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
  eleventyConfig.addPassthroughCopy("styles/");
  eleventyConfig.addPassthroughCopy("images/");
  eleventyConfig.addPassthroughCopy("videos/");

  eleventyConfig.addCollection("work", (api) =>
    api.getFilteredByTag("work").sort((a, b) => (a.data.order||0) - (b.data.order||0))
  );

  return {
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    dir: { input: ".", output: "_site", includes: "_includes" }
  };
};