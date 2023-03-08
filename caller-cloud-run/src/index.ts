// Example: https://my-cloud-run-service.run.app/books/delete/12345
const url = process.env.FUNCTION_URL;

// Example (Cloud Run): https://my-cloud-run-service.run.app/
const audience = `https://${process.env.K_SERVICE}-run-service.run.app/`;
const targetAudience = audience;

const {GoogleAuth} = require('google-auth-library');
const auth = new GoogleAuth();

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
