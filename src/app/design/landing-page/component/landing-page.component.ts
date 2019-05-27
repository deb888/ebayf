import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from 'src/app/globalservice';
export interface Iprod {
  commision:string,
  product_details_page_link: string
  product_id:string
  product_image_main:string
  product_name: string,
  product_price:string
  sale_link:any
}
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
productdata:Iprod[]=[];
  constructor(public httpcall: HttpService) { }

  ngOnInit() {
    this.getalldata();
  }

  getalldata() {
    this.httpcall.sendHttpCall('', '/api/product/all', 'get').subscribe((res: Iprod[]) => {
      res=res||[];
      this.productdata=res;
      console.log('====================================');
      console.log(res);

      console.log('====================================');
    }, (err) => {

    })
  }
}
