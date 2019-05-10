import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StaticAPIService } from 'src/app/services/static-api.service';

@Component({
  selector: 'app-abscences',
  templateUrl: './abscences.page.html',
  styleUrls: ['./abscences.page.scss'],
})
export class AbscencesPage implements OnInit {

  public faltas: any;

  constructor(private route: ActivatedRoute, private router: Router, private api: StaticAPIService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.getPresencesFromStudentInClass(id);
  }

  getPresencesFromStudentInClass(id: String) {
    this.api.getPresencesFromStudentInClass(id).subscribe((data: Array<object>) => {
      this.faltas = data;
      console.log(this.faltas);
    });
  }
}
