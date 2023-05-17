import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { BuscadorAppService } from 'src/app/services/buscador-app.service';

@Component({
  selector: 'app-buscador-app',
  templateUrl: './buscador-app.component.html',
  styleUrls: ['./buscador-app.component.css'],
})
export class BuscadorAppComponent {
  producto: string = '';
  URLImagen: string = 'http://www.hostcatedral.com/api/publicacion/'
  listaProductos: Producto[] = [];

  constructor(private buscadorService: BuscadorAppService, private router: Router) {}

  ngOnInit(): void {
    this.buscar();
  }

  buscar() {
    this.buscadorService.buscar(this.producto).subscribe({
      next: (response: Producto[]) => {
        this.listaProductos = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  irPaginaProducto(producto: Producto) {
    this.router.navigate(['producto', producto]);
  }
}
