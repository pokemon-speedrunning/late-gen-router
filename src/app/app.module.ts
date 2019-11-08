import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";
import {MatInputModule} from "@angular/material/input";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./components/app.component";
import {CreatePokeDialogComponent} from "./components/create-poke-dialog.component";
import {RouteCreationDialogComponent} from "./components/route-creation-dialog.component";
import {FontAwesomeService} from "./services/font-awesome.service";

@NgModule({
    declarations: [
        AppComponent,
        CreatePokeDialogComponent,
        RouteCreationDialogComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,

        FontAwesomeModule,

        MatDialogModule,
        MatToolbarModule,
        MatSidenavModule,
        MatDividerModule,
        MatButtonModule,
        MatInputModule,

        AppRoutingModule,
    ],
    entryComponents: [
        CreatePokeDialogComponent,
        RouteCreationDialogComponent,
    ],
    providers: [
        FontAwesomeService,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {

}
