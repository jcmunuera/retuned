// src/components/Events.tsx
//export default function Section3() {
//  return (
//    <section
//      id="section3"
//      className="min-h-screen flex items-center justify-center bg-cover bg-center"
//      style={{ backgroundImage: "url('/images/Events.jpg')" }}
//    >
//      <h2 className="text-3xl text-white font-bold">Hello World - Section 3</h2>
//    </section>
//  );
//}

'use client';

export default function Events() {
  return (
    <section
      id="section3"
      className="min-h-screen flex items-center justify-center bg-cover bg-center m-0 p-0 relative"
      style={{ backgroundImage: "url('/images/Events.jpg')" }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70 backdrop-blur-md"></div>
      <div className="relative z-10 text-center text-white max-w-2xl p-4">
        <h2
          className="font-bold tracking-wider mb-2 drop-shadow-lg"
          style={{
            fontFamily: 'Carbon Block',
            fontSize: 'clamp(1.5rem, 8vw, 4rem)',
          }}
        >
          Tour
        </h2>
        <p className="text-lg">
          Próximas fechas y lugares donde RETuned hará vibrar el escenario:
        </p>
        <ul className="mt-4 space-y-2">
          <li>12 May 2025 - Madrid, Sala Riviera</li>
          <li>15 May 2025 - Barcelona, Razzmatazz</li>
          <li>20 May 2025 - Valencia, Sala Moon</li>
        </ul>
      </div>
    </section>
  );
}
