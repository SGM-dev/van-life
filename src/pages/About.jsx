function About() {
  return (
    <main className="flex-grow bg-orange-50 ">
      <img
        src="src/assets/tent-on-van.png"
        alt="Man sitting on the roof of a van"
      />
      <section className="px-7 py-12 font-inter">
        <h1 className="text-3xl font-bold text-black-910">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <article className="mt-8 text-base font-medium">
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch.
            <br /> (Hitch costs extra 😉)
          </p>
          <br />
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </article>
        <section className="mt-14 rounded bg-orange-120 px-8 py-9 font-inter">
          <h2 className="self-center text-2xl font-bold">
            Your destination is waiting.
            <br /> Your van is ready.
          </h2>
          <button className="mt-6 rounded-lg bg-black-910 px-6 py-2 text-base font-bold text-white">
            Explore our vans
          </button>
        </section>
      </section>
    </main>
  );
}

export default About;
