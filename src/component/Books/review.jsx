/* eslint-disable react/jsx-pascal-case */
import { Page3 } from "../Common Component/commonArray";
import Header_Content from "../headerContent";
import Imgcard from "../imgCard";

const Review = () => {

    const headerDetalis = [
        {
            title:"Here's what people say about our books:Builder Book and SaaS Boilerplate.",
            text1:"With the help of our readers, we've solved over 500 issues and made over 1000 improvements/updates (commits) to both of our books (builderbook and saas).",
            btninfo:"Preview & buy book for $49"
        }
    ]

    return (
        <>
        <div>
        <Header_Content headerDetalis={headerDetalis}/>
        <Imgcard imgarray={Page3}/>
        </div>
        </>
    )
}
export default Review;