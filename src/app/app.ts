import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Personne } from './model/personne';
import { PersonneService } from './services/personne-service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
    listePersonnes: Personne[] = [];

    constructor(private personneService: PersonneService) {
      // On récupère les données via le service 
        this.listePersonnes = this.personneService.getAllPersonnes();
    }

}