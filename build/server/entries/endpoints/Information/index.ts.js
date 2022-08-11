import { d as db } from "../../../_app/immutable/chunks/database-78bf2dfb.js";
import { t as timePosted } from "../../../_app/immutable/chunks/date-83ac663c.js";
import "@prisma/client";
const GET = async ({ request }) => {
  const data = await db.info.findMany({
    orderBy: { posted: "desc" }
  });
  const infos = data.map((info) => {
    return {
      id: info.id,
      content: info.content,
      posted: timePosted(info.posted)
    };
  });
  if (!infos) {
    return {
      status: 400
    };
  }
  return {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: { infos }
  };
};
const POST = async ({ request }) => {
  const form = await request.formData();
  const info = String(form.get("info"));
  if (info.length == 0) {
    return {
      status: 400,
      body: "Det m\xE5ste finnas text i rutan",
      headers: { location: "/Information" }
    };
  }
  await db.info.create({
    data: {
      posted: new Date(),
      content: info
    }
  });
  return {};
};
const DELETE = async ({ request }) => {
  const form = await request.formData();
  const infoId = +form.get("id");
  await db.info.delete({ where: { id: infoId } });
  return {
    status: 303,
    headers: { location: "/Information" }
  };
};
export {
  DELETE,
  GET,
  POST
};
