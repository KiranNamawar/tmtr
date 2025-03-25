import { Hono } from 'hono'

const app = new Hono()

app.get('/:code', async (c) => {
  const code = c.req.param('code');
  const targetUrl = `https://tamatar.store/api/tmtr/${code}`;
  return c.redirect(targetUrl, 307);
})


export default app;
