import { Injectable } from '@angular/core';
import {createClient} from 'contentful';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient(
    {
      space: 'sm9mhx7xwy37',
      accessToken: 'aKUugJrxLjZwj4hQf7oLW0E2onkSrTCJINnnGQ8fsH8'
    }
  );

  getAllEntries(){
    this.client.getEntries().then(entries => console.log(entries));
    const promise = this.client.getEntries();
    return from(promise);
  }

  getEntryById(id:string){
    const promise = this.client.getEntry(id);
    return from(promise);
  }
}
