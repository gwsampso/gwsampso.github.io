import { NgModule } from '@angular/core';


import { DxDataGridModule, DxTemplateModule, DxButtonModule, DxCheckBoxModule, 
    DxFormModule, DxSelectBoxModule, DxRadioGroupModule, DxTooltipModule, DxLoadPanelModule } from 'devextreme-angular';

import { PortfolioCodeSelector } from '../@core/portfolio-dropdown.component';
    

@NgModule({
    imports: [ // import Angular's modules
        DxDataGridModule,
        DxTemplateModule,
        DxButtonModule,
        DxCheckBoxModule, 
        DxFormModule, 
        DxSelectBoxModule,
        DxRadioGroupModule,
        DxTooltipModule,
        DxLoadPanelModule,
    ],
    declarations: [
        PortfolioCodeSelector
    ],
    exports: [ // import Angular's modules
    DxDataGridModule,
    DxTemplateModule,
    DxButtonModule,
    DxCheckBoxModule, 
    DxFormModule,          
    DxSelectBoxModule,
    DxRadioGroupModule,
    DxTooltipModule,
    DxLoadPanelModule,    
    PortfolioCodeSelector,    
],
    providers: [
    ]
})
export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
        }
    }
}