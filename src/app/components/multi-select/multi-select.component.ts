import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
  selector: "app-multi-select",
  template: `
  <mat-list-item class="primary-imenu-item" role="listitem">
    <mat-form-field class="select-form" [formGroup]="group">
        <mat-select 
        [placeholder]="field.label" 
        [formControlName]="field.name"
        class="filter-select"
        multiple>
          <mat-option *ngFor="let item of field.options" [value]="item.value">
            {{item.label}}
          </mat-option>
        </mat-select>
    </mat-form-field>
  </mat-list-item>
  `,
  styles: []
})
export class MultiSelectComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
