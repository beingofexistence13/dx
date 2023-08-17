
/*
 *  eHT WAAD graph api layer.
 *
 *  Azure graph api provider for user and group data.
 *
 */
'use strict';
var req = require("request");

var graphApi = function(options) { 
}

graphApi.prototype.getAADToken = function(tenant_domain, clientId, key, callback) {
    
    var options = {
        url: "https://login.windows.net/" + tenant_domain + "/oauth2/token?api-version=1.0",
        method: 'POST',
        form: {
            grant_type: "client_credentials",
            resource: "https://graph.windows.net",
            client_id: clientId,
            client_secret: key
        }
    };
    
    req(options, function (err, resp, body) {
        if (err || resp.statusCode !== 200) callback(err, null);
        else callback(null, JSON.parse(body).access_token);
    });
}

graphApi.prototype.getGroups = function getGroups(tenant_domain, access_token, oid, callback) {

    var options = {
        url: "https://graph.windows.net/" + tenant_domain + "/users/" + oid +
            "/memberOf?api-version=2013-04-05",
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + access_token,
			"Content-Type": "application/json;streaming=true;charset=utf-8",
        }
    };
    
    req(options, function (err, resp, body) {
        
        if (err || resp.statusCode !== 200) callback(err, null);
        else {
            callback(null, JSON.parse(body).value);
        }
    });
};
graphApi.prototype.getUser = function getUser(tenant_domain, access_token, email, callback) {

    // either email is the principle name or alternately, for external acts
    // M# users the other mails field.
    // userPrincipalName eq 'Mary@Contoso.com' or otherMails/any(c:c eq 'Mary@Contoso.com')
    var options = {
        url: "https://graph.windows.net/" + tenant_domain + "/users" + 
            "?api-version=2013-04-05&$filter=" +
            "userPrincipalName eq '" + email + "' or otherMails/any(c:c eq '" + email +"')",
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + access_token,
			"Content-Type": "application/json;odata=minimalmetadata;streaming=true;charset=utf-8",
        }
    };
    
    req(options, function (err, resp, body) {
        
        if (err || resp.statusCode !== 200) callback(err, null);
        else {
            
            // There is some fun remapping to do here courtesy of wierd
            // graph api behaviour.
            var adData = JSON.parse(body).value;
            if (adData.length == 1) { 

                // Now we need the users groups.
                graphApi.prototype.getGroups(
                    tenant_domain, 
                    access_token, 
                    adData[0].objectId,  // nul?
                    
                    function(err, adGroupData) { 
                        
                        adData[0].groups = adGroupData;
                        callback(null, adData[0]);
                }); 
            } else {
                callback('No unique user', null);
            }
        }
    });
};

exports.graphApi = graphApi;

/*

*/