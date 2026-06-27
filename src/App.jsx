import GalleryGrid from './components/GalleryGrid'

const images = [

  {
    imageUrl:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    title: 'Mountain Aurora',

    description: 'A calm night sky with dancing lights.'
  },

  {
    imageUrl:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    title: 'Forest Path',

    description: 'Walk into the green and breathe easy.'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    title: 'Ocean Waves',
    description: 'Powerful tides and endless horizons.'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    title: 'City Lights',
    description: 'Neon glow over a vibrant skyline.'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    title: 'Desert Dunes',
    description: 'Golden curves shaped by wind.'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    title: 'Sunset Gradient',
    description: 'Warm colors fading into twilight.'
  }
  
]

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-10">
      <header className="mx-auto mb-8 max-w-6xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Image Gallery
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
          Add an object to the array and the UI updates automatically.
        </p>
      </header>

      <main className="mx-auto max-w-6xl">
        <GalleryGrid images={images} />
      </main>

    </div>
  )
}

export default App

