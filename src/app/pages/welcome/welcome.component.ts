import { Component, OnInit, signal,computed} from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

 count = signal<number>(0);
list = signal<string[]>(["adem",'sinem']);
messages = signal<object[]>([{message: 'Hello World!'}]);
newCount = computed(()=> this.count() * 2);

  constructor() { }

  ngOnInit() { }

 increment(){
  this.count.update((value)=> value+1);
    this.list.update((value:any)=> [...value, 'increment']);
  //this.messages.mutate((values:any) => values[0].message = 'Hello Signals!');
  }
  decrement(){
    this.count.update((value)=> value-1);
   this.list.update((value:any)=> [...value, 'decrement']);
    }

}
