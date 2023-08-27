import CharacterList from '../components/CharacterList'
import characters from '../assets/characters.json'

function Home() {
  return (
    <>
      <CharacterList characters={characters} />
    </>
  )
}

export default Home
