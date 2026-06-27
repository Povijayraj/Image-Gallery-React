import  Fragment  from 'react'
import ImageCard from './ImageCard'

 function GalleryGrid({ images }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((img) => (
          <ImageCard
            key={img.imageUrl}
            imageUrl={img.imageUrl}
            title={img.title}
            description={img.description}
          />
        ))}
      </div>
    </>
  )
}

export default GalleryGrid