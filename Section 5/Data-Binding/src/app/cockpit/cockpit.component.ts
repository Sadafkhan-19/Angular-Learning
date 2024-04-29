import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, sereverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string, sereverContent:string}>();;
 
  newServerName = '';
  newServerContent = '';
constructor() {}

ngOnInit() {}

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName, 
      sereverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName, 
      sereverContent: this.newServerContent});
}
}
