import { Injectable } from '@angular/core';

export class Tab {
    id: number;
    text: string;
}

export class Longtab {
    text: string;
}

let tabs: Tab[] = [
    {
        id: 0,
        text: "T+0",
    },
    {
        id: 1,
        text: "T+1",
    },
    {
        id: 2,
        text: "T+2",
    },
    {
        id: 3,
        text: "T+3",
    }
];



@Injectable()
export class Service {
    getTabs(): Tab[] {
        return tabs;
    }
}
