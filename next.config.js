/** @type {import('next').NextConfig} */
const nextConfig = {
	images:{
		domains:["source.unsplash.com"]
	}
}

module.exports = nextConfig

//// next.config.js
//const path = require('path');

//module.exports = {
//  webpack: (config) => {
//    config.resolve.alias['@'] = path.resolve(__dirname, './src');
//    return config;
//  },
//};