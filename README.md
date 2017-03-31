#NativeSettings plugin for Cordova

The plugin allows you to open OS settings on iOS 9, Android and Windows, via
cordova-based app. For example, it will allow you to open the keyboard
settings, Wifi, bluetooth etc (full list below).

##Adding/Removing the Plugin 
It will be saved to the config.xml file

```bash
cordova plugin (add|rm) https://github.com/dualinventive/Cordova-open-native-settings.git --save
```

or via npm (It will be saved to the package.json file)

```bash
npm (install|rm) https://github.com/dualinventive/Cordova-open-native-settings.git --save
```

##Using the plugin (opens Location Settings in Android and Application Settings in iOS)

```
cordova.plugins.settings.open(setting_constant, success_callback, failure_callback);
```

###Example for iOS and Android - open Wifi settings

```js
if (window.cordova && window.cordova.plugins.settings) {
    console.log('openNativeSettingsTest is active');
    window.cordova.plugins.settings.open("wifi", function() {
            console.log('opened settings');
        },
        function () {
            console.log('failed to open settings');
        }
    );
} else {
    console.log('openNativeSettingsTest is not active!');
}
```

##Settings Options
You can use any constant from the following list:

* I tried to map Android, Windows and iOS together, however, they are not always
  the same.
* For Windows there are many more settings you can open, some are
  documented others are not. Feel free to update this list. See here for
  more constants:
    * https://docs.microsoft.com/en-us/windows/uwp/launch-resume/launch-settings-app
    * http://winaero.com/blog/open-various-settings-pages-directly-in-windows-10-anniversary-update/
```
    "about", // ios, windows
    "accessibility", // ios, android
    "account", // ios, android, windows
    "airplane_mode", // ios, android, windows
    "apn", // android
    "application_details", // ios, android
    "application_development", // android, windows
    "application", // android
    "autolock", // ios
    "bluetooth", // ios, android, windows
    "castle", // ios
    "captioning", // android, windows
    "cast", // android
    "cellular_usage", // ios, windows
    "configuration_list", // ios
    "data_roaming", // android
    "date", // ios, android, windows
    "display", // ios, android, windows
    "dream", // android
    "facetime", // ios
    "home", // android
    "keyboard", // ios, android, windows
    "keyboard_subtype", // android
    "locale", // ios, android, windows
    "location", // ios, android, windows
    "lockscreen", // windows
    "manage_all_applications", // android
    "manage_applications", // android
    "memory_card", // android
    "music", // ios
    "music_equalizer", // ios
    "music_volume", // ios
    "network", // ios, android, windows
    "nike_ipod", // ios
    "nfcsharing", // android
    "nfc_payment", // android, windows
    "nfc_settings", // android
    "notes", // ios
    "notification_id", // ios
    "notifications", // windows
    "passbook", // ios
    "phone", // ios, windows
    "photos", // ios
    "print", // android
    "privacy", // android, windows
    "quick_launch", // android
    "reset", // ios
    "ringtone", // ios, windows
    "browser", // ios
    "search", // ios, android
    "security", // android
    "settings", // ios, android, windows
    "show_regulatory_info",
    "sound", // ios, android, windows
    "software_update", // ios, windows
    "storage", // ios, android
    "store", // ios
    "sync", // android, windows
    "tethering", // ios
    "twitter", // ios
    "usage", // ios, android
    "user_dictionary", // android
    "video", // ios
    "voice_input", // android, windows
    "vpn", // ios, windows
    "wallpaper", // ios
    "wifi_ip", // android
    "wifi", // ios, android, windows
    "wireless" // android
```

## Notes

* Android plugin based on the following information: https://developer.android.com/reference/android/provider/Settings.html#ACTION_DREAM_SETTINGS
* iOS plugin based on the following information: https://gist.github.com/phynet/471089a51b8f940f0fb4
* In iOS, this plugin generates a URL scheme for the *-Info.plist configurations file.
* The plugin for Android is based on the forked repository and was refactored. The iOS part was built from scratch.
