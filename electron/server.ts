import * as http from 'http';
import * as socketio from 'socket.io';
import {Database} from './database';
import chalk from 'chalk';
import {Config} from './config';

export class Server {
    database: Database;

    startServices() {
        const config = new Config();
        this.createSocket(config);
        this.createDatabase(config);
    }

    createSocket(config: Config) {
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
            socket.emit('_info', {
                'name': config.name,
                'version': config.version
            });
            socket.emit('_ping', {'pong': new Date().toLocaleString()});
        });
    }

    createDatabase(config: Config) {
        this.database = new Database(config);
    }
}
