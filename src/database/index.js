import { Database } from '@vuex-orm/core';
import Board from '../models/Board';
import Card from '../models/Card';
import List from '../models/List';

const database = new Database();

database.register(Board);
database.register(List);
database.register(Card);

export default database;
