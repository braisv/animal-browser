const esbuild = require('esbuild-server');
const cssPlugin = require('./esbuild.css.plugin');
const { sassPlugin } = require('esbuild-sass-plugin');
const svgPlugin = require('esbuild-svg');
const svgrConfig = { exportType: 'named' };

const server = esbuild.createServer(
  {
    bundle: true,
    entryPoints: ['src/index.tsx', 'src/styles/index.scss'],
    minify: true,
    sourcemap: true,
    outdir: 'public',
    plugins: [cssPlugin, sassPlugin(), svgPlugin(svgrConfig)],
    loader: {
      '.svg': 'file',
      '.png': 'dataurl',
    },
    external: [],
  },
  {
    static: 'public',
    open: true,
  },
);

const buildStart = Date.now();
server
  .start()
  .then(() => {
    console.log(`Build completed in ${Date.now() - buildStart}ms`);
  })
  .catch(() => {
    console.error('Build failed');
  });
console.log(`Development server running at ${server.url}`);
