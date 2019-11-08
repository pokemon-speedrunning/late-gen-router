import {Component} from "@angular/core";
import {FontAwesomeService} from "../services/font-awesome.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    public constructor(public fa: FontAwesomeService) {
    }
}
