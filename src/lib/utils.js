import axios from "axios";

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
		{number:1 , name:'scarlet-violet' , content:{level: [] , machine:[] , egg:[] , tutor:[]}},
		{number:2 , name:'sword-shield' , content:{level: [] , machine:[] , egg:[] , tutor:[]}},
		{number:3 , name:'lets-go-pikachu-lets-go-eevee' , content:{level: [] , machine:[] , egg:[] , tutor:[]}},
		{number:4 , name:'ultra-sun-ultra-moon' , content:{level: [] , machine:[] , egg:[] , tutor:[]}},
		{number:5 , name:'sun-moon' , content:{level: [] , machine:[] , egg:[] , tutor:[]}},
		{number:6 , name:'omega-ruby-alfa-sapphire' , content:{level:[] , machine:[] , egg:[] , tutor:[]}},
		{number:7 , name:'x-y' , content:{level: [] , machine:[] , egg:[] , tutor:[]}},
		{number:8 , name:'black-2-white-2' , content:{level: [] , machine:[] , egg:[] , tutor:[]}},
		{number:9 , name:'xd' , content:{level: [] , machine:[] , egg:[] , tutor:[]}},
		{number:10 , name:'colosseum' , content:{level: [] , machine:[] , egg:[] , tutor:[]}},
		{number:11 , name:'black-white' , content:{level: [] , machine:[] , egg:[] , tutor:[]}},
		{number:12 , name:'heartgold-soulsilver' , content:{level: [] , machine:[] , egg:[] , tutor:[]}},
		{number:13 , name:'platimun' , content:{level: [] , machine:[] , egg:[] , tutor:[]}},
		{number:14 , name:'diamond-pearl' , content:{level: [] , machine:[] , egg:[] , tutor:[]}},
		{number:15 , name:'firered-leafgreen' , content:{level: [] , machine:[] , egg:[] , tutor:[]}},
		{number:16 , name:'emerald' , content:{level: [] , machine:[] , egg:[] , tutor:[]}},
		{number:17 , name:'ruby-sapphire' , content:{level: [] , machine:[] , egg:[] , tutor:[]}},
		{number:18 , name:'crystal' , content:{level: [] , machine:[] , egg:[] , tutor:[]}},
		{number:19 , name:'gold-silver' , content:{level: [] , machine:[] , egg:[] , tutor:[]}},
		{number:20 , name:'yellow' , content:{level: [] , machine:[] , egg:[] , tutor:[]}},
		{number:21 , name:'red-blue' , content:{level: [] , machine:[] , egg:[] , tutor:[]}}
	]
	
	for (let element of versions) {
		for (let move of arr) {
			for (let version of move.version_group_details) {
				if (version.version_group.name === element.name) {
					if (version.move_learn_method.name === 'level-up') {
						element.content.level.push({level: version.level_learned_at , move})
					}
					if (version.move_learn_method.name === 'machine') {
						element.content.machine.push({level: version.level_learned_at , move})
					}
					if (version.move_learn_method.name === 'egg') {
						element.content.egg.push({level: version.level_learned_at , move})
					}
					if (version.move_learn_method.name === 'tutor') {
						element.content.tutor.push({level: version.level_learned_at , move})
					}
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