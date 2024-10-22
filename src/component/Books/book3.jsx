/* eslint-disable react/jsx-pascal-case */
import Author from "../author";
import Book_Deatlis from "../bookDetalis";
import { Page2 } from "../Common Component/commonArray";
import { auther_info } from "../Common Component/commonArray";
import { auth } from "../Common Component/commonArray";
import Header_Content from "../headerContent";
import Imgcard from "../imgCard";
import Table_Of_Content from "../table_content";

const Book3 = () => {

    const headerDetalis = [
        {
            title:"Book 3: Browser Extension",
            text1:"Learn how to structure and build Manifest v3, production-ready, chrome browser extension with LLM features.",
            text2:"Structuring, testing and building your first browser can be confusing and outright hard.",
            text3:"Our detailed book explains on how to organize project, code and prepare your browser extension for submission to the Chrome store.",
            btninfo:"Preview & buy book for $49"
        }
    ]

    const bookArray = [
        {title:"Robust stack, production-tested tools",info:"You will build a browser extension project and a standalone server project that communicate with each other. You will learn to use popular tools like react, axios, cheerio, typescript, openai, stripe and more."},
        {title:"Important business features and third-party APIs",info:"You will learn and implement a user authentication system with jsonwebtoken and bcrypt; LLM feature with openai and textract; and paid subscriptions with stripe."},
        {title:"Public support",info:"If you have questions, search our issues Github issues or create a new one. We are happy to answer beginner to expert-level questions. If you purchased our book, we typically reply within 1 or 2 days."},
        {title:"Public support",info:"If you have questions, search our closed Github issues or create a new one. We are happy to answer beginner to expert-level questions. With the help of our readers, we've made many improvements to our book. If you purchased our book, we typically reply within 1 or 2 days."}
    ]
    

    return (
        <>
         <div>

            <Header_Content headerDetalis={headerDetalis}/>

            <Imgcard imgarray={Page2}/>

            <Book_Deatlis bookArray={bookArray}/>

            <Table_Of_Content/>

            <Author auther_info={auther_info} authers={auth}/>
            
         </div>
        
        </>
    )
}
export default Book3;