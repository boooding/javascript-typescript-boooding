console.log(process)
/*
  argv: [
    '/Users/boodingtang/.nvm/versions/node/v16.14.2/bin/node',
    '/Users/boodingtang/Desktop/javascript-typescript-boooding/pure-node/node_parms.js',
    ...
  ],
 */

process.argv.forEach((item) => {
    console.log(item)
})

// console
// https://nodejs.org/dist/latest-v16.x/docs/api/console.html
