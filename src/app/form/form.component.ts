import { Component, OnInit } from '@angular/core';
import { WolfsoundService } from './../wolfsound.service';
import { Router }            from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { Wolf} from './../wolf';
import { FileUploader, FileUploadModule } from 'ng2-file-upload';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

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
  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

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

    public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

}
