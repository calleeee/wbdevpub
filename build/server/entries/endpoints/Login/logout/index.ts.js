import * as cookie from "cookie";
const GET = async () => {
  return {
    status: 303,
    headers: {
      "Set-Cookie": cookie.serialize("session", "", {
        path: "/",
        expires: new Date(0)
      }),
      location: "/"
    }
  };
};
export {
  GET
};
