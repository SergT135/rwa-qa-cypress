/// <reference types = "cypress"/>
import {Reference} from "./elements";

export class LeftMenu {

    public optionHome(): Reference{        
        return new Reference('a[data-test="sidenav-home"]');          
    }

    public optionUserMyAcc(): Reference{        
        return new Reference('a[data-test="sidenav-user-settings"]');          
    }

    public optionBankAcc(): Reference{        
        return new Reference('a[data-test="sidenav-home"]');          
    }

    public optionNotifc(): Reference{        
        return new Reference('a[data-test="sidenav-notifications"]');          
    }

    public optionLogout(): Reference{        
        return new Reference('a[data-test="sidenav-signout"]');          
    }

}