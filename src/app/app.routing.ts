import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"

const routes: Routes = [
    {
        path: '', loadChildren: () => import("./team/team.module").then(module => module.TeamModule)
    },
    {
        path: '**', redirectTo: '/'
    }
];

export const AppRouting: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);