import Navbar from './Navbar';
import Home from './Home';
import Create from "./Create";
import BlogDetails from "./BlogDetails"
import NotFound  from "./NotFound";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true  }}>
      <div className="App">
        <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />}/>
              <Route path="/blogs/:id" element={<BlogDetails />} />
              <Route path='/blogs/:*' element={<NotFound />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
      </div>
    </Router>

  );
}

export default App;
