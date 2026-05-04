import { Component } from '@angular/core';
import{ Warehouse } from '../../models/warehouse';
import { RouterModule } from '@angular/router';
import { WarehouseService } from '../../services/warehouse.service';
import{ OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-warehouse-list',
  imports: [RouterModule, CommonModule],
  templateUrl: './warehouse-list.html',
  styleUrl: './warehouse-list.scss',
})
export class WarehouseList implements OnInit  {
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
