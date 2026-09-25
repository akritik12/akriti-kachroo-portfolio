/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: builds the site as plain HTML/CSS/JS with no server,
  // which is what GitHub Pages needs.
  output: "export",

  // GitHub Pages serves this project at https://<username>.github.io/portfolio/
  // not at the domain root, so every internal link/asset needs this prefix.
  // If you name your GitHub repo something other than "portfolio", change
  // both of these to match: "/your-repo-name".
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",

  images: {
    // Next's built-in image optimization needs a server; static export
    // doesn't have one, so this serves images as-is instead.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "**" }
    ]
  }
};

export default nextConfig;
