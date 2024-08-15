import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { IData } from '../core/interfaces/idata';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  private readonly _DataService=inject(DataService)
  allData:IData[] = []

  ngOnInit(): void {
      this._DataService.getData().subscribe({
      next:(res)=>{
        this.allData = res
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
