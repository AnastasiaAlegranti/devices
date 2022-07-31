import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ApiService, Device} from '../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public isSpinner: boolean;
  public fileNames = ['BenQ SC3211', 'Dell ZT60', 'Haier LE39B50', 'LG 50LA621Y', 'Mag RD24L', 'Normande ND3276', 'Panasonic TH-L32B6', 'Philips 55PFL6008', 'Philips 226V4LSB', 'Samsung UA46F6400', 'Sharp LC50LE450M', 'Samsung UA55F6400', 'Sony KDL50W656'];
  public devices: Device[] = [];
  public filteredDevices: Device[] = [];
  public searchTerm: string = '';


  public constructor(public apiService: ApiService, private router: Router, private cdr: ChangeDetectorRef) {
  }

  public ngOnInit() {
    this.getAllDevices();
  }

  public filterDevices() {
    this.filteredDevices = this.devices.filter(item => item.Name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  public getAllDevices() {
    this.fileNames.forEach((el, index) => {
      this.apiService.getAllFiles(el).subscribe(res => {
        this.devices.push(res);
        if (index === (this.fileNames.length - 1)) {
          this.filteredDevices = this.devices;
          this.cdr.detectChanges();
          this.isSpinner = false;
        }
      }, err => {
        this.isSpinner = false;
        this.cdr.detectChanges();
      });
    });
  }

  public markDevice(device: Device) {
   device.isMarked= device.isMarked ? false : true;
  }
}
