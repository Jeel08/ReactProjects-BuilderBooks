import Right from "../images/up-arrow-svgrepo-com.svg"
const Author = ({auther_info,authers}) => {
    return (
        <section>
        <div className="mb-Style">

            <div>
            <p style={{fontSize:"3rem",textAlign:"center"}}>Authors</p>
            <p style={{textAlign:"center"}}>
                <i>Full Stack team</i>
            </p>
            </div>

            <div style={{display:"flex",justifyContent:"center",gap:"10rem"}}>
                {authers.map((ar)=>{
                    return (
                        <div>
                            <img src={ar.img} alt="img" style={ar.className}/>
                            <p style={{textAlign:"center",color:"#58a6ff",marginTop:"10px"}}>{ar.name}</p>
                        </div>
                    )
                })}
            </div>

            <div style={{paddingLeft:"10rem"}}>
                    <p style={{fontSize:"2rem"}}>
                        <b>we:</b>
                    </p>
                    <div>
                        {auther_info.map((ar)=>{
                            return (
                                <>
                                    <ul><li>{ar.info}</li></ul>
                                </>
                            )
                        })}
                    </div>
            </div>

            <div>
                <a href="/">
                <img src={Right} alt="" className='up_arrow_Style' title="Go to Home"/>
                </a>
            </div>
            
        </div>
    </section>
    )
    
}
export default Author;