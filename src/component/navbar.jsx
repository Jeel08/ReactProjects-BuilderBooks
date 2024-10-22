import './Books/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>
<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>
<script>var Alert = ReactBootstrap.Alert;</script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
</>

const Navbar = () => {
    return (
        <>
        <nav>
            <div className='row main'>
            <div className='col-2' style={{marginTop: "2rem"}}>
                <a href="/" className='anchorStyle paddingNavbar'>Book 1: Builder Book</a>
            </div>
            <div className='col-2' style={{marginTop: "2rem"}}>
                <a href="/book2" className='anchorStyle paddingNavbar'>Book 2: SaaS Boilerplate</a>
            </div>
            <div className='col-2' style={{marginTop: "2rem"}}>
                <a href="/book3" className='anchorStyle paddingNavbar'>Book 3: Browser extension</a>
            </div>
            <div className='col-2' style={{marginTop: "2rem"}}>
                <a href="/review" className='anchorStyle paddingNavbar'>Reviews</a>
            </div>
            <div className="col-2"></div>
            <div className='col-1' style={{marginTop: "2rem"}}>
                <a href="/login" className='anchorStyle paddingNavbar'>Login</a>
            </div>
            <div className='col-1' style={{marginTop: "2rem"}}>
                <a href="/singup" className='anchorStyle paddingNavbar'>Singup</a>
            </div>
            </div>
      </nav>
        </>
    )
}
export default Navbar