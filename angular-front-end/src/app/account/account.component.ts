import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit{
  accounts:any;
  constructor(private http:HttpClient) {
  }
  ngOnInit() {
    this.http.get("http://localhost:8888/ACCOUNT-SERVICE/accounts")
      .subscribe({
          next : data=>{
            this.accounts=data;
      },
        error:err =>{
            console.log(err);
        }

    }
      )

  }

}
