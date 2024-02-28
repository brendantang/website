import {
  file,
  files,
  serve,
  handleMethods,
  json
} from "https://raw.githubusercontent.com/brendantang/routing-framework/e8ac48593b3bf60a19c68146b6847584ef12a4b4/mod.ts";

const index = file(`${Deno.cwd()}/public/index.html`);
const wall = handleMethods(
  new Map()
    .set("GET", file(`${Deno.cwd()}/public/wall.html`))
    .set("POST", async (req: Request) => {
      const data = await req.formData()
      console.log(data)

      const name = data.get("name")
      const message = data.get("message")
      const time = Date()
      const id = crypto.randomUUID()

      const entry = {name, message, time}

      const db = await Deno.openKv()

      const result = await db.set(["wall_messages", id], entry)
      console.log(result)

      return Response.redirect(req.url)
    })
  )(
    () => {
      return new Response("unsupported method", {status: 405}) 
    }
)

const messages = async () => {
      const db = await Deno.openKv() 
      const result = await db.list({prefix: ["wall_messages"]})
      const entries = []
      for await (const entry of result) {
        console.log(entry) 
        entries.push(entry.value)
      }
      return json(entries) 
}

serve({
  "/": index,
  "/wall": wall,
  "/messages.json": messages,
  "/:filepath+": files(
    `${Deno.cwd()}/public`,
  ),
});
