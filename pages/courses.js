import { Modal } from "@components/common";
import { CourseCurriculum, CourseHero, CourseKeypoints } from "@components/course";
import { BaseLayout } from "@components/layout";




export default function Course() {
//layout component which basically would be a wrapper for specific pages

  return (
    <BaseLayout>
    <div className="py-5">
      {/*------ HERO STARTS ------*/}
      <CourseHero/>
    </div>
      {/*------ KEYPOINT STARTS ------*/}
      <CourseKeypoints/>

      {/*------ LECTURES STARTS ------*/}
      <CourseCurriculum/>
      {/* MODAL STARTS */}
      <Modal/>
      {/* MODAL ENDS */}
    </BaseLayout>
    
  )
}