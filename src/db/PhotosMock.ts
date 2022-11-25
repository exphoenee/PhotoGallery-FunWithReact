import { v4 as uuidv4 } from "uuid";

import PhotoType from "./../types/PhotoType";

const PhotosMock: PhotoType[] = [
  {
    id: "e625066b-9d92-462a-9630-572249f92033",
    url: `https://picsum.photos/id/504/640/640`,
    author: "Author 1",
    title: "Title 1",
    createdAt: "2020-01-01",
  },
  {
    id: "6cea9572-340f-4766-80af-721efb2bde64",
    url: `https://picsum.photos/id/541/640/640`,
    author: "Author 2",
    title: "Title 2",
    createdAt: "2020-01-02",
  },
  {
    id: "e4ee19f2-fe29-4264-b188-acc4fd1a13ff",
    url: `https://picsum.photos/id/733/640/480`,
    author: "Author 3",
    title: "Title 3",
    createdAt: "2020-01-03",
  },
  {
    id: "d696f18e-68cb-415d-8499-8c87b7b24cbf",
    url: `https://picsum.photos/id/695/640/480`,
    author: "Author 4",
    title: "Title 4",
    createdAt: "2020-01-03",
  },
  {
    id: "70eeeffa-887e-435c-9941-ed734157f579",
    url: `https://picsum.photos/id/628/480/640`,
    author: "Author 5",
    title: "Title 5",
    createdAt: "2020-01-03",
  },
  {
    id: "2c5cf988-0b11-4dba-b462-cd1612095bde",
    url: `https://picsum.photos/id/900/640/480`,
    author: "Author 6",
    title: "Title 6",
    createdAt: "2020-01-03",
  },
  {
    id: "6050d407-d1b1-4ac6-afcc-f96b3d8a9eb6",
    url: `https://picsum.photos/id/361/480/640`,
    author: "Author 4",
    title: "Title 4",
    createdAt: "2020-01-03",
  },
  {
    id: "0d034dba-ab9a-4f6b-ab83-785ea12c1d6b",
    url: `https://picsum.photos/id/650/640/480`,
    author: "Author 4",
    title: "Title 4",
    createdAt: "2020-01-03",
  },
];
export default PhotosMock;

export const placeholerImage = {
  id: "placeholder",
  url: `https://via.placeholder.com/640x480`,
  author: "unkown",
  title: "Placeholder",
  createdAt: "2020-01-01",
};
