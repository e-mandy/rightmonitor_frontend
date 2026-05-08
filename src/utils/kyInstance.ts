import ky from "ky";

export const KyConfigs = (url: string) => {
  const kyInstance = ky.create({
    prefixUrl: url,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const kyPrivateInstance = ky.extend({
    hooks: {
      beforeRequest: [
        (request) => {
          const token = "MY_TOKEN";
          request.headers.set("Authorization", `Bearer ${token}`);
        },
      ],
    },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  return { kyInstance, kyPrivateInstance };
};
