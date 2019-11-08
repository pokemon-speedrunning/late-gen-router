import {LevelCurve} from "./route";

export interface Species {
    name: string;
    levelCurve?: LevelCurve;
    evolution?: Species;
    evolutionLevel?: number;
    hpEvYield?: number;
    atkEvYield?: number;
    defEvYield?: number;
    spAtkEvYield?: number;
    spDefEvYield?: number;
    spdEvYield?: number;
    expYield?: number;
}
