import Parse from "parse/dist/parse.min.js";

export const getCompanies = async () => {
  const query = new Parse.Query("Company");
  const companies = await query.find();

  return companies;
};
