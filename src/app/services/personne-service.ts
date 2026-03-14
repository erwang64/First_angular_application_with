import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root' // Généré automatiquement pour rendre le service global [cite: 759, 761]
})
export class PersonneService {
  // Notre liste est privée pour que seul le service puisse la manipuler directement
  private listePersonnes: Personne[] = [
    new Personne("Erwan", "Bayonne"),
    new Personne("Marie", "Cholet"),
    new Personne("Mathias", "Pau")
  ];

  // READ : Récupérer toute la liste [cite: 780]
  getAllPersonnes(): Personne[] {
    return this.listePersonnes;
  }

  // CREATE : Ajouter une nouvelle personne 
  createPersonne(nouvelle: Personne): void {
    this.listePersonnes.push(nouvelle);
  }

  // DELETE : Supprimer une personne 
  deletePersonne(personneASupprimer: Personne): void {
    this.listePersonnes = this.listePersonnes.filter(p => p !== personneASupprimer);
  }

  // UPDATE : Mettre à jour (on verra l'ID plus tard pour plus de précision) 
  updatePersonne(ancienne: Personne, nouvelle: Personne): void {
    const index = this.listePersonnes.indexOf(ancienne);
    if (index !== -1) {
      this.listePersonnes[index] = nouvelle;
    }
  }
}