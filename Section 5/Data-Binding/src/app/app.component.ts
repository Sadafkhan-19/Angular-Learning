import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name:'Testserver', content:'Just a test'}];
  
  onServerAdded(serverData: {serverName:string, sereverContent:string} ) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.sereverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName:string, sereverContent:string} ) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.sereverContent
    });
  
  }
}
