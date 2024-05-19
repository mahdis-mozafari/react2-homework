 pokemon: [
    {
      id: 1,
      name: 'Charmander',
      type: 'fire',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
    {
      id: 2,
      name: 'Squirtle',
      type: 'water',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    },
    {
      id: 3,
      name: 'Butterfree',
      type: 'flying',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
    },
    {
      id: 4,
      name: 'Rattata',
      type: 'normal',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
    },
    {
      id: 5,
      name: 'Metapod',
      type: 'bug',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
    },
  ];


 function PokeCard(props) {
    <div>
        <h1>{props.name}</h1>
        <img src={props.image} alt="image" />
        <p>Type:{props.type}</p>
    </div>
  }

export function Pokedex(){
return(
    <>
    <PokeCard Card={pokemon[0]}/>
    <PokeCard Card={pokemon[1]}/>
    <PokeCard Card={pokemon[2]}/>
    <PokeCard Card={pokemon[3]}/>
    <PokeCard Card={pokemon[4]}/>
    </>
)
}


