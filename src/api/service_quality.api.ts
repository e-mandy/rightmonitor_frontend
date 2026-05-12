import Parse from "parse";

export const getServiceQuality = async (companiesId: number[]) => {
  const response = await Parse.Cloud.run("quality", {
    companies: companiesId,
  });

  return response.data;
};
