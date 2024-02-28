const db = await Deno.openKv()

const messages = await db.list({prefix: ["wall_messages"]})

for await (const message of messages){ await db.delete(message.key)}


