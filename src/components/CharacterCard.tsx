import Image from "./Image"
import MoveList from "./MoveList"
import { MoveItemProps } from "./MoveItem"

interface CharacterCardProps {
  description: string
  moves: {
    finishing: MoveItemProps[]
    special: MoveItemProps[]
  }
  name: string
  sprite: string
}

export default function CharacterCard(character: CharacterCardProps) {
  const { description, moves, name, sprite } = character

  return (
    <div className="border-4 bg-white bg-opacity-30 mt-12 p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/5 w-full">
          <Image
            alt={name}
            className="border-4 bg-black bg-opacity-70 h-40 m-auto object-contain w-full"
            height={0}
            sizes="100vw"
            src={sprite}
            width={0}
          />
        </div>
        <div className="md:w-3/5 w-full">
          <h2 className="font-bold font-spectralsc mb-4 text-4xl">{name}</h2>
          <p className="mb-4">{description}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-3 justify-around mt-8">
        <MoveList moves={moves.special} title="Specials" />
        <MoveList moves={moves.finishing} title="Finishing" />
      </div>
    </div>
  )
}
