import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatNativeDateModule, MatSortModule } from '@angular/material';
import {MatTableModule } from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {NgModule} from '@angular/core'

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatTableModule],
  exports: [MatButtonModule, MatInputModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatTableModule],
})
export class MaterialModule { }