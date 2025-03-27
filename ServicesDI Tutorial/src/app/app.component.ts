import { Component, OnInit } from '@angular/core';
import { MessagesService } from './services/messages.service';
import { Post } from './interfaces/posts.interface';
import { LatestPrices, OrderBook, Student } from './interfaces/data.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessagesService],
})
export class AppComponent implements OnInit {
  messages: string[] = [];
  posts: Post[] = [];
  constructor(private messagesService: MessagesService) {
    this.messages = messagesService.getMessages();
  }

  ngOnInit() {

    /*
         this.messagesService.getPosts().subscribe(response => {
          this.posts = response;
        }, (error) => {
          console.error(error);
        });
    */
    this.messagesService.getPosts().subscribe({
      next: (response: Post[]) => {
        this.posts = response;
      },
      error: (error) => { console.error(error); }
    });

    this.messagesService.getLanguages().subscribe({
      next: (languages: Array<string>) => {
        console.log(languages);['Java', 'C#', 'Python']
      },
    });

    this.messagesService.getStudent().subscribe({
      next: (student: Student) => {
        console.log(student);
      },
    });

    this.messagesService.getBookOrders().subscribe({
      next: (bookOrders: OrderBook) => {
        console.log(bookOrders);
      },
    });

    this.messagesService.getLatestPrices().subscribe({
      next: (latestprices: LatestPrices) => {
        console.log(latestprices);
      },
    });


  }

  title = 'ServicesDI';
}
