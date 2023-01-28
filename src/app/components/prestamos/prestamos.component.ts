import { Component, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { iPrestamos } from 'src/app/service/iPrestamos';
/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})

export class PrestamosComponent {
  Prestamos: any;
  displayedColumns: string[] = ['id', 'nombre', 'cantidad', 'fechaPrestamo', 'estatus', 'fechaPago'];
  dataSource!: MatTableDataSource<iPrestamos>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private crudService: CrudService) { }



  ngOnInit(): void {
    this.crudService.vPrestamos().subscribe(resp => {
      this.Prestamos = resp;
      this.dataSource = new MatTableDataSource(this.Prestamos);
      this.dataSource.paginator = this.paginator;
    });
  }


  applyFilter(filterVale: string) {
    this.dataSource.filter = filterVale.trim().toLowerCase();
  }

  prestamoPagado(id:any) {
    if (window.confirm("Prestamo pagado ? ")) {
      const data = { id: id };
      this.crudService.editPrestamo(data).subscribe((resp) => {
        if (resp.affectedRows == 1) {
          this.crudService.vPrestamos().subscribe(resp => {
            this.Prestamos = resp;
            this.dataSource = new MatTableDataSource(this.Prestamos);
            this.dataSource.paginator = this.paginator;
          });
        }
      });
    }
  }

}
