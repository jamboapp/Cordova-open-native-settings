/*
 * PhoneGap is available under *either* the terms of the modified BSD license *or* the
 * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.
 *
 * Copyright (c) 2005-2010, Nitobi Software Inc.
 * Copyright (c) 2011, IBM Corporation
 */

function open(successCallback, errorCallback, uriToLaunch) {
    var aliases = {
        'account': 'privacy-accountinfo',
        'airplane_mode': 'network-airplanemode',
        'application_development' : 'developers',
        'captioning': 'easeofaccess-closedcaptioning',
        'cellular_usage': 'datausage',
        'date': 'dateandtime',
        'display': 'screenrotation',
        'keyboard': 'easeofaccess-keyboard',
        'locale': 'regionlanguage',
        'location': 'privacy-location',
        'nfc_payment': 'nfctransactions',
        'ringtone': 'sounds',
        'settings': '',
        'sound': 'sounds',
        'software_update': 'windowsupdate',
        'voice_input': 'speech',
        'vpn': 'network-vpn',
        'wifi': 'network-wifi'
    };

    if (uriToLaunch in aliases) {
        uriToLaunch = aliases[uriToLaunch];
    }

    // Create a Uri object from a URI string
    var uri = new Windows.Foundation.Uri('ms-settings:' + uriToLaunch);

    // Launch the URI
    Windows.System.Launcher.launchUriAsync(uri).then(
        function (success) {
            if (success) {
                // URI launched
                successCallback();
            } else {
                // URI launch failed
                errorCallback();
            }
        });
}

module.exports = {
    open: open
};

require("cordova/exec/proxy").add("NativeSettings", module.exports);