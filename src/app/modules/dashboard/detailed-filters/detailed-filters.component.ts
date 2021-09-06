import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { cities, relationTypes, genders, bloodTypes } from 'src/app/common/filters.data';
import { Filters } from 'src/app/models/filters';

@Component({
  selector: 'app-detailed-filters',
  templateUrl: './detailed-filters.component.html',
  styleUrls: ['./detailed-filters.component.css']
})
export class DetailedFiltersComponent implements OnInit {
  @Output() filterEvent: EventEmitter<Filters> = new EventEmitter<Filters>();

  cities = cities;
  relationTypes = relationTypes;
  genders = genders;
  bloodTypes = bloodTypes;
  filteredCities = this.cities;

  filtersForm = new FormGroup({
    relationType: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl(''),
    bloodType: new FormControl(''),
    city: new FormControl('')
  });

  constructor() {}

  ngOnInit(): void {
    this.filtersForm.controls['city'].valueChanges.subscribe((value) => {
      this.filteredCities = this.cities.filter(
        (city) =>
          city.title.includes(value) || city.value.includes(value.toLowerCase())
      );
    });
  }

  displayCityFn(value?: string) {
    return value
      ? this.filteredCities.find((city) => city.value === value).title
      : '';
  }

  onFilter() {
    const filters = { ...this.filtersForm.value };
    filters.fromAge = filters.age;
    filters.toAge = filters.age;
    this.filterEvent.emit(filters);
  }
}
