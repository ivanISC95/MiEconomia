import { Component } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
@Component({
  selector: 'app-add-prestamo',
  templateUrl: './add-prestamo.component.html',
  styleUrls: ['./add-prestamo.component.css']
})
export class AddPrestamoComponent {
  hide = true;
  FormularioPrestamo : FormGroup;
  constructor(
    private crudService:CrudService,
    private formulario:FormBuilder,
    private router : Router
  ){
    this.FormularioPrestamo = this.formulario.group({     
      id : this.crudService.getPrestamosLocales().length + 1, 
      cantidad:[''],
      nombre:[''],
      fechaPrestamo:[''],
      estatus : "Debe"
    })
  }

  addPrestamo(){
    let {cantidad, nombre} = this.FormularioPrestamo.value;
    if(cantidad == "" && nombre == ""){
      alert("campos vacios");
    }else{
      // Metodo para añadir datos de forma local
      this.crudService.addPrestamosLocales(this.FormularioPrestamo.value);
      delay(300);
      this.FormularioPrestamo.reset();
      this.router.navigateByUrl('');
      /* ADD para datos en servidor MySQL
      this.crudService.spAddPrestamo(this.FormularioPrestamo.value).subscribe(
        resp => {
          if(resp.affectedRows == 1){
            this.router.navigateByUrl('');
          }else{
            alert("Error de conexión o datos invalidos");
          }
        }
      );
      */
    }    
  }
}
