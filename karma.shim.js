"use strict";

var Core = require('@angular/core');
var CoreTesting = require('@angular/core/testing');
var PlatformBrowser = require('@angular/platform-browser');
var Testing = require('@angular/platform-browser-dynamic/testing');

CoreTesting.TestBed.initTestEnvironment(
  Testing.BrowserDynamicTestingModule,
  Testing.platformBrowserDynamicTesting()
);
