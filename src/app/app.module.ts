import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppRouting } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { EnvironmentProvider, LogginProvider } from './app.provider';
import { NbaService } from './services/nba.service';
import { TeamResultsComponent } from './components/team.results/team.results.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    NbaService,
    LogginProvider,
    EnvironmentProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
