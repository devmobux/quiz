import { Component, OnInit } from '@angular/core';
import { Iformul } from './formul'; 


@Component({
    selector :'app-formul',
    templateUrl : './formul.component.html',
    styleUrls : ['./formul.component.css']
})

export class formulComponent implements OnInit {
    public title = "mon entreprise";
    public familles :Iformul[] = [
        { tittle : 'les poules de races',
          imgurl : 'assets/poule.jpg',
          description :'etudiante en cybersecurite et developpement' 
        },
        {
            tittle : 'sunrise',
          imgurl : 'assets/b13.jpg',
          description :'etudiante en cybersecurite et developpement' 
        },
        {
            tittle : 'le paysage',
          imgurl : 'assets/b14.jpg',
          description :'etudiante en cybersecurite et developpement' 
        },
        {
          tittle : 'les feuilles vollant',
        imgurl : 'assets/b13.jpg',
        description :'etudiante en cybersecurite et developpement' 
      }
       
    ];
    public showbadge: Boolean = false;
    public faireafficher():void{
        this.showbadge = !this.showbadge;
    }
    private _chercher = "";
    public filtrerfamille :Iformul[] = [];
    ngOnInit(): void {
      this.filtrerfamille = this.familles;
    }
   
     public get chercher():string{
      return this._chercher;
    }
      public set chercher(nouveau : string){
      this._chercher = nouveau;
      this.filtrerfamille = this.chercher? this.filtrernom(this.chercher):this.familles;
    }
    private filtrernom(critere : string) : Iformul[] {
      critere = critere.toLocaleLowerCase();
      const reponse = this.familles.filter(
        (famille :Iformul)=>famille.tittle.toLocaleLowerCase().indexOf(critere) !== -1
      )
      return reponse;
    }




     
}
