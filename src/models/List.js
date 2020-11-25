import { Model } from '@vuex-orm/core';
import shortid from 'shortid';
import Board from './Board';
import Card from './Card';

export default class List extends Model {
  static entity = 'lists';

  static primaryKey = '_id';

  static fields() {
    return {
      _id: this.uid(() => shortid.generate()),
      name: this.string(''),
      // foreign keys
      board_id: this.string(''),
      // relations
      board: this.belongsTo(Board, 'board_id'),
      cards: this.hasMany(Card, 'list_id'),
    };
  }
}
