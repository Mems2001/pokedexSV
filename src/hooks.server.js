// import PocketBase from 'pocketbase';
// import { serializeNonPOJOs } from '$lib/utils';
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

		if (trainer != 'trainer') {
			// console.log(trainer)
			event.locals.user = trainer
			// console.log(event.locals.user)
		} 

	const response = await resolve(event);

// 	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

	return response;
};
