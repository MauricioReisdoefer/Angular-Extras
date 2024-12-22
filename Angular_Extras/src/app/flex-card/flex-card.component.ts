import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-flex-card',
  templateUrl: './flex-card.component.html',
  imports : [ CommonModule, NgClass ],
  styleUrls: ['./flex-card.component.scss']
})
export class FlexCardComponent {
  @Input() CardTitle: string = 'Card Title';
  @Input() CardText: string = 'Esse texto é um placeholder. Utilize as propriedades [CardText] e [CardTitle] para alterar o texto do cartão. A propriedade [CardTheme] é um booleano que, caso verdadeiro torna o tema para escuro e caso falso torna o tema claro. O botão por padrão vai alterar o tema do Card. Para alterar a função apenas referencie o nome da função passada na propriedada [CardFunction].';

  @Input() CardTheme: boolean = true;
  @Input() CardButton: string = "Click!";

  toggleTheme() {
    this.CardTheme = !this.CardTheme;
  }

  @Input() CardFunction: Function = this.toggleTheme;
    
}
