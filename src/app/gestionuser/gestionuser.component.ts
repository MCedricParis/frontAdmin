import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gestionuser',
  templateUrl: './gestionuser.component.html',
  styleUrls: ['./gestionuser.component.css']
})
export class GestionuserComponent implements OnInit {

  userList:any;
constructor(private http:HttpClient, private route:ActivatedRoute) { 

}

ngOnInit() {   

    this.http.get("http://localhost:8086/users/").subscribe({
      next: (data) => {
        this.userList = data;
      },
      error: (err) => { console.log(err) }

    });
  }

DeleteUser(id:string){
  this.http.delete("http://localhost:8086/user/" + id).subscribe({next: data =>{}
  //this.route.navigate('/profile')
   ,error: (err) => { console.log(err) }
})}
}


