const Imgcard = ({imgarray}) => {
    
    const style = {display:"flex",justifyContent:"center",gap:"1rem"}
    if(window.location.pathname === "/review")
        style.display = "none";

    return (
        <section>
            <div className="mb-Style">

            <div className="main_div_Style">
            {
                imgarray.map((ar)=>{
                    return (
                        <div className="imgCard_Style brdrRadius">
                            <div>
                                <div className="img_p_Style">
                                    <img  src={ar.image} alt="" className='imgStyle'/>
                                    <span>{ar.name}</span>
                                </div>
                                <div>
                                    <p style={{wordBreak:"break-word"}}>{ar.info}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            
            <div style={style}>
                <p className="text_btn_Style brdrRadius">See All Review</p>
                <p className="text_btn_Style brdrRadius">About Us</p>
            </div>
            </div>


        </section>
    )
}
export default Imgcard;