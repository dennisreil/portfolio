import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProjPage } from './proj.page';

describe('ProjPage', () => {
  let component: ProjPage;
  let fixture: ComponentFixture<ProjPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
