/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true, transpilePackages: ['three'],
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized:true,
  }
 }
