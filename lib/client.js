// client.js
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient;

export default client({
  projectId: "lgw5k69d",
  dataset: "production",
  apiVersion: "2021-10-14",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
