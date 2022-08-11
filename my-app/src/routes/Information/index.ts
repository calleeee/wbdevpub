import type { RequestHandler } from "@sveltejs/kit";

import { db } from '$lib/database'

import { timePosted } from '$lib/date'

export const GET: RequestHandler = async ({ request }) => {
    const data = await db.info.findMany({
        orderBy: { posted: 'desc' }
    })

	const infos = data.map((info) => {
		return {
			id: info.id,
			content: info.content,
			posted: timePosted(info.posted),
		}
	})

	if (!infos){
		return {
			status: 400
		}
	}

    return {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: { infos }
    }
  }



export const POST: RequestHandler = async ({ request }) => {
	const form = await request.formData()
	const info = String(form.get('info'))

	// you should probably use a validation library
	if (info.length == 0) {
		return {
			status: 400,
			body: 'Det måste finnas text i rutan',
			headers: { location: '/Information' }
		}
	}

	// the user id is hardcoded but you can get it from a session
	await db.info.create({
		data: {
			posted: new Date(),
			content: info,
		}
	})

	return {}
}

export const DELETE: RequestHandler = async ({ request }) => {
	const form = await request.formData()
	const infoId = +form.get('id')

	await db.info.delete({ where: { id: infoId } })

	return {
		status: 303,
		headers: { location: '/Information' }
	}
}