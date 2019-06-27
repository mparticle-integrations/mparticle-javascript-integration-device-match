(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	(global = global || self, factory(global['mp-deviceMatch-kit'] = {}));
}(this, function (exports) {
	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var DeviceMatchEventForwarder = createCommonjsModule(function (module) {
	//
	//  Copyright 2016 mParticle, Inc.
	//
	//  Licensed under the Apache License, Version 2.0 (the "License");
	//  you may not use this file except in compliance with the License.
	//  You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	//  Unless required by applicable law or agreed to in writing, software
	//  distributed under the License is distributed on an "AS IS" BASIS,
	//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	//  See the License for the specific language governing permissions and
	//  limitations under the License.

	(function (window) {
	    var name = 'DeviceMatchEventForwarder',
	        moduleId = 109;

	    var constructor = function () {
	        var self = this,
	            isInitialized = false,
	            forwarderSettings = null;

	        self.name = name;

	        function initForwarder(settings,
	            service,
	            testMode,
	            sendForwardingStats,
	            temp,
	            temp1,
	            userAttributes,
	            userIdentities,
	            appVersion,
	            appName,
	            customFlags,
	            clientId) {

	            forwarderSettings = settings;

	            try {
	                if(!testMode) {
	                    var partnerId = forwarderSettings.partnerId,
	                        url = 'https://tapestry.tapad.com/tapestry/1?ta_partner_id=' + partnerId + ' &ta_partner_did=' + clientId + '&ta_format=png;',
	                        body = document.getElementsByTagName('body')[0],
	                        noscript = document.createElement('noscript'),
	                        img = document.createElement('img');

	                    img.src = url;
	                    img.style.display = 'none';
	                    img.setAttribute('height', '1');
	                    img.setAttribute('width', '1');

	                    noscript.appendChild(img);

	                    body.appendChild(noscript);
	                }

	                isInitialized = true;
	                return 'Successfully initialized: ' + self.name;

	            }
	            catch (e) {
	                return 'Can\'t initialize forwarder: ' + self.name + ': ' + e;
	            }
	        }

	        this.init = initForwarder;
	    };

	    function getId() {
	        return moduleId;
	    }

	    function register(config) {
	        if (config.kits) {
	            config.kits[name] = {
	                constructor: constructor
	            };
	        }
	    }

	    if (!window ||
	        !window.mParticle ||
	        !window.mParticle.addForwarder) {

	            return;
	        }

	    window.mParticle.addForwarder({
	        name: name,
	        constructor: constructor,
	        getId: getId
	    });

	    module.exports = {
	        register: register
	    };

	})(window);
	});
	var DeviceMatchEventForwarder_1 = DeviceMatchEventForwarder.register;

	exports.default = DeviceMatchEventForwarder;
	exports.register = DeviceMatchEventForwarder_1;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
