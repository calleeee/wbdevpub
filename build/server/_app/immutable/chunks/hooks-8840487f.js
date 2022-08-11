import * as cookie from "cookie";
import { d as db } from "./database-78bf2dfb.js";
import "@prisma/client";
const handle = async ({
  event,
  resolve
}) => {
  const cookieHeader = event.request.headers.get("cookie");
  const cookies = cookie.parse(cookieHeader ?? "");
  if (!cookies.session) {
    return await resolve(event);
  }
  const session = await db.user.findUnique({
    where: { userAuthToken: cookies.session }
  });
  if (session) {
    event.locals.user = { username: session.username };
  }
  return await resolve(event);
};
const getSession = ({ locals }) => {
  if (!locals.user) {
    return {};
  }
  return {
    user: {
      username: locals.user.username
    }
  };
};
export {
  getSession,
  handle
};
