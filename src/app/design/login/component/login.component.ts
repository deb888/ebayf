import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GlobalformService } from 'src/app/globalform.service';
import { HttpService } from 'src/app/globalservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;

  password: string;
  signinForm: FormGroup;
  constructor(
   
    private globalform: GlobalformService,
    private httpcall: HttpService,
    private router:Router
  ) {
    this.signinForm = new FormGroup({
      'email': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),

    });


  }

  ngOnInit() {
    this.userName = "";
    this.password = "";
  }

  onSubmit() {
    // let user: User = this.userService.getUserByUserNameAndPassword(this.userName, this.password);

    if (this.signinForm.valid) {
      console.log('====================================');
      console.log(this.signinForm.value);
      console.log('====================================');
      let postdata = {
        email: this.signinForm.value.email,
        password: this.signinForm.value.password
      }
      this.httpcall.sendHttpCall(JSON.stringify(postdata), '/api/users/login', 'post').subscribe((res: any) => {
        console.log('====================================');
        console.log(res);
        if (res) {
          var token=res.token.replace (/"/g, "");
          //this.sessionService.setSessionValue("token", token)
          localStorage.setItem("currentUser", JSON.stringify(res));
         // this.notificationService.addSingle('success', '', 'LogedIn Successfully.');
         this.router.navigate(['/dashboard'])
          
        }
        console.log('====================================');
      }, (err) => {
        console.log(err);

       
      })
    } else {
      this.globalform.validateAllFormFields(this.signinForm);
    }
    
  }


}
