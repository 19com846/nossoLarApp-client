import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-absences',
  templateUrl: './absences.page.html',
  styleUrls: ['./absences.page.scss'],
})
export class AbsencesPage implements OnInit {

  public absences: any;

  constructor(private route: ActivatedRoute, private api: APIService) { }

  ngOnInit() {
    // const id = this.route.snapshot.params.id;
    const id = '1';
    this.getAbsences(id);
  }

  getAbsences(id: String) {
    this.api.getAbsences(id).subscribe((data: Array<object>) => {
      this.absences = data;
      console.log(data);
    });
  }
}
