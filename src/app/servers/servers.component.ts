import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '.app-servers',
  // selector: '[app-servers]',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server>',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  console = console
  logEvent(event: MouseEvent) {
    console.log('Event Type:', event.type);
    console.log('Target:', event.target);
    console.log('Current Target:', event.currentTarget);
    console.log('Coordinates (X, Y):', event.clientX, event.clientY);
    console.log('Shift Key Pressed:', event.shiftKey);
    console.log('Full Event Object:', event);
    
    // Cast to HTMLElement to access specific properties
    const element = event.target as HTMLElement;
    console.log('Element ID:', element.id);
    console.log('Element Class:', element.className);
    console.log('Element Text:', element.textContent);
  }


  allowServer = false
  serverCreationStatus =  'No server was created'
  constructor() {
    setTimeout(()=> {
      this.allowServer = true
    }, 2000)
  }

  serverCreated = false
  onCreateServer() {
    this.serverCreated = true
    this.serverCreationStatus = 'server was created'
  }

  serverName = ''
  onUpdateServer(event: Event) {
     this.serverName = (<HTMLInputElement> event.target).value
  }
}
