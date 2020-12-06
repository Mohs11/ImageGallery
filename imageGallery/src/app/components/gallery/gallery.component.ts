import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public allImages: any = [];
  public noItems = false;
  public isLoading = true;
  public searchText: string = '';
  public currentPg: number = 1;
  public searching = false;

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.getImageData();
  }

  getImageData() {
   this.api.getImages().subscribe(async (res:any) => {
      console.log(res[0]);
      if (res.length) {
        this.allImages = res;
      } else {
        this.noItems = true;  
      }
      this.isLoading = false;
    });
  }

}


