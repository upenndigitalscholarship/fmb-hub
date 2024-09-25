const { EleventyI18nPlugin } = require("@11ty/eleventy");
const { execSync } = require('child_process')

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("admin");

    // Copy the CNAME file that lets the custom domain talk to GH Pages
    eleventyConfig.addPassthroughCopy("CNAME");

	eleventyConfig.addPlugin(EleventyI18nPlugin, {
		// any valid BCP 47-compatible language tag is supported
		defaultLanguage: "es", // Required, this site uses "en"
	});
    eleventyConfig.on('eleventy.after', () => {
        execSync(`npx pagefind --site _site --glob \"**/*.html\"`, { encoding: 'utf-8' })
    });
};