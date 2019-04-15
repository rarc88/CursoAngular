import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

//HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class FrameworksService {

  //HTTP
  DB = 'https://cursoangular-as2612rc.firebaseio.com';

  constructor(private db:AngularFireDatabase, private http: HttpClient) { }

  public getFrameworks() {
    return this.http.get(this.DB+'/frameworks.json');
    //return this.db.list('frameworks/');
  }

  public getFramework(id:number) {
    return this.http.get(this.DB+'/frameworks/'+id+'.json');
    //return this.db.object('frameworks/'+id);
  }

  public createFramework(framework:any) {
    try {
      //HTTP
      const headers = new HttpHeaders({"Content-Type":"application/json"});
      return this.http.post(
        this.DB+'/frameworks.json',
        framework,
        { headers }
      ).subscribe();

      //this.db.database.ref('frameworks/'+framework.id).set(framework);
      //alert('Saved in FireBase');
    } catch(error) {
      console.log('Error: '+error);
    }
  }

}
