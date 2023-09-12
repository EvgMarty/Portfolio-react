import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayouts';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Scills from './pages/Scills/Scills';
import Contacts from './pages/Contacts/Contacts';
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="skills" element={<Scills />} />
              <Route path="contacts" element={<Contacts />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
