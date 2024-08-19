import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export default customFetch;

// const { data } = await customFetch.get(`/jobs/${id}`);
