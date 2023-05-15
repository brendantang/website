import {
  file,
  files,
  serve,
} from "https://raw.githubusercontent.com/brendantang/routing-framework/main/mod.ts";

const index = file(`${Deno.cwd()}/public/index.html`);
serve({
  "/": index,
  "/:filename+": files(
    `${Deno.cwd()}/public/`,
    "filename",
  ),
});
