module.exports = (function() {
	let _ = new WeakMap()

	return class {
		constructor (chassis) {
			_.set(this, {chassis})
		}

		'component-reset' () {
			let { settings, utils } = _.get(this).chassis
	    let { atRule, args, nodes } = arguments[0]

			let type = args[0]
			let list = settings.componentResetSelectorLists[type]

			if (list.length > 0) {
				atRule.replaceWith(utils.css.newRule(list, nodes))
				return
			}

			atRule.remove()
		}

		process (data) {
			if (data.mixin in this) {
				this[data.mixin](data)
				return
			}

			console.error(`[ERROR] Chassis Post-Processing: Mixin "${data.mixin}" not found.`)
		}
	}
})()
