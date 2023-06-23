import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {

  public reponse :string = "";
  @Input()
  public questionEnseignant :string ='';
  @Output() reponsefinal = new EventEmitter<string>();
  public envoyerReponse(){
    this.reponsefinal.emit(this.reponse);
  }
}
