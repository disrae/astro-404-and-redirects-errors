import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_QAczN850.mjs';
import { manifest } from './manifest_sBq2GOVb.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/en-ca.astro.mjs');
const _page3 = () => import('./pages/en-us.astro.mjs');
const _page4 = () => import('./pages/fr-ca.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/en-ca/index.astro", _page2],
    ["src/pages/en-us/index.astro", _page3],
    ["src/pages/fr-ca/index.astro", _page4],
    ["src/pages/index.astro", _page5]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "6d376f7b-dc5e-4681-9a0a-9226531251b1",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
