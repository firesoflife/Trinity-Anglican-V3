import { createClient, groq } from 'next-sanity';

export async function getHome() {
  return createClient(sanityClientConfig).fetch(groq`*[_type == "home" ]`);
}
