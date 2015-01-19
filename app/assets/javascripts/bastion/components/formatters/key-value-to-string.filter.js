/**
 Copyright 2014 Red Hat, Inc.

 This software is licensed to you under the GNU General Public
 License as published by the Free Software Foundation; either version
 2 of the License (GPLv2) or (at your option) any later version.
 There is NO WARRANTY for this software, express or implied,
 including the implied warranties of MERCHANTABILITY,
 NON-INFRINGEMENT, or FITNESS FOR A PARTICULAR PURPOSE. You should
 have received a copy of GPLv2 along with this software; if not, see
 http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt.
 **/

/**
 * @ngdoc filter
 * @name  Bastion.components.formatters.filter:keyValueToString
 *
 * @description
 *
 *
 * @example
 *
 */
angular.module('Bastion.components.formatters').filter('keyValueToString', [function () {
    return function (toFormat, options) {
        var keyName, valueName, separator;
        options = options || {};
        keyName = options.keyName || 'keyname';
        valueName = options.valueName || 'value';
        separator = options.separator || ': ';

        if (!(toFormat instanceof Array)) {
            toFormat = [toFormat];
        }

        return _.map(toFormat, function (entry) {
            return [entry[keyName], entry[valueName]].join(separator);
        }).join(', ');
    };
}]);