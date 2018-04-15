import {Component, OnDestroy} from '@angular/core';
import {Socket} from 'ng-socket-io';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
    mode = new FormControl('over');

    constructor(private socket: Socket) {
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
