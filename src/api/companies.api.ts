import Parse from "parse";

export const getCompanies = async () => {
  const query = new Parse.Query("Company");
  const companies = await query.find();

  return companies;
};
