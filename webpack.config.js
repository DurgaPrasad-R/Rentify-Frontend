module.exports = {
    // Your existing webpack configuration
    module: {
      rules: [
        // Other rules
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
          exclude: [
            // Exclude problematic source maps
            /@mediapipe\/tasks-vision/
          ],
        },
      ],
    },
  };
  