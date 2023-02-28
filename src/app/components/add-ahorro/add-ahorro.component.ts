import { Component } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-add-ahorro',
  templateUrl: './add-ahorro.component.html',
  styleUrls: ['./add-ahorro.component.css']
})
export class AddAhorroComponent {
  formularioAhorro: FormGroup;
  router: any;

  constructor(
    public formulario: FormBuilder,
    private crudService: CrudService,
    private routeador: Router
  ) {
    this.formularioAhorro = this.formulario.group({
      ahorro: ['']
    });
  }

  addAhorro() {
    
    if (window.confirm("Seguro de añadir el Ahorro ?")) {
      this.crudService.addAhorroLocal(this.formularioAhorro.value);
      delay(300);  
      this.router.navigateByUrl("");
      /* Metodo para agegar un ahorro en bdd externa
      this.crudService.spAhorro(this.formularioAhorro.value).subscribe(resp => {
        if (resp.affectedRows == 1) {
          this.routeador.navigateByUrl('');
        } else {
          console.log(resp.affectedRows)
          alert("Error de conexión o datos invalidos!");
        }
      });
      */
    }
  }

}
