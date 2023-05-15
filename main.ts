import {
  file,
  files,
  serve,
} from "https://raw.githubusercontent.com/brendantang/routing-framework/e8ac48593b3bf60a19c68146b6847584ef12a4b4/mod.ts";

const index = file(`${Deno.cwd()}/public/index.html`);
serve({
  "/": index,
  "/:filepath+": files(
    `${Deno.cwd()}/public`,
  ),
});
