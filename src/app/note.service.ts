import { Injectable } from '@angular/core' ;
import {progweb} from '../assets/data/notes.json' ;

@Injectable( {
providedIn : 'root'
})
export class noteService {
private etudiants : any []= progweb ;

getEtudiants(): any [] {
return this.etudiants ;
}

getEtudiantAbandon() : any [] {
let returnval : any []=[] ;
let i : number = 0 ;
for ( let etud of this.etudiants ) {
if(etud.insc=='XX') {
returnval[i]=etud ;
i = i + 1;                                       
}
}
return (returnval) ;
}


ngOnInit() : void {
console.log ("service marche");
console.log (this.etudiants);
}
}