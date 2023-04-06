// import PocketBase from 'pocketbase';
// import { serializeNonPOJOs } from '$lib/utils';
import { redirect } from "@sveltejs/kit";
import { user } from "./stores/userStore"

export const handle = async ({ event, resolve}) => {
// 	event.locals.pb = new PocketBase('http://127.0.0.1:8090');
// 	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

// 	console.log(event.locals)
// 	if (event.locals.pb.authStore.isValid) {
// 		event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
// 	} else {
// 		event.locals.user = undefined;
// 	}

		let trainer
		user.subscribe(value => {
			trainer = value
		})

		if (trainer) {
			// console.log(trainer)
			event.locals.user = trainer
			// console.log(event.locals.user)
		} else {
			event.locals.user = ''
		}

		//Protection for pokedex routes
		if (event.url.pathname.startsWith('/pokedex')) {
			if (!event.locals.user) {
				throw redirect(303 , '/protected')
			}
		}

	const response = await resolve(event);

// 	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

	return response;
};
