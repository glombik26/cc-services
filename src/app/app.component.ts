import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, setDoc, doc, updateDoc } from '@angular/fire/firestore';
import { RouterOutlet } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cc-services';
  firestore: Firestore = inject(Firestore);
  user$: Observable<User[]>;

  constructor() {
    this.user$ = collectionData<User>((collection(this.firestore, 'user')));
  }

  async handleClick() {
    /*
    addDoc(collection(this.firestore, 'user'), <User>{
      firstName: 'Michael',
      lastName: 'Glombik',
      email: 'glombik.michael@gmail.com',
      password: '1234',
      active: true,
    });
    */
    const document = await addDoc(collection(this.firestore, 'user'), <User>{
      firstName: 'Michael',
      lastName: 'Glombik',
      email: 'glombik.michael@gmail.com',
      password: '1234',
      active: true
    });
    await updateDoc(document, { id: document.id });
    /*
    setDoc(document, <User>{
      firstName: 'Michael',
      lastName: 'Glombik',
      email: 'glombik.michael@gmail.com',
      password: '1234',
      active: true,
      id: document.id,
    });
    */   
  }
}

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  active: boolean;
  lastLogin: Date;
  id: string;
}