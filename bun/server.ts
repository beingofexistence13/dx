import {serve} from "bun";

globalThis.count ??= 0;
globalThis.count++;

serve({
  fetch(req: Request) {
    return new Response(`Reloaded ${globalThis.count} times`);
  },
  port: 3000,
});
