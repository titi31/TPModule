const { FuseBox, WebIndexPlugin } = require("fuse-box");
const fuse = FuseBox.init({
  homeDir: "src",
  output: "dist/app.js",
  cache: true,
  plugins: [WebIndexPlugin({
  template:'dist/index.html',
  //target: 'index.html'
  }
  )],
});
fuse.dev(); // launch http server
fuse
  .bundle("app")
  .completed(proc => proc.start)
  .instructions(" > index.ts")
  .hmr()
  .watch();
fuse.run();
