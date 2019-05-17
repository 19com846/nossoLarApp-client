import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExpandableComponent } from './expandable/expandable.component';

@NgModule({
    declarations: [ExpandableComponent],
    exports: [ExpandableComponent]
})
export class ComponentsModule{}