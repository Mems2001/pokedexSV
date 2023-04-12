import axios from "axios";
import { writable } from "svelte/store";

export const searchTerm = writable('')
export const searchedPokes = writable([])
let allPokes = []

const url = 'https://pokeapi.co/api/v2/pokemon?limit=1279'

axios.get(url)
  .then(res => allPokes = res.data.results)
  .catch(err => console.log(err))

export const newStore = async(term) => {
  const newSearch = await allPokes.filter(poke => poke.name.toLowerCase().includes(term.toLowerCase()))
  try {
    searchedPokes.set(newSearch)
    // console.log(newSearch)
    // let data
    // searchedPokes.subscribe(value => data = value)
    // console.log(data)
  } catch (err) {
    console.log(err)
    throw err
  }
}