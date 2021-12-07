import courses from "./index.json"

export const getAllCourses = () => {
    return {
        //array
        data:courses,
        //accumulator,data,index
        //first iteration i=0 
        //assigning reduce function to courseMap for getting object  by the id
        courseMap : courses.reduce((a,c,i) =>{
            //object creation
            a[c.id]= c
            a[c.id].index= i
            return a
        },{}//starting value
        //from array will create object
        //much easier to look in map than in array 
        )
    }
}