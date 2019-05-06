import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StaticAPIService } from 'src/app/services/static-api.service';

@Component({
  selector: 'app-chamada',
  templateUrl: './chamada.page.html',
  styleUrls: ['./chamada.page.scss'],
})
export class ChamadaPage implements OnInit {

  public students: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private api: StaticAPIService) { }

  ngOnInit() {
    const collabID = this.route.snapshot.params.collabID;
    const turmaID = this.route.snapshot.params.turmaID;
    // this.getStudentsFromTurma(collabID, turmaID);
    this.getStudentsFromTurma('collabID', 'turmaID');
  }

  getStudentsFromTurma(collabID: String, turmaID: String) {
    this.api.getStudentsfromTurma(collabID, turmaID).subscribe((data: Array<object>) => {
      this.students = data;
    });
  }

  selectMember(data) {
    // if (data.attendance1 === false) {
    //    this.selectedArray.push(data);
    //  } else {
    //   let names = this.selectedArray.filter(j=> j.id !== data.id);
    //   this.selectedArray = names;
    // }
   }

   //TODO RULE: If no student is selected, disable button
   finalizar() {
    // console.log(this.selectedArray)
     alert("Chamada Realizada")
    this.router.navigate(['selecionar-turma-para-chamada']);
   }
}
