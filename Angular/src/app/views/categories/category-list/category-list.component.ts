import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private service: CategoryService) { }
  ngOnInit() {
    this.service.refreshList();
  }
}
