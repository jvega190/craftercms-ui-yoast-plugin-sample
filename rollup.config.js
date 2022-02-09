import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replaceImportsWithVars from 'rollup-plugin-replace-imports-with-vars';
import json from '@rollup/plugin-json';
import pkg from './package.json';
import copy from 'rollup-plugin-copy';
import treeshaking from 'rollup-plugin-ts-treeshaking';
import replace from '@rollup/plugin-replace';
import babel from 'rollup-plugin-babel';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const globals = {
  react: 'craftercms.libs.React',
  '@emotion/css': 'craftercms.libs.EmotionCSS',
  '@emotion/css/create-instance': 'craftercms.libs.createEmotion',
  'react-dom': 'craftercms.libs.ReactDOM',
  'react-intl': 'craftercms.libs.ReactIntl',
  '@mui/material': 'craftercms.libs.MaterialUI',
  '@craftercms/studio-ui': 'craftercms.libs.StudioUI',
  '@mui/material/utils': 'craftercms.libs.MaterialUI'
};

export default {
  input: pkg.source,
  output: [
    {
      file: pkg.module,
      format: 'es',
      globals
    }
  ],
  external: Object.keys(globals),
  plugins: [
    json(),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.NODE_DEBUG': false,
      'process.env.READABLE_STREAM': false,
      'new emitter': 'new emitter.EventEmitter'
    }),
    typescript(),
    treeshaking(),
    replaceImportsWithVars({ varType: 'var', replacementLookup: globals }),
    resolve({ extensions, preferBuiltins: false }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react']
    }),
    commonjs({
      exclude: 'src/**',
    }),
    copy({
      targets: [
        {
          src: './src/{script,index}.{js,css}',
          dest: './dist'
        }
        // {
        //   src: './dist/{script,index.modern,index}.{js,css}',
        //   dest: '{pathToYourCrafterSite}/sandbox/config/studio/plugins/apps/library'
        // }
      ]
    })
  ]
};
