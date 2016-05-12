import {Component} from 'angular2/core';
import {ProductListComponent} from './products/product-list.component';
import {ProductService} from './products/product.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import 'rxjs/Rx';

import {WelcomeComponent} from './home/welcome.component';
@RouteConfig([
    {path:'/welcome', name:'Welcome', component:WelcomeComponent, useAsDefault:true},
    {path:'/prodcts', name:'Product', component:ProductListComponent}
    ])

@Component({
    selector: 'pm-app',
    template:`
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Welcome']">Home</a></li>
                    <li><a [routerLink]="['Product']">Rugs</a></li>
                </ul>
             </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>        
        </div>
    </div>
    `,
    directives:[ROUTER_DIRECTIVES],
    providers:[ProductService, 
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
export /**
 * AppComponent
 */
class AppComponent {
    pageTitle: string = "Persian Rug Store!!";
}