import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule,
  MatCardModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatRadioModule,
  MatExpansionModule,
  MatMenuModule, MatSnackBarModule, MatTooltipModule, MatChipsModule, MatAutocompleteModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule,
    MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule, MatPaginatorModule, MatRadioModule,
    MatExpansionModule, MatMenuModule, MatSnackBarModule, MatTooltipModule, MatChipsModule, MatAutocompleteModule],
  exports: [
    MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule,
    MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule, MatPaginatorModule, MatRadioModule,
    MatExpansionModule, MatMenuModule, MatSnackBarModule, MatTooltipModule, MatChipsModule, MatAutocompleteModule]
})

export class MaterialModule {
}
