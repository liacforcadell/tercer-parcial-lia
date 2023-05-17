import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-producto-app',
  templateUrl: './producto-app.component.html',
  styleUrls: ['./producto-app.component.css']
})
export class ProductoAppComponent {

  producto: any;
  URLImagen: string = 'http://www.hostcatedral.com/api/publicacion/'

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.producto = this.route.snapshot.params;
  }
}
