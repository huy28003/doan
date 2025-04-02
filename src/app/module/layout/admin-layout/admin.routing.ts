import { Route } from "@angular/router";
import { AdminLayoutComponent } from "./admin-layout.component";
import { Test1Component } from "../../page/test1/test1.component";



export const layoutAdminRoutes: Route[] = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'test', component: Test1Component },
    ],
  },
];
