import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from 'src/app/services/api.service';
import { GalleryComponent } from './gallery.component';
import { copyFile } from 'fs';
import { of } from 'rxjs';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async(() => { 
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [GalleryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    providers: [ApiService]
    fixture.detectChanges();
  }); 

  it('loading should return true', () => {
    expect(component.isLoading).toBe(true);
  });


});
