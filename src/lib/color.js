const color = (type) => {
  switch (type) {
    case 'fire':
      return 'red-600'
    case 'grass':
      return 'green-700'
    case 'water':
      return 'cyan-800'
    case 'bug':
      return 'lime-700'
    case 'normal':
      return 'rose-900'
    case 'poison':
      return 'fuchsia-900'
    case 'electric':
      return 'amber-500'
    case 'ground':
      return 'yellow-800'
    case 'fairy':
      return 'pink-600'
    case 'fighting':
      return 'red-900'
    case 'psychic':
      return 'rose-600'
    case 'rock':
      return 'amber-950'
    case 'ice':
      return 'cyan-500'
    case 'ghost':
      return 'violet-600'
    case 'dragon':
      return 'violet-900'
    case 'dark':
      return 'zinc-950'
    case 'steel':
      return 'slate-500'
    case 'flying':
      return 'blue-400'
  }
}

const bgColor = (type) => {
  switch(type) {
    case 'fire':
      return 'bg-red-600'
    case 'grass':
      return 'bg-green-700'
    case 'water':
      return 'bg-cyan-800'
    case 'bug':
      return 'bg-lime-700'
    case 'normal':
      return 'bg-rose-900'
    case 'poison':
      return 'bg-fuchsia-900'
    case 'electric':
      return 'bg-amber-500'
    case 'ground':
      return 'bg-yellow-800'
    case 'fairy':
      return 'bg-pink-600'
    case 'fighting':
      return 'bg-red-900'
    case 'psychic':
      return 'bg-rose-600'
    case 'rock':
      return 'bg-amber-950'
    case 'ice':
      return 'bg-cyan-500'
    case 'ghost':
      return 'bg-violet-600'
    case 'dragon':
      return 'bg-violet-900'
    case 'dark':
      return 'bg-zinc-950'
    case 'steel':
      return 'bg-slate-500'
    case 'flying':
      return 'bg-blue-400'
  }
}

const ringColor = (type) => {
  if (type != 'undefined') {
    switch (type) {
    case 'fire':
      return 'ring-4 ring-inset ring-red-600'
    case 'grass':
      return 'ring-4 ring-inset ring-green-700'
    case 'water':
      return 'ring-4 ring-inset ring-cyan-800'
    case 'bug':
      return 'ring-4 ring-inset ring-lime-700'
    case 'normal':
      return 'ring-4 ring-inset ring-rose-900'
    case 'poison':
      return 'ring-4 ring-inset ring-fuchsia-900'
    case 'electric':
      return 'ring-4 ring-inset ring-amber-500'
    case 'ground':
      return 'ring-4 ring-inset ring-yellow-800'
    case 'fairy':
      return 'ring-4 ring-inset ring-pink-600'
    case 'fighting':
      return 'ring-4 ring-inset ring-red-900'
    case 'psychic':
      return 'ring-4 ring-inset ring-rose-600'
    case 'rock':
      return 'ring-4 ring-inset ring-amber-950'
    case 'ice':
      return 'ring-4 ring-inset ring-cyan-500'
    case 'ghost':
      return 'ring-4 ring-inset ring-violet-600'
    case 'dragon':
      return 'ring-4 ring-inset ring-violet-900'
    case 'dark':
      return 'ring-4 ring-inset ring-zinc-950'
    case 'steel':
      return 'ring-4 ring-inset ring-slate-500'
    case 'flying':
      return 'ring-4 ring-inset ring-blue-400'
    }
  } else {
    return 'ring-0'
  }
}

const fromColor = (type) => {
  switch(type) {
    case 'fire':
      return 'from-red-600'
    case 'grass':
      return 'from-green-700'
    case 'water':
      return 'from-cyan-800'
    case 'bug':
      return 'from-lime-700'
    case 'normal':
      return 'from-rose-900'
    case 'poison':
      return 'from-fuchsia-900'
    case 'electric':
      return 'from-amber-500'
    case 'ground':
      return 'from-yellow-800'
    case 'fairy':
      return 'from-pink-600'
    case 'fighting':
      return 'from-red-900'
    case 'psychic':
      return 'from-rose-600'
    case 'rock':
      return 'from-amber-950'
    case 'ice':
      return 'from-cyan-500'
    case 'ghost':
      return 'from-violet-600'
    case 'dragon':
      return 'from-violet-900'
    case 'dark':
      return 'from-zinc-950'
    case 'steel':
      return 'from-slate-500'
    case 'flying':
      return 'from-blue-400'
  }
}

const toColor = (type) => {
  if (type != undefined){
    switch(type) {
      case 'fire':
        return 'to-red-600'
      case 'grass':
        return 'to-green-700'
      case 'water':
        return 'to-cyan-800'
      case 'bug':
        return 'to-lime-700'
      case 'normal':
        return 'to-rose-900'
      case 'poison':
        return 'to-fuchsia-900'
      case 'electric':
        return 'to-amber-500'
      case 'ground':
        return 'to-yellow-800'
      case 'fairy':
        return 'to-pink-600'
      case 'fighting':
        return 'to-red-900'
      case 'psychic':
        return 'to-rose-600'
      case 'rock':
        return 'to-amber-950'
      case 'ice':
        return 'to-cyan-500'
      case 'ghost':
        return 'to-violet-600'
      case 'dragon':
        return 'to-violet-900'
      case 'dark':
        return 'to-zinc-950'
      case 'steel':
        return 'to-slate-500'
      case 'flying':
        return 'to-blue-400'
    }
  } else {
    return ''
  }
}

export {
  color,
  bgColor,
  ringColor,
  fromColor,
  toColor
}