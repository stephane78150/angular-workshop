import { Component, OnInit } from '@angular/core';
import { CountryService } from './exercise1.service';
import { NEVER, Observable, map } from 'rxjs';
import { Countries } from './exercise1.model';

@Component({  
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css'],
  providers: [CountryService]
})
export class Exercise1Component implements OnInit {

  public countries$: Observable<Countries> = NEVER;
  public countryCount$: Observable<number> = NEVER;
  public selectedCountry: string | null = null;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countries$ = this.countryService.GetCountries();
    this.countryCount$ = this.countries$.pipe(map(countries => countries?.length ?? 0));
  }

  selectCountry({target}: Event) {
    if (target instanceof HTMLSelectElement) {
      this.selectedCountry = target.value;
    }    
  }
}

