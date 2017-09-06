'use strict';

const DBus = require('dbus-as-promised');

module.exports = NetworkManager => {
  class AccessPoint extends DBus.InterfaceWrapper {
    static connect(objPath) {
      return NetworkManager._getInterface(
        AccessPoint,
        objPath,
        'org.freedesktop.NetworkManager.AccessPoint');
    }
  }
  
  return AccessPoint;
}