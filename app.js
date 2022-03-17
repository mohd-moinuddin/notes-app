const { string } = require('yargs');
const yargs = require('yargs');
const { listNotes, readNote } = require('./notes');
const notes = require('./notes');

//add , remove , delete , list

//create add command

  yargs.command({
      command : 'add',
      describe:'Add a new note',
      builder :{

        title:{
            describe:'Note title',
            demandOption:true,
            type: 'string'
        },
        text:{
            describe:'Note text',
            demandOption:true,
            type: 'string'
        }
      },
      handler : (argv)=>{
          notes.addNote(argv.title,argv.text);
      }
  })
  

//Create remove command
  yargs.command({
      command:'remove',
      describe:'remove a note',
      
      builder :{
          title:{
              describe:'note title',
              demandOption :true,
              type:'string'
          }
      },
      handler : (argv)=>{
         notes.removeNote(argv.title)
      }
  })

//Create list command  
  yargs.command({
    command:'list',
    describe:'list all notes',

    handler : ()=>{
        listNotes();
    }
})

//Create read command
yargs.command({
    command:'read',
    describe:'read a note',
    
    builder:{
        title :{
            describe:'note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})

console.log(yargs.argv)