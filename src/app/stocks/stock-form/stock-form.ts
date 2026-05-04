import { Component } from '@angular/core';
import{Stock} from '../../models/stock';
import { StockServices } from '../../services/stock.services';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-stock-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './stock-form.html',
  styleUrl: './stock-form.scss',
})
export class StockForm {
  stock:Stock={
    id: 0,
    productId: 0,
    warehouseId: 0,
    quantity: 0,

  }

     isEdit = false;

  constructor(private Service: StockServices,
             private route: ActivatedRoute,
             private router: Router
  ) {}
   
  ngOnIt(){
    const id = this.route.snapshot.params["id"];
    if(id){
      this.isEdit = true;
      this.Service.getById(id).subscribe(data =>{
        this.stock = data;
      })
    }
  }

  save(){
    if(this.isEdit){
      this.Service.update(this.stock.id, this.stock).subscribe(()=>{
        this.router.navigate(["/stocks"]);
      });
    }else {
      this.Service.create(this.stock).subscribe(()=>{
        this.router.navigate(["/stocks"])
      });
    }
  }
} 
  


