import { Model } from '@vuex-orm/core'

export default class Word extends Model {
  static entity = 'words'

  static fields() {
    return {
      id: this.attr(null),
      origin: this.attr(''),
      translation: this.attr(''),
      fluency: this.attr(0),
      list_id: this.attr(null),
    }
  }
}
