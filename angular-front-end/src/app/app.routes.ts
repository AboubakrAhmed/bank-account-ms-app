import { Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {AccountComponent} from "./account/account.component";

export const routes: Routes = [
  {path :"customers",component: CustomersComponent},
  {path :"accounts",component: AccountComponent}

];
