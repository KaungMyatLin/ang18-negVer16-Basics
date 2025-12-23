import { Component } from '@angular/core'


@Component({
    selector: 'app-server',
    templateUrl: './server.cpn.html'
    ,styles: [`
        .dynAddRmClsOnline {
            color: green
        }
    `]
})
export class serverCpn {
    serverId = 10
    serverStatus = 'online'
}