interface CharacterItemProps {
  avatar: string,
  name: string,
}

export default function CharacterItem(props: CharacterItemProps) {
  const { avatar, name } = props

  return (
    <div className="border-4 cursor-pointer h-24 hover:border-orange-500 w-24 overflow-hidden">
      <img
        src={ avatar }
        alt={ name }
        height={ 100 }
        title={ name }
        width={ 100 }
      />
    </div>
  )
}
