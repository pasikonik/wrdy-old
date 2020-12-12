import { Model } from '@vuex-orm/core'
import Word from '@/models/Word'

export default class List extends Model {
  static entity = 'lists'

  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(''),
      words: this.hasMany(Word, 'list_id'),
    }
  }
}
