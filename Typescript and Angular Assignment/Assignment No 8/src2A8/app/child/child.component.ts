import { Component, Input, EventEmitter, Output} from '@angular/core';
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
 @Input() public AcceptMessageChild : any = "";
 @Output() public Emitter_obj : any = new EventEmitter();

 public fun() : void
 {
  this.Emitter_obj.emit("Hello from Child");
 }
}
