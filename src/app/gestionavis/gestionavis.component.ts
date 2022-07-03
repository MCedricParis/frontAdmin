import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionavis',
  templateUrl: './gestionavis.component.html',
  styleUrls: ['./gestionavis.component.css']
})
export class GestionavisComponent implements OnInit {

  constructor(private http:HttpClient) { 

  }
  
  avisList:any;
  
  ngOnInit() {   
  
      this.http.get("http://localhost:8086/avis/").subscribe({
        next: (data) => {
          this.avisList = data;
          //this.route.navigateByUrl('/profile')
        },
        error: (err) => { console.log(err) }
  
      });
  }
}
