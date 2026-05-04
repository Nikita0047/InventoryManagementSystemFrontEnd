import { Component } from '@angular/core';
import{StockServices}from '../../services/stock.services';
import { Stock } from '../../models/stock';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import{ OnInit } from '@angular/core';
@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './stock-list.html',
  styleUrl: './stock-list.scss',
})
export class StockList implements OnInit {
stocks:Stock[]=[];

constructor(private Service: StockServices){}

ngOnInit(){
  this.loadStocks();
}

loadStocks(){
  this.Service.getAll().subscribe(data=>{
    console.log(data);
    this.stocks = data;
  });
}
delete(id:number){
  this.Service.delete(id).subscribe(()=>{
    this.loadStocks;
  })
}
}
