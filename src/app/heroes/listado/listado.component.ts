import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroeDel: string = "";
  heroes: string[] = ['Spiderman', 'Iroman', 'Thor', 'Hulk', 'Ant-man'];


  borrarHeroe(): string {
    const heroeBorrado = this.heroes.pop() || '';
    this.heroeDel = heroeBorrado;
    return this.heroeDel;
  }
}
