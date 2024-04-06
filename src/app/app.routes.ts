import { Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { DisplayCardsComponent } from './components/display-cards/display-cards.component';
export const routes: Routes = [
  {path: "details/:characterId", component:DetailsComponent},
  {path: "", component:DisplayCardsComponent}
];
