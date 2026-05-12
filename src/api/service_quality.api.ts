import Parse from "parse";

export const getServiceQuality = async (companiesId: string[]) => {
  const response = await Parse.Cloud.run("quality", {
    companies: companiesId,
  });

  return response.data;
};
