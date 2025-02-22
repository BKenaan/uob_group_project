import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Explicitly import from @angular/router

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user ='User';
  title = 'Welcome to Prototype web-app';
  savingsData =[
    { category: 'Food', amount: 200 },
    { category: 'Travel', amount: 500 },
    { category: 'Education', amount: 300 },
    { category: 'Entertainment', amount: 150 },
  ];
  announcement: any;
}
