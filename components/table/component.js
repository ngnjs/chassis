module.exports = (function () {
	let _private = new WeakMap()

	return class {
		constructor	(chassis) {
			_private.set(this, {chassis})

			this.resetType = 'block'
		}
	}
})()
