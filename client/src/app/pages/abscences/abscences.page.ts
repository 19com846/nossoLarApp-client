import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticAPIService } from 'src/app/services/static-api.service';

@Component({
  selector: 'app-abscences',
  templateUrl: './abscences.page.html',
  styleUrls: ['./abscences.page.scss'],
})
export class AbscencesPage implements OnInit {

  public abscences: any;

  constructor(private route: ActivatedRoute, private api: StaticAPIService) { }

  ngOnInit() {
    // const id = this.route.snapshot.params.id;
    const id = '1';
    this.getAbscences(id);
  }

  getAbscences(id: String) {
    this.api.getAbscences(id).subscribe((data: Array<object>) => {
      this.abscences = data;
      console.log(data);
    });
  }
}
