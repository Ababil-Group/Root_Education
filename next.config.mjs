/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // No need for remotePatterns when using local public folder
    unoptimized: true, // Optionally disable image optimization during dev
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "127.0.0.1", // ✅ Only hostname
//         port: "8000", // ✅ Optional if not standard
//         pathname: "/media/**",
//       },
//       {
//         protocol: "http",
//         hostname: "192.168.11.110",
//         pathname: "/media/**",
//       },
//     ],
//   },

//   async rewrites() {
//     return [
//       {
//         source: "/api/:path*",
//         destination: "http://127.0.0.1:8000/api/:path*", // ✅ Works with local Django
//       },
//     ];
//   },
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         // hostname: "api.rooteducation.group",
//         hostname: "http://127.0.0.1:8000",
//         pathname: "/media/**",
//       },
//       {
//         protocol: "http",
//         hostname: "192.168.11.110",
//         pathname: "/media/**",
//       },
//     ],
//   },

//   async rewrites() {
//     return [
//       {
//         source: "/api/:path*",
//         // destination: `https://api.rooteducation.group/api/:path*`, // Your backend URL
//         destination: `http://127.0.0.1:8000/api/:path*`, // Your backend URL
//       },
//     ];
//   },
// };

// export default nextConfig;
