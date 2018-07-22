class ChassisButtonComponent {
  constructor (chassis) {
    this.chassis = chassis
    this.resetType = 'inline-block'
  }

  get variables () {
    let { settings, typography, utils } = this.chassis
    let { fontSize, lineHeight } = settings.typography.ranges.first.typography.root

    let lineHeightMultiplier = utils.unit.pxToEm(lineHeight, fontSize)

    return {
      'icon-offset': `translateX(-${(typography.calculateInlinePaddingX(lineHeightMultiplier) / 2) - utils.unit.pxToEm(fontSize / (settings.typography.scaleRatio * 10), fontSize)}em)`,
      'pill-padding-x': `${settings.typography.scaleRatio}em`,
      'pill-border-radius': `${lineHeightMultiplier}em`
    }
  }
}

module.exports = ChassisButtonComponent