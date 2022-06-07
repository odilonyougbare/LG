import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-livre',
  templateUrl: './liste-livre.component.html',
  styleUrls: ['./liste-livre.component.css']
})
export class ListeLivreComponent implements OnInit {
  titre="La liste des livres";
  livre =[];
  getDescription()
  {
    return this.titre;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
