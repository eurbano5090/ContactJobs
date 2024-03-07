import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contac',
  templateUrl: './contac.component.html',
 
})

export class ContacComponent implements OnInit{
  public contacts: any[]=[];

   @Output()
   contactSelected = new EventEmitter<string>();

   constructor(private contactService:ContactsService){}

   ngOnInit(): void {
       this.contactService.getContacts().subscribe(datos=>{
        console.log(datos);
        if(datos.contactList){
          this.contacts=datos.contactList;
          console.log(this.contacts)
          
        }
        
       })
   }
   
   onClick(contact :string){
    this.contactSelected.emit(contact)
   }

}
