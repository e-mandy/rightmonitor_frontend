import Parse from "parse";

Parse.initialize(
  import.meta.env.VITE_PARSE_APP_ID,
  import.meta.env.VITE_PARSE_APP_KEY,
);

Parse.serverURL = import.meta.env.VITE_BACKEND_URL;

export default Parse;
