import { createClient, groq } from 'next-sanity';

export async function getHome() {
  const client = createClient({
    projectId: '5azs66ei',
    dataset: 'production',
    apiVersion: '2023-04-23',
  });
}
