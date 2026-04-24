import Parse from "parse";

export const getCompanies = async () => {
  const query = await Parse.Cloud.run("getCompanies");
  return query.data;
};
