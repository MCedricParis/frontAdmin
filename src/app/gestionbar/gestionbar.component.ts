import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionbar',
  templateUrl: './gestionbar.component.html',
  styleUrls: ['./gestionbar.component.css']
})
export class GestionbarComponent implements OnInit {

  constructor(private http:HttpClient) { 

  }
  
  barList:any;
  
  ngOnInit() {   
  
      this.http.get("http://localhost:8086/bars/").subscribe({
        next: (data) => {
          this.barList = data;
          //this.route.navigateByUrl('/profile')
        },
        error: (err) => { console.log(err) }
  
      });
  }

  DeleteBar(id:string){
    this.http.delete("http://localhost:8086/bar/" + id).subscribe({next: data =>
     {},error: (err) => { console.log(err) }
  })
  }
}
