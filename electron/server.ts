import * as http from 'http';
import * as socketio from 'socket.io';
import {Database} from './database';
import chalk from 'chalk';

export class Server {
    database: Database;

    startServices() {
        this.createSocket();
        this.createDatabase();
    }

    createSocket() {
        const app = http.createServer((req, res) => {
            res.end('Please use the NgTron App');
        });
        const io = socketio.listen(app);
        app.listen(3000, () => {
            console.log(chalk.blue('[NgTron]   listen server on port 3000'));
        });

        io.on('connection', (socket) => {
            socket.on('_pong', (pong) => {
                console.log(chalk.blue('[NgTron]   pong'), chalk.green(JSON.stringify(pong)));
                setTimeout(() => {
                    socket.emit('_ping', {'pong': new Date().toLocaleString()});
                }, 5000);
            });
            socket.on('disconnect', () => {
                console.log(chalk.blue('[NgTron]   disconnected'));
            });

            console.log(chalk.blue('[NgTron]   connected'));
            socket.emit('_ping', {'pong': new Date().toLocaleString()});
        });
    }

    createDatabase() {
        this.database = new Database();
    }
}
