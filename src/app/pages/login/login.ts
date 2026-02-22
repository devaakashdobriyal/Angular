import { Component,OnInit,OnDestroy  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit, OnDestroy {
  email = '';
  password = '';

images = [
  'assets/images/gokuLogin.png',
  'assets/images/luffyLogin.png',
  'assets/images/narutoLogin.png',
  'assets/images/ichigoLogin.png',
  'assets/images/jujuLogin.png',
  'assets/images/dekuLogin.png',
  'assets/images/goneLogin.png',
  'assets/images/astaLogin.png'
];

  currentIndex = 0;
  sliderSub!: Subscription;
  showPassword = false;

  constructor(
    private auth: Auth,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

ngOnInit() {
  this.sliderSub = interval(3000).subscribe(() => {
    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;

    this.cdr.markForCheck();   // 🔥 important
  });
}

 ngOnDestroy() {
  if (this.sliderSub) {
    this.sliderSub.unsubscribe();
  }
}

togglePassword() {
  this.showPassword = !this.showPassword;
}

  login() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        console.log('Logged in user:', userCredential.user);
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  }
}
