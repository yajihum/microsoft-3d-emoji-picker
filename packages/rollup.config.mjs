import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json' assert { type: 'json' };

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: false,
      },
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
      }),
      commonjs({
        include: ['node_modules/**'],
      }),
      postcss({
        extensions: ['.css'],
      }),
    ],
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      '@tanstack/react-query',
    ],
  },
  {
    input: 'src/index.ts', // ソースファイルを直接指定
    output: [{ file: 'dist/index.d.ts', format: 'es' }], // 目的のパスに出力
    plugins: [dts()],
  },
  {
    input: 'dist/cjs/types/index.d.ts',
    output: [{ file: 'dist/cjs/index.d.ts', format: 'cjs' }],
    plugins: [dts()],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/esm/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
