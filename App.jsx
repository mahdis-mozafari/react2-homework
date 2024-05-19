import Card from '../../a-real-component/card'
import Alert from '../../alert-component/Alert'
import BildingCard from '../../building-a-layout/buildingCard'
import { RenderList } from '../../maping-array-objects-to-li/mapComponnent'
import { ShowPlanets } from '../../maping-array-of-objects-to-li/app'
import Pokedex from '../../props-component-architecture/Pokemon'

function App() {
  const data = {
    image: '../../.learn/assets/Dylan.png?raw=true',
    cardTitle: 'Bob Dylan',
    cardDescription:
      'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
    button: {
      url: 'https://en.wikipedia.org/wiki/Bob_Dylan',
      label: 'Go to wikipedia',
    }}
    const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];
  return (
    <>
 <Card />
 <Alert text="OMG! Something really bad has happened!" />
 <BildingCard data={data} />
 <RenderList/>
 <ShowPlanets mapArr={planets}/>
 <Pokedex/>
 </>
  )
}

export default App
