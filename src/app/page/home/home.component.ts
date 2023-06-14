import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  isCollapsed = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed
  }

  obterDados: any[any];
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.obterDados().subscribe(
      response => {
        this.obterDados = response;
      }
      )
  }
}
