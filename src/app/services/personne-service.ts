import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';


@Injectable({
  providedIn: 'root', 
})
export class PersonneService {

  private listePersonnes : Personne[] = [

    new Personne("Erwan", "Bayonne"),
    new Personne("Jean", "Paris"),
    new Personne("Marie", "Lyon"),
    new Personne("Sophie", "Marseille"),
    new Personne("Luc", "Toulouse")

  ]

  // Méthode pour récupérer la liste des personnes
  getAllPersonnes() : Personne[] {
    return this.listePersonnes;
  }


}
