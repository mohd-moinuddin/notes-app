const event = {

    name:'Birthday Party',

    guestList : ['Andres','Johny Depp','Duzytan'],

    printname(){
      console.log('Guest list for  ' + this.name);

      this.guestList.forEach((guest)=>{

        console.log(guest + ' is attending ' +this.name); 
      })
    }
}

event.printname()