import './style.css'

import { age, isCool, name } from './bases/01-types'
import { pokemonsIds, pokemons, charmander } from './bases/02-objects'
// import { charmander as pokeCharmander } from './bases/03-classes'
// import { charmander as pokeCharmander } from './bases/04-injection'
import { charmander as pokeCharmander } from './bases/06-decorators2'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    ${name} ${age} ${isCool}
    ${pokemonsIds.join(', ')}
    <pre>${JSON.stringify(pokemons, null, 2)}</pre>

    <h2>Hello ${pokeCharmander.name}</h2>
  </div>
`
