import { Component } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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
      cantidad:[''],
      nombre:['']
    })
  }

  addPrestamo(){
    const {cantidad, nombre} = this.FormularioPrestamo.value;
    if(cantidad == "" && nombre == ""){
      alert("campos vacios");
    }else{
      this.crudService.spAddPrestamo(this.FormularioPrestamo.value).subscribe(
        resp => {
          if(resp.affectedRows == 1){
            this.router.navigateByUrl('');
          }else{
            alert("Error de conexión o datos invalidos");
          }
        }
      );
    }    
  }
}
