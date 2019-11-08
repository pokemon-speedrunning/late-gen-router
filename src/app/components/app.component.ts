import {Component} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {FontAwesomeService} from "../services/font-awesome.service";
import {RouteCreationDialogComponent} from "./route-creation-dialog.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    public constructor(public fa: FontAwesomeService,
                       private dialog: MatDialog) {
    }

    public openRouteCreationDialog() {
        this.dialog.open(RouteCreationDialogComponent, {
            width: "500px",
        });
    }
}
