import { instance } from "./axios";

export const fetchPost = async (values) => {
  if (values.title !== "" && values.body !== "") {
    return await instance.post("/posts", values);
  }
};

export const getPosts = async () => {
  const { data } = await instance.get("/posts?limit=10");
  return data;
};
