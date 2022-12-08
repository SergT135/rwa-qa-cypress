import { Reference } from "./elements";

export class Header {
    public newTransactionButton(): Reference{
        return new Reference('a[data-test="nav-top-new-transaction"]')
    } 
}