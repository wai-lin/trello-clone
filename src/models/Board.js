import { Model } from '@vuex-orm/core';
import shortid from 'shortid';
import List from './List';

export default class Board extends Model {
  static entity = 'boards';

  static primaryKey = '_id';

  static fields() {
    return {
      _id: this.uid(() => shortid.generate()),
      name: this.string(''),
      // foreign keys
      // relations
      lists: this.hasMany(List, 'board_id'),
    };
  }
}
