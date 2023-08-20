var url = require('url'),
    idps = {

      'itlab': {
        entityID:     'https://weblogin.itlab.stanford.edu/idp/shibboleth',
        description:  'Stanford IT Lab IdP V3', 
        entryPoint:   'https://login.itlab.stanford.edu/idp/profile/SAML2/Redirect/SSO',
        cert:         [
          'MIIDVzCCAj+gAwIBAgIUZn2ik8sAxxolY3yWAiMEI8BvhlswDQYJKoZIhvcNAQEL',
          'BQAwJjEkMCIGA1UEAwwbd2VibG9naW4uaXRsYWIuc3RhbmZvcmQuZWR1MB4XDTE2',
          'MDQxMjIzNTE0NloXDTM2MDQxMjIzNTE0NlowJjEkMCIGA1UEAwwbd2VibG9naW4u',
          'aXRsYWIuc3RhbmZvcmQuZWR1MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKC',
          'AQEAo+kp4ulof1snw/+0FsjKlUgZkErKhfgI39g/xB5ZXlKbK5f0f3frvzaT+J+h',
          'RrlROf4rjtYzJA/n/QGRImfjg24jI6dILOzZnV9pLmilntqJhPN9SgoBVQp/N0sl',
          'MXVu3vwVAzhVs0y61CQCmG3EI5xCwHuiMPgf8qNeGUX+ilb8GU0xtoBALG+S+v12',
          'BefNtPzU7pnuf4yx8HfOX64nCsLf1bqeaFust5W4XRSxBvIeGZRs3/6i3+/FrbMQ',
          'pZS7c9EeXDZ720SYTJjGcKO9NdfeHoluIJPjHmveejeQtzOwWqdq1NvyyQh33nAM',
          'zfSAgVYiPQ+TFT5ouMmA7ZcFlQIDAQABo30wezAdBgNVHQ4EFgQUyEXYaofjFhkc',
          '0musYcKHCw4R6PUwWgYDVR0RBFMwUYIbd2VibG9naW4uaXRsYWIuc3RhbmZvcmQu',
          'ZWR1hjJodHRwczovL3dlYmxvZ2luLml0bGFiLnN0YW5mb3JkLmVkdS9pZHAvc2hp',
          'YmJvbGV0aDANBgkqhkiG9w0BAQsFAAOCAQEAbPdOcVvylLYSszmLA6PluxeLRLmk',
          'UEx05akEKaLSX+WOe8DDnZuA4I8Xh9zPM//t+g0B037btF/cpccCQlPYONYQcTA+',
          '24UIhgqZcOTtFr9pphD2xWdjkzQooIKwEnQEjM50BGVTfZYj3+eUN2rJw/gjKVR5',
          'hZejZMc4aZXcObg12/rFISzEtHAtRU+oBcNWnMADNiIRHEBsKwzSucH+Hmn8faeY',
          't/8HLLLtVeXmZSL80UNl1vpmTXCz/SMRU6QlTttyhKlNS/scmNc9fzJjiyGPFvmg',
          'jyAD3XPzS1BJ6xEJJII5e86zpoKISHoFA8AA1uW8N3uuB4RqL2Mr55moeA==',
        ].join(' ')
      },

      'dev': {
        entityID:     'https://idp-dev.stanford.edu/',
        description:  'Stanford University Development IdP',
        entryPoint:   'https://login-dev.stanford.edu/idp/profile/SAML2/Redirect/SSO',
        cert:         [
          'MIIDvTCCAqWgAwIBAgIJAJ92DcTnMwPtMA0GCSqGSIb3DQEBCwUAMHUxCzAJBgNV',
          'BAYTAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlhMREwDwYDVQQHDAhTdGFuZm9yZDEf',
          'MB0GA1UECgwWQWRtaW5pc3RyYXRpdmUgU3lzdGVtczEdMBsGA1UEAwwUaWRwLWRl',
          'di5zdGFuZm9yZC5lZHUwHhcNMTQxMjAxMjE1NjQxWhcNMjQxMTMwMjE1NjQxWjB1',
          'MQswCQYDVQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTERMA8GA1UEBwwIU3Rh',
          'bmZvcmQxHzAdBgNVBAoMFkFkbWluaXN0cmF0aXZlIFN5c3RlbXMxHTAbBgNVBAMM',
          'FGlkcC1kZXYuc3RhbmZvcmQuZWR1MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIB',
          'CgKCAQEAwV1Z6ePsQUGvrns6plDY0As6N1l2WmKIjpF7csKVILJuGrXN7A0xkMML',
          'Ib0mwHv3riL/ufsuZxeXOa4s49L3a3NYnkHfpmii1n3DduGY08sEVow7wBxs1Tu8',
          'gssE/sqNCIBY/j2CxJfLmbTgUhev95MQxgEYUE77xRLWuRnJjws/d3Azb9JBQlmu',
          'xXM7vf8BAIG/+1eunXkjRyzFphuJK+YrImI56l0gTOdTYvzsRP614sZ0YAXa4pJq',
          'phDCapXmVUJgOg8EXC9Hdlg6iN2qOzjYooH1MkpE/vyUZCkDA/rhHkumpnEgvZwD',
          'PJpe+5o4sPMBcYZsGEpMLDzprcybDQIDAQABo1AwTjAdBgNVHQ4EFgQUdX/dnGei',
          'OH0BcJCBkVlVYTK3jZkwHwYDVR0jBBgwFoAUdX/dnGeiOH0BcJCBkVlVYTK3jZkw',
          'DAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAQEARgf8AWi+dHfGHbgrJdYL',
          '6avhaK+X5hWCecXTK7pK4ylHsetc3Os8YcyioFKN+UJ3rLfm6Ldl7M1AqgA6rNHJ',
          '/K65L4NHLnW+d8rQYqPPQNKg3uksuRBTf7OcrlVbmBOjWNoZe7SBTZ2s/rbprzdB',
          '+x0rfY9wGuTEYNpV0KYINbUIQdQbNp4Ccn4xiOuOhdAJtv/xgb4NlnRLsh3xctZ3',
          'gh1rgq2lcu8gRVrQbrCcx9EnfTK2qMKBLkdxdsWXq8j+yXZ27B7Wxvf8pH32JtIB',
          '6wRJeFBVf0B3GZtQ8aPhik245oh2HX4VuFoyeGUbzHGcS6xQRMWFrxNF2aSBW1Ld',
          '7w=='
        ].join(' '), 
      },

      'uat': {
        entityID:     'https://idp-uat.stanford.edu/',
        description:  'Stanford University UAT IdP',
        entryPoint:   'https://login-uat.stanford.edu/idp/profile/SAML2/Redirect/SSO',
        cert:         [
          'MIIDzDCCArQCCQCdJebZPEsQBzANBgkqhkiG9w0BAQsFADCBpzELMAkGA1UEBhMC',
          'VVMxEzARBgNVBAgMCkNhbGlmb3JuaWExETAPBgNVBAcMCFN0YW5mb3JkMRwwGgYD',
          'VQQKDBNTdGFuZm9yZCBVbml2ZXJzaXR5MTMwMQYDVQQLDCpBdXRoZW50aWNhdGlv',
          'biBhbmQgQ29sbGFib3JhdGlvbiBTb2x1dGlvbnMxHTAbBgNVBAMMFGlkcC11YXQu',
          'c3RhbmZvcmQuZWR1MB4XDTE2MDUyMzIwMTIxMVoXDTI2MDUyMTIwMTIxMVowgacx',
          'CzAJBgNVBAYTAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlhMREwDwYDVQQHDAhTdGFu',
          'Zm9yZDEcMBoGA1UECgwTU3RhbmZvcmQgVW5pdmVyc2l0eTEzMDEGA1UECwwqQXV0',
          'aGVudGljYXRpb24gYW5kIENvbGxhYm9yYXRpb24gU29sdXRpb25zMR0wGwYDVQQD',
          'DBRpZHAtdWF0LnN0YW5mb3JkLmVkdTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCC',
          'AQoCggEBAJlkwhaVvmjhW6EGIATvco0UQntR1p9+XneAU7z08j3CLyjgb5n7qTgn',
          '3piZmENA0y3aD9cvIZ6ixYN8oCGfPTjwMr488cCQsBkvXCoA4O1XThvPsdd5KjQX',
          'y8IAsno6qrYsfeS+nlMgeJhHVPRRFkos+JUs0LGYHK/vZdMpIVYhDbH3udwjMP9O',
          'Qf4h1HCr4zy2n/XWg3GO9AyKq50ibTogOZy0wQr7gp1+l5RW0hXG1IYShbu57MaI',
          'TtsUZUMUJZGGGeEBYANWelJ8TnXvOJt0ZqLeULJSgCS8EyKQM4Ty5Qy7cbTVN8zP',
          'aPne4smCvpeAHxyaCqx3z6XXBgKutDcCAwEAATANBgkqhkiG9w0BAQsFAAOCAQEA',
          'DxXtRxiUAd9brr55fv0gxMFNTE7ayZh5BWFgukOvMyS0H1ces7NmiqoDJR3uMc7P',
          '1zdudiAoO4tlRGnMm9FA5eE8Rhm8WEPvwdaGcoiIu80yPXPHWx+7sBy4mAc4llrO',
          'AYwCbXM0E6jLh4Y068j+mLmzYzkW6Ro7mImTyGNYNWJUr3jP+79m6Fr0QbC44Giz',
          'S4UszE26axYpmhs2ONQFsOBs1VazgNt/LJfgQXK3MpdRct2vOMIeHSJAw6lJ1rfc',
          'CoS3z3uvz7LPaJdw4ZyDC9i0bQoKvfpi96pOnsc2TE/MMo3JbG2vW8g0G3f9xv5O',
          'PzwNr2FQZzZfjH0wg9dMfQ=='
        ].join(' '),
      },

      'prod': {
        entityID:     'https://idp.stanford.edu/',
        description:  'Stanford University WebAuth',
        entryPoint:   'https://login.stanford.edu/idp/profile/SAML2/Redirect/SSO',
        cert:         [
          'MIIDnzCCAoegAwIBAgIJAJl9YtyaxKsZMA0GCSqGSIb3DQEBBQUAMGYxCzAJBgNV',
          'BAYTAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlhMREwDwYDVQQHDAhTdGFuZm9yZDEU',
          'MBIGA1UECgwLSVQgU2VydmljZXMxGTAXBgNVBAMMEGlkcC5zdGFuZm9yZC5lZHUw',
          'HhcNMTMwNDEwMTYzMTAwWhcNMzMwNDEwMTYzMTAwWjBmMQswCQYDVQQGEwJVUzET',
          'MBEGA1UECAwKQ2FsaWZvcm5pYTERMA8GA1UEBwwIU3RhbmZvcmQxFDASBgNVBAoM',
          'C0lUIFNlcnZpY2VzMRkwFwYDVQQDDBBpZHAuc3RhbmZvcmQuZWR1MIIBIjANBgkq',
          'hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAm6466Bd6mDwNOR2qZZy1WRZdjyrG2/xW',
          'amGEMekg38fyuoSCIiMcgeA9UIUbiRCpAN87yI9HPcgDEdrmCK3Ena3J2MdFZbRE',
          'b6fdRt76K+0FSl/CnyW9xaIlAhldXKbsgUDei3Xf/9P8H9Dxkk+PWd9Ha1RZ9Viz',
          'dOLe2S2iDKc1CJg2kdGQTuQu6mUEGrB9WJmrLHJS7GkGDqy96owFjRL/p0i9KBdR',
          'kgWG+GFHWkxzeNQ99yrQra3+C9FQXa/xLCdOY+BGOsAG7ej4094NZXRNTyXui4jR',
          'WCm2GVdIVl7YB9++XSntS7zQEJ9QBnC1D4bS0tljMfdOGAvdUuJY7QIDAQABo1Aw',
          'TjAdBgNVHQ4EFgQUJk4zcQ4JupEcAp0gEkob4YRDkckwHwYDVR0jBBgwFoAUJk4z',
          'cQ4JupEcAp0gEkob4YRDkckwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC',
          'AQEAKvf9AO4+osJZOmkv6AVhNPm6JKoBSm9dr9NhwpSS5fpro6PrIjDZDLh/L5d/',
          '+CQTDzuVsw3xwDtlm89lrzbqw5rSa2+ghJk79ijysSC0zOcD6ka9c17zauDXmFx9',
          'lj9iddUw3aYHQcQRktWL8pvI2WCY6lTU+ouNM+owStya7umZ9rBdjg/fQerzaQxF',
          'T0yV3tYEonL3hXMzSqZxWirwsyZ0TnhWJsgEnqqG9tCFAcFu2p+glwXn1WL2GCRv',
          'BfuJMPzg7ZB419AEoeYnLktqAWiU+ISnVfbwFOJ+OM/O7VQOeHDm2AeYcwo12CAc',
          '4GC9KWTs3QtS3GREPKYDlHRNxQ=='
        ].join(' '),
      }
    };

// entityID as alias
Object.keys(idps).forEach(function (k) {
  var idp = idps[k],
      hostname = url.parse(idp.entityID).hostname;

  idps[idp.entityID] = idp;
  idps[hostname] = idp;
  idps[hostname.replace(/\.stanford\.edu$/, '')] = idp;
});

// create a 'stanford' alias for the production IdP
idps['stanford'] = idps['prod'];

module.exports = idps;
