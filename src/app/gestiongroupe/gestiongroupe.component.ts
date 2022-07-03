import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gestiongroupe',
  templateUrl: './gestiongroupe.component.html',
  styleUrls: ['./gestiongroupe.component.css']
})
export class GestiongroupeComponent implements OnInit {

  constructor(private http:HttpClient) { 

  }
  
  groupeList:any;
  
  ngOnInit() {   
  
      this.http.get("http://localhost:8086/users/").subscribe({
        next: (data) => {
          this.groupeList = data;
          //this.route.navigateByUrl('/profile')
        },
        error: (err) => { console.log(err) }
  
      });
  }

  DeleteGroupe(id:string){
    this.http.delete("http://localhost:8086/groupe/" + id).subscribe({next: data =>
     {},error: (err) => { console.log(err) }
  })
  }
  }
