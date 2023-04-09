import axios from "axios";

export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj);
};

const loadVarieties = async(url) => {
	const res = await axios.get(url)
	const specie = await res.data
	return specie.varieties
}

const handleChain = async(chain , num , evos) => {
	const x = chain.evolves_to
	const evos2 = []
	let moreEvos = false
	num = num+1


	for(let poke of x) {
		const e = await loadVarieties(poke.species.url)
		
		for (let variety of e) {
			evos2.push({number:num, ...variety.pokemon})
		}

		if (poke.evolves_to.length !== 0) {
			moreEvos = true
		}
	}
	
	evos.push(evos2)

	if (moreEvos) {
		for (let poke of x) {
			return handleChain(poke , num , evos)
		}
	}
}

const handleEvolutions = async(chain) => {
	const evos = []
	const evos2 = []
	let num = 1
	const varieties = await loadVarieties(chain.species.url)

	for (let variety of varieties) {
		evos2.push({number:num, ...variety.pokemon})
	}

	evos.push(evos2)

	try {
		await handleChain(chain , num , evos)
		return evos
	} catch (err) {
		return undefined
	}
}

export {
	handleEvolutions
}