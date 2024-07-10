import { build, context } from 'esbuild';
import svelte from 'esbuild-svelte';
import { sveltePreprocess } from 'svelte-preprocess';
import rm from './env/rm.js';
import log from './env/log.js';
import copy from './env/copy.js';
import meta from './env/meta.js';
import proxy from './env/proxy.js';

const DEV = process.argv.includes('--dev');
const SPA = process.argv.includes('--spa');
const DIST = process.argv.includes('--dist');

const svelteOptions = {
    compilerOptions: {
        dev: DEV,
        css: 'external',
        immutable: true
    },
    preprocess: [
        sveltePreprocess({
            sourceMap: DEV,
            typescript: true,
        }),
    ]
};

const buildOptions = {
    bundle: true,
    minify: !DEV,
    sourcemap: DEV,
    entryPoints: ['src/app.ts'],
    outdir: 'public/build',
    format: 'esm',
    loader: { '.svg': 'text' },
    plugins: [svelte(svelteOptions), log],
    inject: DEV ? ['./env/lr.js'] : [],
    legalComments: "none",
    logLevel: 'info',
    metafile: !DEV,
    mainFields: ['svelte', 'module', 'main'],
};

await rm(['public/build']);

if (DEV) {
    const ctx = await context(buildOptions);

    await ctx.watch();
    await ctx.serve({ servedir: 'public' });

    SPA && proxy().listen(8080);

    process.on('SIGTERM', ctx.dispose);
    process.on("exit", ctx.dispose);
} else if (DIST) {
    await rm(['dist']);
    await build({
        entryPoints: ['src/lib/aops/index.js'],
        outdir: './dist',
        format: 'esm',
        minify: true,
        bundle: true,
        plugins: [copy([['src/lib/aops/assets', 'dist']])]
    });
} else {
    await meta(await build(buildOptions));
}