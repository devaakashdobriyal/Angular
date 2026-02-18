import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { Auth,signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  constructor(private auth:Auth,private router:Router){}

  logout() {
    signOut(this.auth).then(() => {
      this.router.navigate(['/login']);
    });
  }

}
