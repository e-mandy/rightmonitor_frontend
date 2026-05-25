import Parse from "parse";

export const initParseInClientSide = () => {
  Parse.initialize(
    import.meta.env.VITE_PARSE_APP_ID,
    import.meta.env.VITE_PARSE_APP_KEY,
  );

  Parse.serverURL = import.meta.env.VITE_BACKEND_URL;
  Parse.CoreManager.set("REQUEST_ATTEMPT_LIMIT", 1);
};

export const setParseToken = (token: string) => {
  Parse.CoreManager.set("REQUEST_HEADERS", {
    Authorization: `Bearer ${token}`,
  });
};
