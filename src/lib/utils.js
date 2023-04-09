import axios from "axios";
import { element } from "svelte/internal";

export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj);
};

// FUNCTIONS FOR EVOLUTIONS
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

// FUNCTIONS FOR MOVEMENTS
const handleVersions = (arr) => {
	const versions = [
		{number:21 , name:'red-blue' , content:[]},
		{number:20 , name:'yellow' , content:[]},
		{number:19 , name:'gold-silver' , content:[]},
		{number:18 , name:'crystal' , content:[]},
		{number:17 , name:'ruby-sapphire' , content:[]},
		{number:16 , name:'emerald' , content:[]},
		{number:15 , name:'firered-leafgreen' , content:[]},
		{number:14 , name:'diamond-pearl' , content:[]},
		{number:13 , name:'platimun' , content:[]},
		{number:12 , name:'heartgold-soulsilver' , content:[]},
		{number:11 , name:'black-white' , content:[]},
		{number:10 , name:'colosseum' , content:[]},
		{number:9 , name:'xd' , content:[]},
		{number:8 , name:'black-2-white-2' , content:[]},
		{number:7 , name:'x-y' , content:[]},
		{number:6 , name:'omega-ruby-alfa-sapphire' , content:[]},
		{number:5 , name:'sun-moon' , content:[]},
		{number:4 , name:'ultra-sun-ultra-moon' , content:[]},
		{number:3 , name:'lets-go-pikachu-lets-go-eevee' , content:[]},
		{number:2 , name:'sword-shield' , content:[]},
		{number:1 , name:'scarlet-violet' , content:[]}
	]

	for (let element of versions) {
		for (let move of arr) {
			for (let version of move.version_group_details) {
				if (version.version_group.name === element.name) {
					element.content.push({level: version.level_learned_at , move})
				}
			}
		}
	}

	return versions
}

export {
	handleEvolutions,
	handleVersions
}