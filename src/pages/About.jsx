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
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <br />
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </article>
      </section>
    </main>
  );
}

export default About;
