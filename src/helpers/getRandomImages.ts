import { v4 as uuidv4 } from "uuid";

/* interface */
import PhotoType from "../types/PhotoType";

/* helpers */
import getCurrentDate from "./getCurrentDate";

export function getRandomId() {
  return `id/${Math.floor(Math.random() * 1000)}`;
  //return `seed/100`;
}

export function getRandomAscpetRatio() {
  const imageSizes = ["640/480", "480/640", "640/640"];
  return imageSizes[Math.floor(Math.random() * imageSizes.length)];
}

const sample: PhotoType = {
  id: uuidv4(),
  url: `https://picsum.photos/id/504/640/640`,
  author: "Author 1",
  title: "Title 1",
  createdAt: getCurrentDate(),
};
export function getRandomImage(): PhotoType {
  const id = getRandomId();
  const aspectRatio = getRandomAscpetRatio();
  const newImage: PhotoType = {
    ...sample,
    id: uuidv4(),
    url: `https://picsum.photos/${id}/${aspectRatio}`,
  };
  return newImage;
}

export default function getNewIamges(count: number): PhotoType[] {
  const newImages = [];
  for (let i = 0; i < count; i++) {
    newImages.push(getRandomImage());
  }
  return newImages;

  /* TODO: itt lehet fetchelni az infót a képhez */
  //https://picsum.photos/id/0/info
}
