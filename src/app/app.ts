import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Personne } from './model/personne';
import { PersonneService } from './services/personne-service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
    listePersonnes: Personne[] = [];

    constructor(private personneService: PersonneService) {
      // On récupère les données via le service 
        this.refreshList();
    }

    refreshList() {
        this.listePersonnes = this.personneService.getAllPersonnes();
    }

    DeletePersonne(personne: Personne) {
        this.personneService.deletePersonne(personne);
        this.refreshList();
    }

}