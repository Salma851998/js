const argv=require("argv")
const yargs=require("yargs")
const students=require("./student")
/////////////////////add student///////////////////////
yargs.command({
    command:"add",
    describe:"add-student",
    handler:(x)=>{
        students.addStudent(x.name,x.id,x.degrees,x.comment)
    },
    builder:{
        name:{
            describe:"name of the student",
            type:'String',
            demandOption:true},
        id:{
            describe:"id of the student",
            type:'number',
            demandOption:true
        },
        degrees:{
            describe:"degrees of the student",
            type:'array',
            demandOption:true
        },
        comment:
        {
            describe:"comments of the degrees of the student",
            type:'String'
        }
    }
})
////////////////////////////remove student///////////////////////////////
yargs.command({
    command:"delete",
    describe:"remove student using his id",
    handler:(x)=>
    {
        students.removeStudent(x.id)
    },
    builder:{
    id:{
        describe:"the id of the student who is being removed",
        type:'number'
    }
}
})

yargs.command({
    command:"read",
    describe:"read student using his id",
    handler:(x)=>
    {
        students.readStudent(x.id)
    },
    builder:{
    id:{
        describe:"the id of the student who is being red",
        type:'number'
    }
}
})
yargs.command({
    command:"list",
    describe:"list all students",
    handler:()=>
    {
        students.listStudents()
    }

})
console.log(yargs.argv)