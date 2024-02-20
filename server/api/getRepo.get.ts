import { defineEventHandler, getQuery } from "h3";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const repoUser = query?.repoUser || "schacon";
  const page = query?.page || 1;

  const data = await $fetch(
    `https://api.github.com/users/${repoUser}/repos?page=${page}&per_page=10`,
  );

  return {
    data,
  };
});
