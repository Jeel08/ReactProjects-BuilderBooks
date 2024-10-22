/* eslint-disable array-callback-return */
import { TableArray } from "./Common Component/commonArray"

const Table_Of_Content = () => {
    const arr1 = TableArray.slice(0,3)
    const arr2 = TableArray.slice(3,6)
    return (
        <section>
            <>
            <div className="mb-Style">

                <div style={{marginBottom:"3rem"}}>
                    <p style={{fontSize:"3rem",textAlign:"center"}}>Table of Contents</p>
                    <p className="btnStyle brdrRadius">Preview & buy book for $49</p>
                </div>

                <div className="main_table_Style">
                    {
                        <>

                        <div>
                            {
                                arr1.map((ar) => {
                                    return (
                                        <>
                                        <div className="table_content_Style brdrRadius">
                                            <p style={{color:"#58a6ff"}}>{ar.title}</p>
                                            {ar?.infos.map((sub_ar)=> {
                                                return (
                                                    <div style={{display:"flex"}}>
                                                        <div>
                                                            <ul><li>{sub_ar.info} </li>
                                                            {
                                                                sub_ar?.subinfo?.map((arrr)=>{
                                                                    return (
                                                                    <div style={{marginLeft:"4rem"}}>
                                                                            <li>{arrr.sub}</li>
                                                                    </div>
                                                                    )
                                                                })
                                                            }
                                                            </ul>
                                                        </div>
            
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        </>
                                    )
                                })
                            }
                        </div>

                        <div>
                            {
                                arr2.map((ar) => {
                                    return (
                                        <>
                                        <div className="table_content_Style brdrRadius">
                                            <p style={{color:"#58a6ff"}}>{ar.title}</p>
                                            {ar?.infos.map((sub_ar)=> {
                                                return (
                                                    <div style={{display:"flex"}}>
                                                        <div>
                                                            <ul><li>{sub_ar.info} </li>
                                                            {
                                                                sub_ar?.subinfo?.map((arrr)=>{
                                                                    return (
                                                                    <div style={{marginLeft:"4rem"}}>
                                                                            <li>{arrr.sub}</li>
                                                                    </div>
                                                                    )
                                                                })
                                                            }
                                                            </ul>
                                                        </div>
            
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        </>
                    }
                </div>

            </div>
            </>
        </section>
    )
}
export default Table_Of_Content;