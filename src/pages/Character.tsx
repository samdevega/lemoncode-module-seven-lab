import { useParams } from 'react-router-dom'
import NotFound from './NotFound'
import CharacterCard from '../components/CharacterCard'
import LinkButton from '../components/LinkButton'
import characters from "../assets/characters.json"

function Character() {
  const { slug } = useParams()
  const character = characters.find(character => character.slug === slug)

  if (!character) {
    return <NotFound />
  }

  return (
    <div className="m-auto w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2">
      <LinkButton  href="/">
        Back
      </LinkButton>
      <CharacterCard {...character} />
    </div>
  )
}

export default Character
