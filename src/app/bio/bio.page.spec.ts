import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BioPage } from './bio.page';

describe('BioPage', () => {
  let component: BioPage;
  let fixture: ComponentFixture<BioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BioPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
