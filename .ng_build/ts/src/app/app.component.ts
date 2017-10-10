import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="container">
        <h1>Ngx bootstrap product tour</h1>
        <h2>Product tour using Angular (2+)</h2>
        <ngx-bootstrap-product-tour>
        </ngx-bootstrap-product-tour>
    <router-outlet></router-outlet>
    </div>
  `,
  styles: [`

  `]
})
export class AppComponent {
  title = 'app';
}
