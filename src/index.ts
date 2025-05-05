import { Hono } from 'hono'

const app = new Hono()

app.get('/:code/*', async (c) => {
  const code = c.req.param('code');
  const fullPath = c.req.path;
  const restPath = fullPath.substring(fullPath.indexOf(code) + code.length + 1) || '';
  // console.log(`Code: ${code}, Rest Path: ${restPath}`);
  let targetUrl = '';

  if (code === 'me') {
    targetUrl = `https://tamatar.store/me/${restPath}`;
  } else if (code === 'dev') {
    targetUrl = `https://tamatar.store/dev/${restPath}`;
  } else {
    targetUrl = `https://tamatar.store/xyz/${code}/${restPath}`;
  }
  return c.redirect(targetUrl, 307);
});

export default app;
