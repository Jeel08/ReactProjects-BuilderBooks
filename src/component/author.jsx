const Author = ({auther_info,authers}) => {
    return (
        <section>
        <div>
          <p style={{fontSize:"3rem",textAlign:"center"}}>Authors</p>
          <p style={{textAlign:"center"}}>Full Stack team</p>
        </div>

        <div style={{display:"flex",justifyContent:"center",gap:"10rem"}}>
            {authers.map((ar)=>{
                return (
                    <div>
                        <img src={ar.img} alt="img" style={ar.className}/>
                        <p style={{textAlign:"center",color:"blue",marginTop:"10px"}}>{ar.name}</p>
                    </div>
                )
            })}
        </div>

        <div style={{paddingLeft:"10rem"}}>
                <p>we:</p>
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
    </section>
    )
    
}
export default Author;