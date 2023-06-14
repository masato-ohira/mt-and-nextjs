const withInterceptStdout = require('next-intercept-stdout')
const isDev = process.env.NODE_ENV == 'development'

module.exports = withInterceptStdout(
  {
    output: 'export',
    // distDir: `./dist/${config.base}`,
    distDir: isDev ? undefined : `./dist`,
    reactStrictMode: false,
    swcMinify: true,
    trailingSlash: true,

    images: {
      unoptimized: true,
      // domains: ['placehold.jp'],
    },
  },
  (text) => (text.includes('Duplicate atom key') ? '' : text),
)
