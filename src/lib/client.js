import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// import { vite } from 'vite';

// Load environment variables from Vite's env variables
// const { REACT_SANITY_API_TOKEN } = vite.env;


export const client = sanityClient({
  projectId: 'sz1v8xe2',
  dataset: 'production',
  apiVersion: '2023-08-02',
  useCdn: true,
  token: "sknrvcaPLv5TTM6zvnnolrzSW35KoQSfHXwoc2NFdoWUL180erflh87HOSaD6Ty3kK4OMSckDPlhzdT7npNBPl8l9Fuat6GhFGsuT5y7TdRbv9ZqlSLEuG7qQe9GNWp8Dng40NEwe3i5XKpf6ZK4WOHKPHDUZISNSllrCtLbljvwQvJJbtrO"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);