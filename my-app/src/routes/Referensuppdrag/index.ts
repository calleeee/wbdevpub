import type { RequestHandler } from "@sveltejs/kit";

import { db } from '$lib/database'

import { timePosted } from '$lib/date'

export const GET: RequestHandler = async ({ request }) => {
    const data = await db.ref.findMany({
        orderBy: { posted: "desc" }
    })

	const refs = data.map((ref) => {
		return {
			id: ref.id,
			title: ref.title,
			descrip: ref.descrip,
            posted: timePosted(ref.posted)
		}
	})

	if (!refs){
		return {
			status: 400
		}
	}

    return {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: { refs }
    }
  }



export const POST: RequestHandler = async ({ request }) => {
	const form = await request.formData()
	const descrip = String(form.get('descrip'))
    const title = String(form.get("title"))

	// you should probably use a validation library
	if (descrip.length == 0 || title.length == 0) {
		return {
			status: 400,
			body: 'Det måste finnas text i rutorna',
			headers: { location: '/Referensuppdrag' }
		}
	}

    await db.ref.create({
		data: {
            posted: new Date(),
			descrip: descrip,
            title: title
		}
	})

	return {}
}

export const DELETE: RequestHandler = async ({ request }) => {
	const form = await request.formData()
	const refId = +form.get('id')

	await db.ref.delete({ where: { id: refId } })

	return {
		status: 303,
		headers: { location: '/Referensuppdrag' }
	}
}