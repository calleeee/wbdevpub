import * as bcrypt from "bcrypt";
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
        error: "Something went horribly wrong."
      }
    };
  }
  if (!username || !password) {
    return {
      status: 400,
      body: {
        error: "Username and password is required."
      }
    };
  }
  try {
    await db.user.create({
      data: {
        username,
        passwordHash: await bcrypt.hash(password, 10)
      }
    });
    return {
      status: 200,
      body: { success: "Success." }
    };
  } catch (error) {
    return {
      status: 400,
      body: {
        error: "User already exists."
      }
    };
  }
};
export {
  POST
};
