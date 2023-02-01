// import { Swal } from 'sweetalert2';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories = [
    {
      cid: 23,
      title: 'progarmming',
      description: 'this is testing category',
    },
  ];

  constructor(private _category: CategoryService) { }

  ngOnInit(): void {

    this._category.categories().subscribe((data: any) => {
      this.categories = data;
      console.log(this.categories);
    },
      (error) => {
        console.log(error);
        Swal.fire("Error !!", "error in loading data", "error");
      })
  }

}
