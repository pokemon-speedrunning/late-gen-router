import {RouterState} from "@angular/router";
import {Species} from "./species";

export type RouteConfigType = "gen6" | "gen7" | "gen8" | "custom";
export type RouteEventType = "init" | "rare-candy" | "kill" | "catch" | "affection-boost" | "evolve" | "roto-exp" | "item-equip";
export type LevelCurve = "Erratic" | "Fast" | "Medium Fast" | "Medium Slow" | "Slow" | "Fluctuating";

export interface CompleteRoute {
    autoEvolve: boolean;
    eventStates: {routeEvent: RouteEvent, state: RouterState}[];
    routeConfigType: RouteConfigType;

}

export interface RouteState {
    species: Species;
    level: number;
    exp: number;
    luckyEgg: boolean;
    affectionBoost: boolean;
}

export interface RouteInitByLevelEvent {
    eventType: "init";
    tradeExp?: boolean;
    level: number;
}

export interface RouteInitByExpEvent {
    eventType: "init";
    tradeExp?: boolean;
    exp: number;
}

export interface RareCandyEvent {
    eventType: "rare-candy";
    value: boolean;
}

export interface KillEvent {
    eventType: "kill";
    species: Species;
    level: number;
    expShare?: boolean;
}

export interface CatchEvent {
    eventType: "catch";
    species: Species;
    level: number;
    expShare?: boolean;
}

export interface AffectionBoostEvent {
    eventType: "affection-boost";
    value: boolean;
}

export interface EvolutionEvent {
    eventType: "evolve";
}

export interface ItemEquipEvent {
    eventType: "item-equip";
    item: string | null;
}

export type RouteEvent =
    RouteInitByLevelEvent |
    RouteInitByExpEvent |
    RareCandyEvent |
    KillEvent |
    CatchEvent |
    AffectionBoostEvent |
    EvolutionEvent |
    ItemEquipEvent;
