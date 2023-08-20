// Default in-memory TokenStore

function Token(value, email, options) {
  options = options || {}

  this._expirationDuration = options.expirationDuration;
  this._timestamp = new Date()
  this.value = value
  this.email = email
  
  this.isValid = function() {
    return new Date() - this._timestamp < this._expirationDuration
  }
}

module.exports = {
  createTokenStore: function(options) {
    options = options || {}
    var store = {}
    
    return {
      set: function(value, email, cb) {
        var newToken = new Token(
          value,
          email,
          {expirationDuration: options.expirationDuration || (15 * 60 * 1000)} // 15 minutes
        )

        newToken.destroy = function() {
          if (!!store[value]) {
            delete store[value]
          }
        }

        store[value] = newToken
        cb(null, newToken)
      },
      get: function(value, cb) {
        cb(null, store[value])
      },
    }
  }
}
