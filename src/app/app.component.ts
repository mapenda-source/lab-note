import { Component } from '@angular/core';

import { noteService } from './note.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private  NoteService: noteService){}
  getTous():any[]{
  return this.NoteService.getEtudiants()
  }

  getAband():any[]{
    return this.NoteService.getEtudiantAbandon()
  }
 
  titleDefault = "lab noté 2f";
  title = this.titleDefault;
  afficheliste: boolean = true;

  reset(){
  this.title=this.titleDefault;
  this.afficheliste=true;
  }
  abandon(){
    this.title="Ont abandonné le cours";
    this.afficheliste=false;
  }
  
}
