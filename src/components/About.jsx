 function About() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-12"
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">About</h2>
        <p className="text-sm leading-relaxed text-white/70 sm:text-base">
          This is a reusable, data-driven image gallery built with React and Tailwind.
          Images are stored in an array of objects and rendered dynamically using
          <span className="mx-1 font-semibold text-white">map()</span>.
        </p>
        <p className="text-sm leading-relaxed text-white/70 sm:text-base">
          Add a new image object to the gallery data array and the UI updates automatically
          without changing the JSX structure.
        </p>
      </div>
    </section>
  );
}

export default About