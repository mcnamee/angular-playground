import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { State } from "./state/store/";
import { USERS_ADD } from "./state/actions/users";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular Playground';
  dataSource = [];
  displayedColumns: string[] = ['name', 'title', 'dob', 'image', 'phone', 'gender', 'country'];

  constructor (private store:Store<State>) {
    this.subscribe(store);
    // this.fetchUsers();
    this.dummyData();
  }

  /**
   * Subscribe to state changes
   */
  subscribe = (store) => {
    store.select('userReducer')
      .subscribe( (data:State)=> {
        this.dataSource = data.users;
      });
  }

  /**
   * Fetch Data and Send to state
   */
  fetchUsers = () => {
    return fetch('https://randomapi.com/api/7763eb0465b8b8c73537f00b21f0cd79')
      .then(res => res.json())
      .then(json => {
        if (json && json.results[0] && json.results[0].length > 0) {
          this.store.dispatch({ type: USERS_ADD, data: json.results[0] });
        }
      });
  }

  /**
   * Avoiding them API Limits
   */
  dummyData = () => {
    const data = [
      {
        "title": "National Usability Designer",
        "name": "Garland Lesch",
        "gender": "male",
        "country": "Ecuador",
        "phone": "(057) 787-3490 x673",
        "image": "http://lorempixel.com/640/480",
        "dob": "1944-12-03T11:17:31.812Z"
      },
      {
        "title": "Human Accountability Consultant",
        "name": "Anya Stark DDS",
        "gender": "female",
        "country": "Burundi",
        "phone": "940-329-0275",
        "image": "http://lorempixel.com/640/480",
        "dob": "1961-04-30T06:14:43.814Z"
      },
      {
        "title": "Senior Branding Consultant",
        "name": "Robin Yundt",
        "gender": "female",
        "country": "Anguilla",
        "phone": "369-670-1725",
        "image": "http://lorempixel.com/640/480",
        "dob": "1954-05-01T15:11:32.229Z"
      },
      {
        "title": "Customer Configuration Designer",
        "name": "Tess Miller",
        "gender": "female",
        "country": "Brazil",
        "phone": "105.252.2623 x04886",
        "image": "http://lorempixel.com/640/480",
        "dob": "1962-10-18T16:01:11.186Z"
      },
      {
        "title": "Global Brand Supervisor",
        "name": "Aaliyah Koss",
        "gender": "female",
        "country": "Eritrea",
        "phone": "1-291-708-5827 x17548",
        "image": "http://lorempixel.com/640/480",
        "dob": "1978-09-08T14:49:01.916Z"
      },
      {
        "title": "Chief Tactics Supervisor",
        "name": "Chadd Harber",
        "gender": "male",
        "country": "Palau",
        "phone": "070-737-9541 x6469",
        "image": "http://lorempixel.com/640/480",
        "dob": "1955-10-16T14:27:36.350Z"
      },
      {
        "title": "Investor Infrastructure Agent",
        "name": "Geoffrey Emmerich",
        "gender": "male",
        "country": "Cambodia",
        "phone": "599.567.2851",
        "image": "http://lorempixel.com/640/480",
        "dob": "1944-10-27T01:02:02.494Z"
      },
      {
        "title": "Forward Program Analyst",
        "name": "Dion Casper",
        "gender": "female",
        "country": "Kazakhstan",
        "phone": "1-371-619-6446 x351",
        "image": "http://lorempixel.com/640/480",
        "dob": "1946-02-20T19:02:24.343Z"
      },
      {
        "title": "Customer Metrics Manager",
        "name": "Verlie Frami",
        "gender": "female",
        "country": "El Salvador",
        "phone": "565-994-0319 x95293",
        "image": "http://lorempixel.com/640/480",
        "dob": "1961-09-24T15:38:12.954Z"
      },
      {
        "title": "Customer Directives Agent",
        "name": "Janelle Nader",
        "gender": "male",
        "country": "Djibouti",
        "phone": "(711) 207-5050 x87023",
        "image": "http://lorempixel.com/640/480",
        "dob": "1963-08-20T09:32:47.759Z"
      }
    ];

    this.store.dispatch({ type: USERS_ADD, data });
  }
}
