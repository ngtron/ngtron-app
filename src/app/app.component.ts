import {Component, OnDestroy} from '@angular/core';
import {Socket} from 'ng-socket-io';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
    info = {
        appName: 'NgTron',
        version: '1.0.0'
    };

    constructor(private socket: Socket) {
        socket.fromEvent('_info').subscribe((_info: any) => {
            this.info.appName = _info.name;
            this.info.version = _info.version;
        });
        socket.fromEvent('_ping').subscribe(ping => {
            setTimeout(() => {
                socket.emit('_pong', {'ping': new Date().toLocaleString()});
            }, 5000);
            console.log('ping', ping);
        });
    }

    ngOnDestroy() {
        this.socket.disconnect();
    }
}
