import Margin from '../margin/Margin.js'
import Padding from '../padding/Padding.js'
import Typeset from '../type/Typeset.js'

export default class Setting {
  #source

  constructor (setRule) {
    this.#source = setRule
  }

  get bounds () {
    return this.#source.bounds
  }

  get margin () {
    let { margin } = this.#source
    return !!margin ? new Margin(margin) : null
  }

  get selector () {
    return this.#source.selector
  }

  get padding () {
    let { padding } = this.#source
    return !!padding ? new Padding(padding) : null
  }

  get selector () {
    return this.#source.selector
  }

  get typeset () {
    let { typeset } = this.#source
    return !!typeset ? new Typeset(typeset) : null
  }
}

// export default class Setting {
//   #root = null
//
//   constructor (atrule) {
//     this.#root = atrule
//     this.source = atrule.source
//     this.bounds = atrule.bounds
//     this.selector = atrule.selector
//     this.margin = atrule.margin
//     this.padding = atrule.padding
//     this.typeset = atrule.typeset
//   }
//
//   get root () {
//     return this.#root
//   }
//
//   replaceWith (nodes) {
//     this.#root.replaceWith(nodes)
//   }
// }