// src/components/Section1.tsx
'use client';

export default function Section1() {
  const commonProps = {
    id: 'section1',
    backgroundImage: "url('/images/Home.jpg')",
  };

  return (
    <section
      id={commonProps.id}
      className="min-h-screen flex items-center justify-center bg-cover bg-center m-0 p-0"
      style={{ backgroundImage: commonProps.backgroundImage }}
    >
      <div className="text-center text-white">
        <h1
          className="font-bold tracking-normal mb-0 drop-shadow-lg"
          style={{
            fontFamily: 'Alternate Gothic',
            fontSize: 'clamp(8rem, 16vw, 12rem)',
          }}
        >
          WELCOME
        </h1>
        <p
          className="tracking-wider drop-shadow-lg m-0"
          style={{
            fontFamily: 'BE Light Condensed',
            fontSize: 'clamp(3rem, 4vw, 6rem)',
          }}
        >
          Something new is coming
        </p>
      </div>
    </section>
  );
}