import figlet from "figlet";

const server = Bun.serve({
  fetch() {
    const body = figlet.textSync('Bun is Awesome!!!');
    return new Response(body);
  },
  port: 5000,
});