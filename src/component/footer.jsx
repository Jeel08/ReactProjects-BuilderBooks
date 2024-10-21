const Footer = () => {
    if((window.location.pathname === "/login" ) ||( window.location.pathname === "/singup")) 
        return "";
    else
        return (
            <footer>
            <div className="row footer_Style">
                <div className="col-6">
                    <p>© 2018 - 2024 Builder Book</p>
                </div>
                <div className="col-6">
                    <p>Terms</p>
                </div>
            </div>
        </footer>
        )
}
export default Footer;