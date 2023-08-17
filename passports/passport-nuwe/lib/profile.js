/**
 * Parse profile.
 *
 * @param {Object|String} json
 * @return {Object}
 * @api private
 */
exports.parse = function(json) {
  if ('string' == typeof json) {
    json = JSON.parse(json);
  }
  
  var profile = {};
  profile.id = String(json.user.id);
  profile.displayName = json.user.profile.first_name + ' ' + json.user.profile.last_name;
  profile.name = { familyName: json.user.profile.last_name,
                   givenName: json.user.profile.first_name };
  profile.emails = [{ value: json.user.email }];
  
// Health Stuff
  // Current Body Mass Index
  profile.bmi = json.user.bmi;

  // Current Height and Weight
  profile.height = json.user.height;
  profile.weight = json.user.weight;
  
  // User Nuwe Scores
  profile.nuscore = json.user.nu_score.score;
  profile.biometric_score = json.user.biometric_score.score;
  profile.activity_score = json.user.activity_score.score;
  profile.nutrition_score = json.nutrition_score.score;

  // User Images
  profile.avatar_tiny = json.user.profile.avatar.tiny;
  profile.avatar_small = json.user.profile.avatar.small;
  profile.avatar_medium = json.user.profile.avatar.medium;

  return profile;
};


// {
//    "user":{
//       "id":4370,
//       "email":"diamond.cummerata@corwin.net",
//       "bmi":"25.867545346578",
//       "weight":"80000.0",
//       "height":"1880.0",
//       "bpm":"120.0",
//       "blood_pressure":"110/90",
//       "nu_score":{
//          "score":88,
//          "freshness":null
//       },
//       "biometric_score":{
//          "score":null,
//          "freshness":null
//       },
//       "activity_score":{
//          "score":700,
//          "freshness":49
//       },
//       "nutrition_score":{
//          "score":999,
//          "freshness":12
//       },
//       "nutrition":{
//         "personalised_gda":{
//           "kcal":{
//             "g":"1924.0",
//             "kcal":"1924.0"},
//           "protein":{
//             "g":"65.548039215686274509803921569",
//             "kcal":"267.436"},
//           "fibre":{
//             "g":24,"kcal":0},
//           "carbs":{
//             "g":"200.618090452261306532663316583",
//             "kcal":"798.46"},
//           "fat_u":{
//             "g":"43.570403587443946188340807175",
//             "kcal":"388.648"},
//           "fat_s":{
//             "g":"17.471300448430493273542600897",
//             "kcal":"155.844"},
//           "salt":{
//             "g":6,
//             "kcal":0},
//           "sugar":{
//             "g":"78.796984924623115577889447237",
//             "kcal":"313.612"}
//           }
//         },
//       "profile":{
//          "first_name":null,
//          "last_name":null,
//          "sex":null,
//          "birth_date":null,
//          "activity":2,
//          "facebook_id":null,
//          "time_zone":"Europe/Sofia",
//          "avatar":{
//             "tiny":"https://api.nuapi.co/system/profiles/avatars/000/001/837/tiny/avatar.jpg?1399388433",
//             "small":"https://api.nuapi.co/system/profiles/avatars/000/001/837/small/avatar.jpg?1399388433",
//             "medium":"https://api.nuapi.co/system/profiles/avatars/000/001/837/medium/avatar.jpg?1399388433"
//          }
//       },
//       "tokens":[
//          {
//             "id":"e43cca13-9ba8-4581-b996-7894b3504d14",
//             "scope":"api",
//             "created_at":"2014-05-06T15:00:33.431Z"
//          }
//       ],
//       "preferences":[
//          {
//             "name":"units",
//             "value":"metric"
//          }
//       ]
//    }
// }