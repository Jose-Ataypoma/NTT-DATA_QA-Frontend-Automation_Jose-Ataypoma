import {Page} from "playwright";
    
    export class inventoryPage {
        constructor(private page: Page){}
    
        async isVisible(): Promise<boolean>{
            // Verifica si la lista de productos esta visible
            return await this.page.isVisible(".inventory_list");
        }

        async addFirstItemToCart(){
            // Agrega el primer producto al carrito
            await this.page.click(".inventory_item button");
        }
    }
