import Button from "../ui/button"

const link = [
  {
    name: 'Features',
    href: '#features'
  },
  {
    name: 'How It Works',
    href: '#howitworks'
  },
  {
    name: 'Devices',
    href: '#devices'
  },
  {
    name: 'Download',
    href: '#download'
  },
]

export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full bg-(--bg-2) px-4 py-2">
      <div className="relative flex items-center">
        <img src="/logo.png" alt="" style={{
          position: 'relative',
          background: 'var(--c2)',
          width: '65px',
          borderRadius: 'var(--r-pill)'
        }} />
        <h1 className="font-(--cabin) text-lg">MifiManager</h1>
        <div className="absolute top-0 inset-0 bg-transparent"></div>
      </div>
      <div className="relative flex gap-(--space-lg)">
        {link.map((linkItems) => (
          <a href={linkItems.href}>{linkItems.name}</a>
        ))}
      </div>
      <div className="flex gap-(--space-sm)">
        <Button text='Log in' />
        <Button text='Get Started' />
      </div>
    </div>
  )
}