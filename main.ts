import { serve } from "https://deno.land/std@0.160.0/http/mod.ts";

const page = await Deno.readTextFile(`${Deno.cwd()}/index.html`);

async function handleRequest(request: Request): Promise<Response> {
  const { pathname } = new URL(request.url);

  // This is how the server works:
  // 1. A request comes in for a specific asset.
  // 2. We read the asset from the file system.
  // 3. We send the asset back to the client.

  // Check if the request is for style.css.
  if (pathname.startsWith("/glasses.svg")) {
    // Read the style.css file from the file system.
    const file = await Deno.readFile("./glasses.svg");
    // Respond to the request with the glasses.svg file.
    return new Response(file, {
      headers: {
        "content-type": "image/svg+xml",
      },
    });
  }

  return new Response(
    new TextEncoder().encode(page),
  );
}

serve(handleRequest);
