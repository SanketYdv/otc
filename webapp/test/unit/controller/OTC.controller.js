/*global QUnit*/

sap.ui.define([
	"comcg.zotc./zotc/controller/OTC.controller"
], function (Controller) {
	"use strict";

	QUnit.module("OTC Controller");

	QUnit.test("I should test the OTC controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
