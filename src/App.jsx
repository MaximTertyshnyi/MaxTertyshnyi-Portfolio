import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Nvigation } from './pages/Nvigation';
import { Music } from './pages/Musicpage';



function App() {
  return(
    <Routes>
    <Route path="/" element={<Nvigation/>}>
      <Route index element={<Homepage />} />
      <Route path="music" element={<Music />}></Route>
      {/* <Route path="about" element={<About />}></Route>
      <Route path="contacts" element={<p>Our contact</p>} />
            <Route path="team" element={<p>Our team</p>} /> */}
      </Route>
    </Routes>
  );
}

export default App;