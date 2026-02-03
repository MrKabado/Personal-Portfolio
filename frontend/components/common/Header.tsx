export default function Header() {
  
  
  const navItems = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Projects",
    },
    {
      name: "Contact"
    }
  ]
  return (
    <header className="px-35 py-2 shadow-md flex flex-row justify-between">
      <div className="flex flex-col">
        <h1 className="font-semibold">Jerson Jay Bonghanoy</h1>
        <h1 className="text-gray-500">Aspiring Dev</h1>
      </div>

      <nav className="flex items-center justify-center">
        <ul className="flex flex-row gap-5 items-center justify-center">
          {navItems.map((items, i) => (
            <li 
              key={i}
              className="
                text-sm cursor-pointer bg-gray-100 rounded-sm
                px-3 py-1 transition-all ease-in-out duration-200 w-20 text-center

                hover:font-semibold
              "
            > {items.name}</li>
          ))}
        </ul>
      </nav>
    </header>
  )
}