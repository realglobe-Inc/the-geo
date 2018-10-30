/**
 * @class TheGeo
 */
'use strict'

const { purge, restore, save } = require('bstorage')
const { get } = require('the-window')

/** @lends TheGeo */
class TheGeo {
  constructor (options = {}) {
    const {
      cacheDuration = 60 * 60 * 1000,
      cacheKey = 'the:geo:cache',
      enableHighAccuracy = false,
      maximumAge = 1000,
      timeout = 30 * 1000,
    } = this
    this.cacheKey = cacheKey
    this.cacheDuration = cacheDuration
    this.enableHighAccuracy = enableHighAccuracy
    this.maximumAge = maximumAge
    this.timeout = timeout
  }

  delCache () {
    purge(this.cacheKey)
  }

  getCache () {
    const cached = restore(this.cacheKey)
    const valid = !!cached && (cached._at < this.cacheDuration)
    if (valid) {
      const { _at, ...data } = cached
      return data
    }

    return null
  }

  isSupported () {
    const geolocation = get('navigator.geolocation')
    return !!geolocation
  }

  setCache (data) {
    save(this.cacheKey, { ...data, _at: Number(new Date()) })
  }

  /**
   * Detect current geo location
   * @param {Object} options - Optional settings
   * @returns {Promise<*>}
   */
  async detect (options = {}) {
    const { force = false } = options
    const cached = this.getCache()
    if (cached && !force) {
      return { ...cached }
    }
    const fromGeolocation = await this.detectFromGeolocation()
    if (!fromGeolocation) {
      return null
    }
    const { latitude: lat, longitude: lng } = fromGeolocation
    const data = { lat, lng }
    this.setCache(data)
    return data
  }

  async detectFromGeolocation () {
    const {
      enableHighAccuracy,
      maximumAge,
      timeout,
    } = this
    const geolocation = get('navigator.geolocation')
    if (!geolocation) {
      return null
    }
    return new Promise((resolve, reject) => {
      geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy,
        maximumAge,
        timeout,
      })
    }).then(result => result.coords)
  }
}

module.exports = TheGeo
