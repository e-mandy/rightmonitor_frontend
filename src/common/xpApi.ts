import axios, { type AxiosResponse } from "axios";

const cmApi: (name: string, payload: object) => Promise<AxiosResponse> = async (
  name: string,
  payload: object,
) => {
  const data: string = JSON.stringify(payload);

  const config: object = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://xp-api.rightcomtech.com/rest/functions/${name}`,
    headers: {
      accept: "*/*",
      "content-type": "application/json",
      "x-parse-application-id": "rightcomxp",
      "x-parse-rest-api-key": "restAPIKey",
    },
    data: data,
  };

  return axios.request(config);
};
export default cmApi;
