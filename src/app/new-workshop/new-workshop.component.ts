import { Component, OnInit, Input } from "@angular/core";
import { Location } from "@angular/common";
import { Workshop } from "../Workshop";
import { WorkshopService } from "../workshop.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-workshop",
  templateUrl: "./new-workshop.component.html",
  styleUrls: ["./new-workshop.component.scss"]
})
export class NewWorkshopComponent implements OnInit {
  @Input()
  model: Workshop = new Workshop();

  constructor(
    private workshopService: WorkshopService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit(): void {
    this.workshopService.addWorkshop(this.model).subscribe(_ => {
      this.router.navigate(["/admin/workshops"]);
    });
  }
}
