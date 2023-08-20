var defaultMap = 'oid2name',
    maps = {
      oid2name: {
        'urn:oid:0.9.2342.19200300.100.1.1':  'uid',
        'urn:oid:0.9.2342.19200300.100.1.3':  'mail',
        'urn:oid:0.9.2342.19200300.100.1.41': 'mobile',
        'urn:oid:0.9.2342.19200300.100.1.42': 'pager',
        'urn:oid:1.3.6.1.4.1.250.1.57':       'labeledURI',
        'urn:oid:1.3.6.1.4.1.299.11.1.4':     'suDisplayNameLF',
        'urn:oid:1.3.6.1.4.1.299.11.1.9':     'suDisplayAffiliation',
        'urn:oid:1.3.6.1.4.1.299.11.1.11':    'suEmailPager',
        'urn:oid:1.3.6.1.4.1.299.11.1.14':    'suAffiliation',
        'urn:oid:1.3.6.1.4.1.299.11.1.15':    'suMailCode',
        'urn:oid:1.3.6.1.4.1.299.11.1.18':    'suUnivID',
        'urn:oid:1.3.6.1.4.1.299.11.1.19':    'suPrivilegeGroup',
        'urn:oid:1.3.6.1.4.1.299.11.1.21':    'suGivenName',
        'urn:oid:1.3.6.1.4.1.299.11.1.30':    'suUniqueIdentifier',
        'urn:oid:1.3.6.1.4.1.299.11.1.64':    'suOU',
        'urn:oid:1.3.6.1.4.1.299.11.1.204':   'suPrimaryOrganizationName',
        'urn:oid:1.3.6.1.4.1.5923.1.1.1.6':   'eduPersonPrincipalName',
        'urn:oid:1.3.6.1.4.1.5923.1.1.1.1':   'eduPersonAffiliation',
        'urn:oid:1.3.6.1.4.1.5923.1.1.1.6':   'eduPersonPrincipalName',
        'urn:oid:1.3.6.1.4.1.5923.1.1.1.7':   'eduPersonEntitlement',
        'urn:oid:1.3.6.1.4.1.5923.1.1.1.9':   'eduPersonScopedAffiliation',
        'urn:oid:1.3.6.1.4.1.5923.1.1.1.10':  'eduPersonTargetedID',
        'urn:oid:2.5.4.3':                    'cn',
        'urn:oid:2.5.4.4':                    'sn',
        'urn:oid:2.5.4.9':                    'street',
        'urn:oid:2.5.4.10':                   'o',
        'urn:oid:2.5.4.11':                   'ou',
        'urn:oid:2.5.4.12':                   'title',
        'urn:oid:2.5.4.13':                   'description',
        'urn:oid:2.5.4.16':                   'postalAddress',
        'urn:oid:2.5.4.20':                   'telephoneNumber',
        'urn:oid:2.5.4.42':                   'givenName',
        'urn:oid:2.16.840.1.113730.3.1.3':    'employeeNumber',
        'urn:oid:2.16.840.1.113730.3.1.241':  'displayName'
      }
    };

/*
  use an attribute map to add 'aliases' of the original
  attributes with more easily used names.

  map is an object mapping attribute names to new aliases
  profile is the user profile object
  done is a callback
*/
function attrRemapper (map, profile, done) {
  var error = null;

  if (!profile) {
    error = new Error('No SAML attributes returned');
  } else {
    Object.keys(profile).forEach(function (attrName) {
      if (map[attrName]) {
        profile[map[attrName]] = profile[attrName];
      }
    });
  }
  return done(error, profile);
};

/*
   return an instance of attrRemapper bound to a
   specific attribute mapping

   map can be a string identifying a predefined map,
   or undefined to use the default map,
   or custom attribute mapping
*/
module.exports = function attrmap (map) {
  map = map || defaultMap;

  if (typeof map === 'string') {
    if (maps[map]) {
      map = maps[map];
    } else {
      throw new Error('unknown attribute map: ' + map);
    }
  }

  return attrRemapper.bind(null, map);
}

