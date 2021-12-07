import { Modal } from "@components/common";
import { CourseCurriculum, CourseHero, CourseKeypoints } from "@components/course";
import { BaseLayout } from "@components/layout";

import { getAllCourses } from "content/courses/fetcher"




export default function Course({course}) {
//layout component which basically would be a wrapper for specific pages

  return (
    <BaseLayout>
    
    <div className="py-5">
      {/*------ HERO STARTS ------*/}
      <CourseHero title={course.title}
      description={course.description}
      image={course.coverImage} />
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

export function getStaticPaths() {


    const { data } = getAllCourses()
  

    //turning array of objects to array of parameters
    return {
      paths: data.map(c => ({
          //cretion of object of params
        params: {
          slug: c.slug
        }
      })),
      fallback: false
    }
  }

  export function getStaticProps({params}){
    
    const { data } = getAllCourses()
    //iterrating through course
    //will return course as an array
    //iterrate until param slug matches a course slag
    const course =data.filter(c => c.slug === params.slug)[0]
    return{
      props : {
        course
      }
    }
  }