import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {

  constructor() { }

  contactSelectedSend:string='';
  ngOnInit(): void {
    
  }

  getContactsById(contact:string){
    this.contactSelectedSend=contact;
    
  }

}
