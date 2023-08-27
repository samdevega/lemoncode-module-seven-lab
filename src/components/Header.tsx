import Image from "./Image"

function Header() {
  return (
    <>
      <Image alt="Mortal Kombat" className="h-14 m-auto" src="logo.png" />
      <h1 className="bg-clip-text bg-mk font-bold font-border font-spectralsc mb-16 stroke-black text-center text-6xl text-transparent">Moves</h1>
    </>
  )
}

export default Header
