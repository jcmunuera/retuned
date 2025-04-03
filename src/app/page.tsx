// src/app/page.tsx
import Home from '../components/Home';
import Band from '../components/Band';
import Events from '../components/Events';
import FanClub from '../components/Fanclub';


export default function Start() {
  return (
    <>
      <Home />
      <Band />
      <Events />
      <FanClub />
    </>
  );
}