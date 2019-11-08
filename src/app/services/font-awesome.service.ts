import {Injectable} from "@angular/core";
import {faFolderOpen, faPlus} from "@fortawesome/free-solid-svg-icons";

@Injectable()
export class FontAwesomeService {
    private _plus = faPlus;

    public get plus() {
        return this._plus;
    }

    private _folderOpen = faFolderOpen;

    public get folderOpen() {
        return this._folderOpen;
    }
}
