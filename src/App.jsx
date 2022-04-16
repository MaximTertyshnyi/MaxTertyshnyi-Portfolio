import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Nvigation } from './pages/Nvigation';
import { Music } from './pages/Musicpage';
import { ITprofile } from './pages/ITpage';
import { Aboutpage } from './pages/Aboutpage';




function App() {
  return(
    <Routes>
    <Route path="/" element={<Nvigation/>}>
      <Route index element={<Homepage />} />
      <Route path="music" element={<Music />}></Route>
      <Route path="it-profile" element={<ITprofile />}></Route>
      <Route path="about" element={<Aboutpage />}></Route>
      {/* <Route path="about" element={<About />}></Route>
      <Route path="contacts" element={<p>Our contact</p>} />
            <Route path="team" element={<p>Our team</p>} /> */}
      </Route>
    </Routes>
  );
}

export default App;