import ky from "ky";

const url = import.meta.env.VITE_API_URL;

const kyInstance = ky.create({
  prefixUrl: url,
});

export const kyPrivateInstance = ky.extend({
  hooks: {
    beforeRequest: [
      (request) => {
        const token = "MY_TOKEN";
        request.headers.set("Authorization", `Bearer ${token}`);
      },
    ],
  },
});

export default kyInstance;
