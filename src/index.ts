import { Hono } from 'hono'

const app = new Hono()

app.get('/:code', async (c) => {
  const code = c.req.param('code');
  const targetUrl = `http://localhost:3000/api/tmtr/${code}`;
  return c.redirect(targetUrl, 307);
})


export default app;
