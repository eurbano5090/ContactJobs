import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {

  @Input() contactSelected: string='';
  public contacts: any[]=[];

  constructor(private contactService: ContactsService) {}

  ngOnChanges(changes:SimpleChanges){
    this.getData(this.contactSelected);
  }

  ngOnInit(): void {
    this.getData(this.contactSelected)
  }

  getData(id: string) {
    if(id){ this.contactService.getContactById(id).subscribe(data=>{
      this.contacts = [];
      if (Object.keys(data).length > 0) {
        this.contacts = data.contacts;
      }
    });}
   
  }

  onRowClick(contac: any) {
    console.log('Contact seleccionado:', contac);
}
}