export type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  role: "Admin" | "Manager" | "Agent";
  realmMappings: {
    name: string;
  }[];
};
