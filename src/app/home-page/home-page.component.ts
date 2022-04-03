import { Component, OnInit, Input } from '@angular/core';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private formService: FormServiceService 
  ) { }

  ngOnInit(): void {
  }
  userData = this.formService.getForm()
  isFormFilled = this.formService.getIsFormFilled()
  

}
