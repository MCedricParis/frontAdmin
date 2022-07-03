import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionbiere',
  templateUrl: './gestionbiere.component.html',
  styleUrls: ['./gestionbiere.component.css']
})
export class GestionbiereComponent implements OnInit {

  biereList:any;

constructor(private http:HttpClient) { 

}

ngOnInit() {   

    this.http.get("http://localhost:8086/bieres/").subscribe({
      next: (data) => {
        this.biereList = data;
      },
      error: (err) => { console.log(err) }

    });
}

DeleteBiere(id:string){
  this.http.delete("http://localhost:8086/biere/" + id).subscribe({next: data =>
   {},error: (err) => { console.log(err) }
})
}

}
