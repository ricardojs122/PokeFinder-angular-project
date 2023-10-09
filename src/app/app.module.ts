import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { TestComponent } from './components/test/test.component';
import { FormsModule } from '@angular/forms';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TestComponent,
    PokemonDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
