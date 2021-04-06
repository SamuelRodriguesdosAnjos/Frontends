import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Photo } from '../interfaces/photo';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  public photos: Photo[] = [];

  constructor(public photoService: PhotoService) {}

  async addPhotoToGallery() {
    await this.photoService.addNewToGallery();
    this.photos = this.photoService.photos;
  }

}
