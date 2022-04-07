const fs=require("fs")
//////////////////////////////////logic of add student//////////////////////////////////
const addStudent=(name,id,degrees,message)=>
{
    const students=loadStudents()
    console.log(students)
    const duplicateId=students.find((student)=>
    {
        return student.id===id
    })
    if(!duplicateId)
    {
         var sum= function sum()
            {
                var sum=0
                for(var i=0;i<degrees.length;i++)
               sum+=degrees[i]
                return sum
            }
           var totalDegrees=sum()
        students.push(
            {
            name,
            id,
            degrees,
            message,
            totalDegrees
        })
        saveStudents(students)
    }
    else
    {
        console.log("the id is already exist")
    }
}
////////////////////////////////////////logic of remove student////////////////////////////////////
const removeStudent=(id)=>
{
    const students=loadStudents()
    const newStudents=students.filter((student)=>{
        return student.id!==id
    })
    saveStudents(newStudents)
}

///////////////////////////////////logic of read student///////////////////////////

const readStudent=(id)=>
{
    const students=loadStudents()
    const studentData=students.find((student)=>
    {return  student.id===id})
    if(studentData)
    console.log(studentData)
}
/////////////////////////////////logic of list students////////////////////
const listStudents=()=>
{
    const students=loadStudents()
   students.forEach(element => {
       console.log(element.name,element.totalDegrees)
   });
}

const loadStudents=()=>
{
    try{
    const dataBuffer=fs.readFileSync("students.json").toString()
     return JSON.parse(dataBuffer)
    }
    catch(e)
    {
        return []
    }
}
const saveStudents=(students)=>{
    const saveStudent=JSON.stringify(students)
    fs.writeFileSync("students.json",saveStudent)
}

module.exports={
    addStudent,
    removeStudent,
    readStudent,
    listStudents
}