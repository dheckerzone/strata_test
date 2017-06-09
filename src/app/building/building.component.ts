import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Building } from "app/building/building.model";
import { BuildingService } from "app/building/building.service";

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  buildingData: Building[];

  @Output() selectedImage = new EventEmitter<string>();

  constructor(private buildingService:BuildingService) { }

  ngOnInit() {
    this.buildingService.getBuildingData()
      .subscribe(data => {
        this.buildingData = data;
    });
  }

  changeSelectedImage(id){
    this.selectedImage.emit(id);
  }

}
