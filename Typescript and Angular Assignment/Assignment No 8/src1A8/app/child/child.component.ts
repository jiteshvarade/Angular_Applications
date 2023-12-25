import { Component, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  @Output() Emitter_obj = new EventEmitter();

  public Message : any = "";

  public MessageSent() 
  {
    this.Emitter_obj.emit(this.Message);
  }
}
