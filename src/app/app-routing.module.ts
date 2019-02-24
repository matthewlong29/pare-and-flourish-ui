import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { BlogsComponent } from "./pages/blogs/blogs.component";
import { CollaborateComponent } from "./pages/collaborate/collaborate.component";
import { EventsComponent } from "./pages/events/events.component";
import { RoundtablesComponent } from "./pages/roundtables/roundtables.component";
import { AmreadingComponent } from "./pages/amreading/amreading.component";

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "blogs", component: BlogsComponent },
  { path: "collaborate", component: CollaborateComponent },
  { path: "events", component: EventsComponent },
  { path: "roundtable", component: RoundtablesComponent },
  { path: "amreading", component: AmreadingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
