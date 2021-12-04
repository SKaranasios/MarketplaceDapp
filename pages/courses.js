import { Modal } from "@components/common";
import { CourseCurriculum, CourseHero, CourseKeypoints } from "@components/course";




export default function Course() {


  return (
    <div className="relative max-w-7xl mx-auto px-4">
      {/*------ HERO STARTS ------*/}
      <CourseHero/>
      {/*------ KEYPOINT STARTS ------*/}
      <CourseKeypoints/>

      {/*------ LECTURES STARTS ------*/}
      <CourseCurriculum/>
      {/* MODAL STARTS */}
      <Modal/>
      {/* MODAL ENDS */}
    </div>
  )
}