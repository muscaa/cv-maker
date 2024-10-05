/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: process.env.NODE_ENV === "production" ? "/cv-maker" : "",
    assetPrefix: process.env.NODE_ENV === "production" ? "https://muscaa.github.io/cv-maker/" : "",
    images: {
        unoptimized: true,
    },
    webpack(config) {
        config.resolve.fallback = {
            ...config.resolve.fallback,

            fs: false,
            os: false,
            path: false,
        };

        return config;
    },
};

export default nextConfig;
