import { Component } from '@angular/core';
import{ Warehouse } from '../../models/warehouse';
import { RouterModule } from '@angular/router';
import { WarehouseService } from '../../services/warehouse.service';
@Component({
  selector: 'app-warehouse-list',
  imports: [RouterModule],
  templateUrl: './warehouse-list.html',
  styleUrl: './warehouse-list.scss',
})
export class WarehouseList {
warehouses: Warehouse[]=[];
constructor(private Service: WarehouseService) {}

ngOnInit() {
  this.loadWarehouses();
}
loadWarehouses() {
  this.Service.getAll().subscribe(data => {
    console.log(data);
    this.warehouses = data;
  });
}
delete(id: number) {
  this.Service.delete(id).subscribe(() => {
    this.loadWarehouses();
  });
}}
