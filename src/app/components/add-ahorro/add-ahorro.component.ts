import { Component } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ahorro',
  templateUrl: './add-ahorro.component.html',
  styleUrls: ['./add-ahorro.component.css']
})
export class AddAhorroComponent {
  formularioAhorro: FormGroup;

  constructor(
    public formulario: FormBuilder,
    private crudService: CrudService,
    private routeador: Router
  ) {
    this.formularioAhorro = this.formulario.group({
      cantidad: ['']
    });
  }

  addAhorro() {
    
    if (window.confirm("Seguro de añadir el Ahorro ?")) {
      this.crudService.spAhorro(this.formularioAhorro.value).subscribe(resp => {
        if (resp.affectedRows == 1) {
          this.routeador.navigateByUrl('');
        } else {
          console.log(resp.affectedRows)
          alert("Error de conexión o datos invalidos!");
        }
      });
    }
  }

}
