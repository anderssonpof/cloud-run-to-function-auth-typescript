const express = require('express');
const {GoogleAuth} = require('google-auth-library');

const app = express();
const auth = new GoogleAuth();
const url = process.env.FUNCTION_URL;
const targetAudience = url;

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
  request();
});

const port = 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});

async function request() {
  console.info(`request ${url} with target audience ${targetAudience}`);
  const client = await auth.getIdTokenClient(targetAudience);
  const res = await client.request({url});
  console.info(res.data);
}

request().catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
