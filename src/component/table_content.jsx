const Table_Of_Content = () => {
    return (
        <section>
            <>
            <p style={{fontSize:"3rem",textAlign:"center"}}>Table of Contents</p>
            <p className="btnStyle brdrRadius">Preview & buy book for $49</p>
            {/* <div>
                {
                    TableArray.map((ar) => {
                        return (
                            <>
                                <p>{ar.title}</p>
                                {ar?.infos.map((sub_ar)=> {
                                    return (
                                        <div>
                                            <ul>{sub_ar.info}</ul>
                                        </div>
                                    )
                                })}
                            </>
                        )
                    })
                }
            </div> */}
            </>
        </section>
    )
}
export default Table_Of_Content;