import { OnInit, NgModule, Component } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoute:Routes=[
    { path:'', redirectTo:'/recipes',pathMatch:'full'},
    { path:'recipes', component:RecipesComponent },
    { path:'shoppingList', component:ShoppingListComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoute)],
    exports:[RouterModule]
})
export class AppRouterModule {



}