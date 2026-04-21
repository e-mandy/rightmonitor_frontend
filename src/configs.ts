import { faker } from "@faker-js/faker";

const configs: any = {
  appName: faker.commerce.productName(),
  appVersion: "1.0.0",
  xpUrl: "",
  domainName: "rightcomtech.com",
  clientsIdSuffix: "-beta",
  backendUrl: "https://notify-api.rightcomtech.com",
  socketUrl: "https://notify-ws.rightcomtech.com",
};
export default configs;
