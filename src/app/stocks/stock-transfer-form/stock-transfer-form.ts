import { Component, OnInit } from '@angular/core';
import { StockTransfer } from '../../services/stock-transfer';
import { Stocktransfer } from '../../SModels/stocktransfer';
import { WarehouseService } from '../../services/warehouse.service';
import { Warehouse } from '../../models/warehouse';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-transfer-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './stock-transfer-form.html',
  styleUrl: './stock-transfer-form.scss',
})
export class StockTransferForm implements OnInit {
  stockTransfer: Stocktransfer = {
    id: 0,
    fromWarehouseId: 0,
    toWarehouseId: 0,
    fromWarehouseName: null,
    toWarehouseName: null,
    items: [],
    transferDate: new Date()
  };

  warehouses: Warehouse[] = [];
  isEdit = false;

  constructor(
    private service: StockTransfer,
    private warehouseService: WarehouseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadWarehouses();
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.service.getById(id).subscribe((data: any) => {
        this.stockTransfer = data;
      });
    }
  }

  loadWarehouses() {
    this.warehouseService.getAll().subscribe((data) => {
      this.warehouses = data;
    });
  }

  save() {
    if (this.isEdit) {
      this.service.update(this.stockTransfer.id, this.stockTransfer).subscribe(() => {
        this.router.navigate(['/stocktransfers']);
      });
    } else {
      this.service.create(this.stockTransfer).subscribe(() => {
        this.router.navigate(['/stocktransfers']);
      });
    }
  }
}
