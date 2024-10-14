import YtVideos from "../../component/course/courseDetailPage/ytVideos"
import Footer from "../../component/footer"
import Decription from '../../component/shop/productDetail/decription';
import CourseIntro from '../../component/course/courseDetailPage/courseIntro'
import MoreProduct from '../../component/shop/productDetail/moreProduct';
const CoursesProductDetail = () => {
  return (
    <div>
        <CourseIntro/>
        <Decription/>
        <MoreProduct/>
        <YtVideos/>
        <Footer/>
    </div>
  )
}

export default CoursesProductDetail;