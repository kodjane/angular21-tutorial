import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batch-master',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './batch-master.html',
  styleUrls: ['./batch-master.css'],
})
export class BatchMaster {
  userObject: User = new User();

  httpClient = inject(HttpClient);
  users: User[] = [];

  constructor() {
    this.getAllUsers();
  }

  toggleSaveUser() {
    this.httpClient.post('https://jsonplaceholder.typicode.com/users', this.userObject).subscribe(
      (_response) => {
        // simple success handling
        alert('User created successfully');
        // Optionally refresh list
        this.getAllUsers();
      },
      (error: any) => {
        // error.message is a property
        alert('User creation failed: ' + (error?.message || error));
      },
    );
  }

  private getAllUsers() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((response: any) => {
      this.users = response || [];
    });
  }
}

export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  city: string;
  state: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.username = '';
    this.email = '';
    this.password = '';
    this.city = '';
    this.state = '';
  }
}
