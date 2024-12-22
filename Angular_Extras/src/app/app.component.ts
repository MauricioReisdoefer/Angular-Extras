import { Component } from '@angular/core';
import { FlexCardModuleModule } from './flex-card-module/flex-card-module.module';
import { FlexCardComponent } from "./flex-card/flex-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FlexCardModuleModule, FlexCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularExtras';

  alertar() {
    alert("Botão Clicado!");
  }
}
