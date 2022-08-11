import * as bcrypt from "bcrypt";
import * as cookie from "cookie";
import { d as db } from "../../../../_app/immutable/chunks/database-78bf2dfb.js";
import "@prisma/client";
const POST = async ({ request }) => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  if (typeof username !== "string" || typeof password !== "string") {
    return {
      status: 400,
      body: {
        error: "Enter a valid username and password."
      }
    };
  }
  if (!username || !password) {
    return {
      status: 400,
      body: {
        error: "Username and password are required."
      }
    };
  }
  const user = await db.user.findUnique({
    where: { username }
  });
  const passwordMatch = user && await bcrypt.compare(password, user.passwordHash);
  if (!user || !passwordMatch) {
    return {
      status: 400,
      body: {
        error: "You entered the wrong credentials."
      }
    };
  }
  return {
    status: 200,
    body: {
      user: { username },
      success: "Success."
    },
    headers: {
      "Set-Cookie": cookie.serialize(
        "session",
        user.userAuthToken,
        {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 60 * 24 * 30
        }
      )
    }
  };
};
export {
  POST
};
