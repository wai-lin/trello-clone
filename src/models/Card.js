import { Model } from '@vuex-orm/core';
import shortid from 'shortid';
import List from './List';

export default class Card extends Model {
  static entity = 'cards';

  static primaryKey = '_id';

  static fields() {
    return {
      _id: this.uid(() => shortid.generate()),
      name: this.string('Untitled'),
      description: this.string(null).nullable(),
      // foreign keys
      list_id: this.string(''),
      // relations
      list: this.belongsTo(List, 'list_id'),
    };
  }
}
