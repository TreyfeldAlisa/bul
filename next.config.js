/**
 * @type {import('next').NextConfig}
 * */

const withVideos = require("next-videos");
const withImages = require("next-images");

const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["three, react-three-fiber", "drei"],
    images: {
        disableStaticImages: true,
    },
};

module.exports = withImages(withVideos(nextConfig));
