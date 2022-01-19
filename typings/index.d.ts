import {NightwatchBrowser} from "nightwatch";

export interface PageCommand {
    (browser: NightwatchBrowser, ...args: any[]): void;
}


export interface PageObject {
    [x: string]: any;
    url?: string;

    commands?: {
        [x: string]: PageCommand;
    }[];

    elements?: {
        [x: string]: string;
    };
}

export interface PageObjects {
    [x: string]: PageObject;
}

declare module "*.json" {
    const value:any;
    export default value;
}
