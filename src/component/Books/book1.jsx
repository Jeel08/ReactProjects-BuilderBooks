/* eslint-disable react/jsx-pascal-case */
import Author from "../author";
import Table_Of_Content from "../table_content";
import Book_Deatlis from "../bookDetalis";
import Imgcard from "../imgCard";
import Header_Content from "../headerContent";
import {auther_info} from '../commonArray.jsx'
import {auth} from '../commonArray.jsx'
import { bookArray } from '../commonArray.jsx'
import { Page1 } from '../commonArray.jsx'

const Book1 = () => {

    const headerDetalis = [
        {
            title:"Book 1: Builder Book",
            text1:"Learn how to build a full-stack, production-ready JavaScript web application from scratch.",
            text2:"Unlike online tutorials, which can be outdated, disjointed, and frustrating to fit together,",
            text3:"our book gives you a structured, up-to-date guide on building a complete web app from start to finish.",
            btninfo:"Preview & buy book for $49"
        }
    ]

    return (
        <>
        <div>
        <Header_Content headerDetalis={headerDetalis}/>

        <Imgcard imgarray={Page1}/>

        <Book_Deatlis bookArray={bookArray} />

        <Table_Of_Content/>

        <Author auther_info={auther_info} authers={auth}/>
        
        </div>
        </>
    )
}
export default Book1;