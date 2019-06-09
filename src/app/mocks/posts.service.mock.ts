import { Injectable } from '@angular/core';
import { from, Observable} from 'rxjs';

const input: any[][] = [[
  {
    payload: {
      doc: {
        id: 'id',
        data: () => {
          return {
            title: 'title',
            text: 'text',
            user: 'user'
          };
        }
      },
    }
  }
]];

@Injectable()
export class PostsServiceMock {

  constructor() {
  }

  getPosts(): Observable<any> {
    return from(input);
  }
}
