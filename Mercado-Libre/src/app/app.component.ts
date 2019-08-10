import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mercado Libre';
  name = 'Fernanda Vega';
  busqueda = '';
  productos: any;

  constructor(
    private http: HttpClient
  ) {}

getProduct() {
    this.http.get<any>(`https://api.mercadolibre.com/sites/MCO/search?q=${this.busqueda}`, {}).subscribe(res => {
      this.productos = res.results;
      console.log(this.productos);
    });

}
}
