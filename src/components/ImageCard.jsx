 function ImageCard({ imageUrl, title, description }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      </div>

      <div className="space-y-1 p-4">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-white/70">{description}</p>
      </div>
    </article>
  );
}

export default ImageCard