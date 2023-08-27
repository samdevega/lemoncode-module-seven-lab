import { Link } from "react-router-dom"
import CharacterItem from "./CharacterItem"

interface Character {
  avatar: string,
  name: string,
  slug: string
}

interface CharacterListProps {
  characters: Character[]
}

export default function CharacterList(props: CharacterListProps) {
  const { characters } = props
  const listItems = characters.map(character => <li key={ character.name }>
    <Link to={`character/${ character.slug }`}>
      <CharacterItem
        avatar={ character.avatar }
        name={ character.name }
      />
    </Link>
  </li>)

  return (
    <ul className="flex flex-wrap gap-2 justify-center w-full">
      { listItems }
    </ul>
  )
}
