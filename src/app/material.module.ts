import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule } from '@angular/material';
import {NgModule} from '@angular/core'

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule],
  exports: [MatButtonModule, MatInputModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule],
})
export class MaterialModule { }