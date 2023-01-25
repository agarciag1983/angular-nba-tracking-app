import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { TeamTrackerComponent } from "../components/team.tracker/team.tracker.component";
import { TeamResolver } from "./team.resolver";
import { TeamResultsComponent } from "../components/team.results/team.results.component";

const routes: Routes = [
    {
        path: '', component: TeamTrackerComponent
    },
    {
        path: 'results/:teamCode', component: TeamResultsComponent, resolve: { team: TeamResolver }
    }
];

export const TeamRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);