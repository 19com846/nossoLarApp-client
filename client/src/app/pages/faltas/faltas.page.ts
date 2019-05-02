import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticAPIService } from '../../services/static-api.service';

@Component({
  selector: 'app-faltas',
  templateUrl: './faltas.page.html',
  styleUrls: ['./faltas.page.scss'],
})
export class FaltasPage implements OnInit {
  public faltas: any;
  constructor(private route: ActivatedRoute, private router: Router, private api: StaticAPIService) { }
  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.getPresencesFromStudentInClass(id);
  }

  getPresencesFromStudentInClass(id: number) {
    this.api.getPresencesFromStudentInClass(id).subscribe((data: Array<object>) => {
      this.faltas = data;
      console.log(this.faltas);
    });
  }

}
