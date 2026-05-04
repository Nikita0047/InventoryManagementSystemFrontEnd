import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './category-form.html',
  styleUrl: './category-form.scss',
})
export class CategoryForm {
  Category: Category = {
    id: 0,
    name: ''
  };

  isEdit = false;

  constructor(private Service: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(){
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.Service.getById(id).subscribe(data => {
        this.Category = data;
      });
    }
  }

  save() {
    if (this.isEdit) {
      this.Service.update(this.Category.id, this.Category).subscribe(() => {
        this.router.navigate(['/products']);
      });
    } else {
      this.Service.create(this.Category).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }
}
