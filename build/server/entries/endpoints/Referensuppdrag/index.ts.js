import { d as db } from "../../../_app/immutable/chunks/database-78bf2dfb.js";
import { t as timePosted } from "../../../_app/immutable/chunks/date-83ac663c.js";
import "@prisma/client";
const GET = async ({ request }) => {
  const data = await db.ref.findMany({
    orderBy: { posted: "desc" }
  });
  const refs = data.map((ref) => {
    return {
      id: ref.id,
      title: ref.title,
      descrip: ref.descrip,
      posted: timePosted(ref.posted)
    };
  });
  if (!refs) {
    return {
      status: 400
    };
  }
  return {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: { refs }
  };
};
const POST = async ({ request }) => {
  const form = await request.formData();
  const descrip = String(form.get("descrip"));
  const title = String(form.get("title"));
  if (descrip.length == 0 || title.length == 0) {
    return {
      status: 400,
      body: "Det m\xE5ste finnas text i rutorna",
      headers: { location: "/Referensuppdrag" }
    };
  }
  await db.ref.create({
    data: {
      posted: new Date(),
      descrip,
      title
    }
  });
  return {};
};
const DELETE = async ({ request }) => {
  const form = await request.formData();
  const refId = +form.get("id");
  await db.ref.delete({ where: { id: refId } });
  return {
    status: 303,
    headers: { location: "/Referensuppdrag" }
  };
};
export {
  DELETE,
  GET,
  POST
};
