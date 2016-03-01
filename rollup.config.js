import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  moduleName: 'relayout',
  entry: './src/index.js',
  dest: './lib/index.js',
  plugins: [
    babel(),
    commonjs(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    nodeResolve({ extensions: ['.js', '.json', '.jsx'] }),
  ],
  format: 'umd',
};
