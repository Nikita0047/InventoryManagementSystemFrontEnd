import { Component } from '@angular/core';
import{ Warehouse } from '../../models/warehouse';
import { WarehouseService } from '../../services/warehouse.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-warehouse-form',
  imports: [FormsModule],
  templateUrl: './warehouse-form.html',
  styleUrl: './warehouse-form.scss',
})
export class WarehouseForm {
  warehouse: Warehouse = {
    id: 0,
    name: '',
    location: '',
  };

  isEdit = false;

  constructor(private Service: WarehouseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(){
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.Service.getbyId(id).subscribe(data => {
        this.warehouse = data;
      });
    }
      
  }
  save() {
    if (this.isEdit) {
     this.Service.update(this.warehouse.id, this.warehouse).subscribe(() => {
       this.router.navigate(['/warehouses']);
     });
   } else {
     this.Service.create(this.warehouse).subscribe(() => {
       this.router.navigate(['/warehouses']);
     });
   }
 }
}
  

