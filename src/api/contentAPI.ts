import axios from "axios";
import { Layout } from "../types/model";

// I use axios and instance for fetching

const contentApiInstance = axios.create({
  baseURL: "http://localhost:8080",
});

export const getDefinitions = () => {
  return contentApiInstance.get<Layout>("/definition");
};
