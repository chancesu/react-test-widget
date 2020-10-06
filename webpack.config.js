module.exports = {
    // entry: {
    //     app: { import: ['./app.js'], dependOn: 'react-vendors' },
    //     'react-vendors': ['react', 'react-dom', 'prop-types']
    // },
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        hotUpdateChunkFilename: 'hot-update.js',
        chunkFilename: 'chunk.js'
    }
  };
  