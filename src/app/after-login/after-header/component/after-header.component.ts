import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// declare const $: any;

@Component({
  selector: 'app-after-header',
  templateUrl: './after-header.component.html',
  styleUrls: ['./after-header.component.css']
})
export class AfterHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
