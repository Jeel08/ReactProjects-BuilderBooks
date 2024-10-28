import './App.css';
import Navbar from './component/navbar';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Book1 from './component/Books/book1';
import Book2 from './component/Books/book2';
import Book3 from './component/Books/book3';
import Review from './component/Books/review';
import Login from './component/login';
import Singup from './component/singup';
import './component/Books/style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/footer.jsx';

function App() {
  return (
   <>
   <Navbar />

   <div className='row' style={{paddingInline:"5rem",backgroundColor:"#0d1117",color:"white",height:"100%"}}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Book1/>} />
      <Route path="/book2" element={<Book2/>} />
      <Route path="/book3" element={<Book3/>} />
      <Route path="/review" element={<Review/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/singup" element={<Singup/>} />
    </Routes>
    </BrowserRouter>
    </div>

    <Footer />
   </>
  );
}

export default App;
