export interface MoveItemProps {
  buttons: string,
  name: string
}

export default function MoveItem(props: MoveItemProps) {
  const { buttons, name } = props

  return (
    <>
      <strong>{name}</strong>: {buttons}
    </>
  )
}
