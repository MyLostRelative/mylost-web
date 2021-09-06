import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detailed-filters',
  templateUrl: './detailed-filters.component.html',
  styleUrls: ['./detailed-filters.component.css']
})
export class DetailedFiltersComponent implements OnInit {
  @Output() filterEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  genders = [
    { value: 'female', title: 'მდედრობითი' },
    { value: 'male', title: 'მამრობითი' },
    { value: 'other', title: 'სხვა' }
  ];

  relationTypes = [
    { value: 'mother', title: 'დედა' },
    { value: 'father', title: 'მამა' },
    { value: 'sister', title: 'და' },
    { value: 'brother', title: 'ძმა' },
    { value: 'friend', title: 'მეგობარი' },
    { value: 'other', title: 'სხვა' }
  ];

  bloodTypes = [
    { value: 'a', title: 'A' },
    { value: 'b', title: 'B' },
    { value: 'ab', title: 'AB' },
    { value: 'o', title: 'O' }
  ];

  cities = [
    { value: 'tbilisi', title: 'თბილისი' },
    { value: 'kutaisi', title: 'ქუთაისი' },
    { value: 'batumi', title: 'ბათუმი' },
    { value: 'borjomi', title: 'ბორჯომი' },
    { value: 'mestia', title: 'მესტია' }
  ];

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
      console.log('change: ', value);
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
    this.filterEvent.emit(true);
  }
}
