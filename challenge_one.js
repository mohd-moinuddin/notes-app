 
 const tasks={
     tasks:[{
        text:'Grocerry shopping',
        completed:true
     },{
        text:'Clean yard',
        completed:false
     },{
        text:'File course',
        completed:false
     }],

     getTaskToDo(){
           return this.tasks.filter((task)=> task.completed===true)
     }
 }

 console.log(tasks.getTaskToDo());