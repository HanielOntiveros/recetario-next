import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const clientConfig = {
  projectId: "lgw5k69d",
  dataset: "production",
};

export const client = sanityClient({
  projectId: clientConfig.projectId,
  dataset: clientConfig.dataset,
  apiVersion: "2022-10-09",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
