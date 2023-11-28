import { Component, OnInit, inject } from '@angular/core';
import { CountryService } from './exercise1.service';
import { NEVER, Observable, map, tap } from 'rxjs';
import { Countries, Country } from './exercise1.model';
import {  FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({  
  standalone: true,
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class Exercise1Component implements OnInit {
  private countryService: CountryService;
  public countries$: Observable<Countries> = NEVER;
  public countryCount$: Observable<number> = NEVER;
  public countryDropdown = new FormControl<Country['id']>(undefined);

  constructor() { 
    this.countryService = inject(CountryService);
  }

  ngOnInit() {
    this.countries$ = this.countryService.GetCountries();
    this.countryCount$ = this.countries$.pipe(map(countries => countries?.length ?? 0));
  }


}

