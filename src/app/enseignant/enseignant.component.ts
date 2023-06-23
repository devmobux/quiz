import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  public listquestions : any[] = [];
  public question :string ="quelle langage utilise t-on pour le framework angular?";
  public reponseEns:string = "javascript";
  public cali:string ="";
  public verification(reponse:string){
    if(this.reponseEns === reponse){
      this.cali ="felicitation!"; 
    }else{
      this.cali ="mauvaise reponse";
    }
  }
  public ngOnInit():void{
  this.listquestions =[{
     question1 : "quelles sont les langages de programmation pour le backend?",
     question2: "quelle langage utilise t-on pour le framework angular?",
     question3 :"quel est le langage le plus utiliser ?"
}
   
  ]
  }

}
