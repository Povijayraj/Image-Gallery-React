import logoImg from '../assets/images/logo.png'

 function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img
            src={logoImg}
            alt="Gallery logo"
            className="h-9 w-9 "
          />
          <span className="text-sm font-semibold text-white sm:text-base">
            Image Gallery
          </span>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href="#home"
            className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
          >
            Home
          </a>
          <a
            href="#gallery"
            className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
          >
            Gallery
          </a>
          <a
            href="#about"
            className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
          >
            About
          </a>
        </div>

        <div className="sm:hidden">
          <select
            aria-label="Navigate"
            className="rounded-lg border border-white/10 bg-gray-950 px-3 py-2 text-sm text-white/90"
            defaultValue="home"
            onChange={(e) => {
              const id = e.target.value
              document
                .getElementById(id)
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <option value="home">Home</option>
            <option value="gallery">Gallery</option>
            <option value="about">About</option>
          </select>
        </div>
      </nav>
    </header>
  )
}


export default Navbar