import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
 

  isLogged: boolean = false;

  constructor(private router: Router, private tokenService: TokenService) { } // Inyección del servicio de ruteo en el constructor

  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  login(): void{

    this.router.navigate(["/login"]);
      
  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
    
  }

}
