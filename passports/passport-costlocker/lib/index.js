// Vendor.
const OAuth2Strategy = require('passport-oauth2');

/**
 * Costlocker Passport.js strategy.
 */
class CostlockerStrategy extends OAuth2Strategy {
  /**
   * Init the strategy.
   */
  constructor({
    costlockerURL = 'https://new.costlocker.com',
    ...options
  }, verify) {
    super({
      authorizationURL: `${costlockerURL}/api-public/oauth2/authorize`,
      tokenURL: `${costlockerURL}/api-public/oauth2/access_token`,
      ...options,
    }, verify);

    // Strategy identifier.
    this.name = 'costlocker';

    // Costlocker server URL.
    this.costlockerURL = costlockerURL;

    // Make sure `this` is what we actually need.
    this.userProfile = this.userProfile.bind(this);
  }

  /**
   * Additional params for the authorization request.
   */
  authorizationParams(options) {
    return {
      state: options.getState ? options.getState() : Math.random(),
    };
  }

  /**
   * User profile retrieval.
   */
  async userProfile(accessToken, done) {
    // Required headers.
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    // Get the profile.
    this._oauth2._request('GET', `${this.costlockerURL}/api-public/v2/me`, headers, '', '', (err, body) => {
      // An error has occurred.
      if (err) {
        return done(err, null);
      }

      // Everything's fine — return the data.
      return done(null, JSON.parse(body).data);
    });
  }
}

// Expose constructor.
module.exports = CostlockerStrategy;
