import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from 'src/app/globalservice';
import { Iprod } from 'src/app/design/landing-page/component/landing-page.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productdata: any[];
  modalRef: BsModalRef;
  constructor(private httpcall: HttpService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getalldata();
    console.log('====================================');
    console.log('gffgfgfgggggggggggggggggggggggggggggggggggg');
    console.log('====================================');
  }
  getalldata() {
    this.httpcall.sendHttpCall('', '/api/product/all', 'get').subscribe((res: Iprod[]) => {
      res = res || [];
      this.productdata = res;
      console.log('====================================');
      console.log(res);

      console.log('====================================');
    }, (err) => {
      console.log('====================================');
      console.log(err);
      console.log('====================================');
    })
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  uploadprofilepic(event) {
    let postdata;
    let uploadData = new FormData();
    let selectedFile = event.target.files[0];
    console.log('====================================');
    console.log(selectedFile.name);
    console.log('====================================');
    uploadData.append('myFile', selectedFile, selectedFile.name);
    setTimeout(() => {
      this.httpcall.sendHttpCall(uploadData, '/api/product/uploadfile', 'post').subscribe((res: any) => {
       this.getalldata();
      }, (err: any) => {
        console.log(err);
      })
    }, 1500)
  }
}
