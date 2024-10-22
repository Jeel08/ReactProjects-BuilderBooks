const Book_Deatlis = ({bookArray}) => {
    return (
        <section>
            <div className="mb-Style">
                
                <p style={{fontSize:"3rem",textAlign:"center"}}>Why this book?</p>
                <div className="row" style={{marginTop:"3rem"}}>
                    {
                        bookArray.map((ar)=> {
                            return (
                                <>
                                    <div className="col-6" style={{marginBottom:"1rem"}}>
                                        <h5>{ar.title}</h5>
                                        <p>{ar.info}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </section>
    )
}
export default Book_Deatlis;