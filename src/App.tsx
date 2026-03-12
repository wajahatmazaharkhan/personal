import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Engagement } from './pages/Engagement';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-screen">
        <Header />
        <main className="flex-grow w-full pt-24 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/engagement" element={<Engagement />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
