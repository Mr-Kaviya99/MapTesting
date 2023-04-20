import {Component, OnInit} from '@angular/core';
import {LocationService} from "../location.service";

@Component({
  selector: 'app-get-current-location',
  templateUrl: './get-current-location.component.html',
  styleUrls: ['./get-current-location.component.scss']
})
export class GetCurrentLocationComponent implements OnInit {

  constructor(
    private locationService: LocationService
  ) {
  }

  ngOnInit(): void {
    this.locationService.getPosition().then(pos => {
      console.log(`Positon: ${pos.lng} ${pos.lat}`);
    });
  }

}
