import { NgOptimizedImage } from "@angular/common";

export interface Gem {
    id : number;
    material : string;
    price : number;
    productionCompany : string;
    shiny? : boolean;
    rarity? : boolean;
    /*img : string;
    Ideally, I would've used the string of the img names to use like <img ngSrc="gem.img" alt="">
    But I do not understand how I can make a seperate img for every new gem.
    I would start by altering the mockGem.data to have each a new img of their respective gem.
    Then, just like the other properties; Attempt to display it.
    */
}
