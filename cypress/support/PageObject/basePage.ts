import { LeftMenu, Header } from "../PageObject";

export class BasePage {
    private leftmenu: LeftMenu;
    private header: Header;

    constructor(){
        this.leftmenu = new LeftMenu();
        this.header = new Header();        
    }

    public userMenu(): LeftMenu{
        return this.leftmenu;
    }
}