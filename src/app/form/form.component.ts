import { Component, OnInit } from '@angular/core';
import { WolfsoundService } from './../wolfsound.service';
import { Router }            from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { Wolf} from './../wolf';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  wolfs: Wolf[] = [];
  active = true;
  wolf = new Wolf();
  submitted = false;

  constructor(
    private router: Router,
    private wolfService: WolfsoundService) {
  }
  onSubmit() { this.submitted = true; }

  ngOnInit() {

  	
  }

    savewolf(wolf: Wolf) : void {
    let commentOperation:Observable<Wolf[]>;
    this.wolfService.addWolf(this.wolf).subscribe(
      
      );
    let link = ['/list'];
    this.router.navigate(link);

  }

}
