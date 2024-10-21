import './Books/style.css';
const Header_Content = ({headerDetalis}) => {
    return (
        <section>
            {
                headerDetalis.map((ar)=> {
                    return (
                        <>
                        <div style={{fontSize:"1rem",textAlign:"center"}}>
                        <p style={{fontSize:"3rem",textAlign:"center"}}>{ar.title}</p>
                        <p>{ar.text1}</p>
                        <p>{ar.text2}</p>
                        <p>{ar.text3}</p>
                        <p className="btnStyle brdrRadius">{ar.btninfo}</p>
                        </div>
                        </>
                    )
                })
            }
        </section>
    )
}
export default Header_Content;