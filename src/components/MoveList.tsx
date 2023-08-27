import MoveItem, { MoveItemProps } from "./MoveItem"

interface MoveListProps {
  moves: MoveItemProps[],
  title: string
}

export default function MoveList(props: MoveListProps) {
  const { moves, title } = props
  const moveItems = moves.map((move, index) => <li key={ index }>
    <MoveItem
      buttons={ move.buttons }
      name={ move.name }
    />
  </li>)

  return (
    <div>
      <h3 className="font-bold font-spectralsc mb-2 text-2xl">{title}</h3>
      <ul>
        { moveItems }
      </ul>
    </div>
  )
}
