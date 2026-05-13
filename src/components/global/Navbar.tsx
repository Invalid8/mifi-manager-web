import { Button } from "../ui/button"

function Navbar() {
  return (
    <header className="h-20 w-full px-4 py-2 flex items-center flex-1">
      <nav className="flex justify-between items-center flex-1 lg:px-[10%] px-4">
        <div className="w-37">
          <img width={45} height={45} src="/logo.png" className="MM rounded-full bg-primary" />
        </div>
        <span className="hidden md:block md:text-3xl lg:text-4xl font-bold">
          Mifi Manager
        </span>
        <Button className="px-7! py-5! rounded-sm bg-primary! text-white uppercase tracking-wide">
          Download App
        </Button>
      </nav>
    </header>
  )
}

export default Navbar