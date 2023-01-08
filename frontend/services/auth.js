import axios from 'axios';

const strapiUrl = process.env.STRAPI_URL || 'http://localhost:1337';

export async function signIn({ email, password }) {
  const res = await axios.post(`${strapiUrl}/api/auth/local`, {
    identifier: email,
    password,
  });
  return res.data;
}