const fs = require('fs');

const getNotes = function(){

}

const listNotes = ()=>{
    const notes = loadnotes();

    console.log("Your notes");

    notes.forEach((notes) => {
        console.log(notes.title);
    });


}
const addNote = (title, text)=>{
   const notes = loadnotes()
   
//    const duplicateNotes = notes.filter(function (note){
//          return note.title===title
//    })

   const duplicateNotes = notes.find((notes)=>  notes.title===title  )
   
   debugger 
   
   if(!duplicateNotes){  
  
        notes.push({
        title:title,
        text:text
    }) 
    savenotes(notes);
    console.log('new title added');

    }else{
        console.log('title already taken');
    }

}

const savenotes = (notes)=>{
    
    const notesData =JSON.stringify(notes);

    fs.writeFileSync('notes.json',notesData);
}
const loadnotes = ()=>{
    
    try{
        const dataBuffer = fs.readFileSync('notes.json');

        const datajson = dataBuffer.toString()
    
        return JSON.parse(datajson)

    }catch(e){
        return []
    }
}

const removeNote = (title)=>{
   const notes = loadnotes()

//    const notesToKeep = notes.filter(function(note){
//        return note.title !== title
//    })

    const notesToKeep = notes.filter((note)=> note.title !== title);
   
   if(notes.length > notesToKeep.length ){
       console.log('notes removed');
       savenotes(notesToKeep);
   }else{
       console.log('no notes found');
   }
 
}


const readNote = (title) =>{
   const notes = loadnotes();

   const note = notes.find((note) => note.title ===title);

   if(note){
       console.log(note.title);
       console.log(note.text);
   }else{
       console.log('notes not found');
   }
}

module.exports={
    title:getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNotes:listNotes,
    readNote:readNote
}