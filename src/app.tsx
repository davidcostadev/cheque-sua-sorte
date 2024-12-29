import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import MyNumbers from './pages/my-numbers';

function App() {
  return (
    <HashRouter>
      <div className="h-screen">
        <div className="max-w-2xl p-5 mx-auto">
          <header className="flex justify-between items-center py-5 border-b mb-5">
            <h1 className="text-4xl font-bold text-blue-500">
              Check sua sorte
            </h1>
            <nav className="space-x-4">
              <Link to="/" className="text-blue-500 underline">
                Home
              </Link>
              <Link to="/my-numbers" className="text-blue-500 underline">
                My Numbers
              </Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-numbers" element={<MyNumbers />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
