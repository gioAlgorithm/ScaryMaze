module.exports = {
  
  module: {
    rules: [
      // ... other rules
      {
        test: /\.(mp3)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/audio/screaming.mp3', 
          },
        },
      },
    ],
  },
  
};