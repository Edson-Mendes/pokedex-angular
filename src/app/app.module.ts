import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './page/pokemons/pokemons.component';
import { CardComponent } from './component/card/card.component';
import { TypeListComponent } from './component/type-list/type-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    CardComponent,
    TypeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
