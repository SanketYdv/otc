sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel) {
		"use strict";

		return Controller.extend("com.cg.zotc.zotc.controller.OTC", {
			onInit: function () {
            var ShipmentData = 
			{
	       orderData: [
               {
			orderno: "111111",
            orderline: "2368",
            customerno:"10001",
            customer:"apple",
            ordervalue:"189000",
            materialNum:"1401",
            materialgroup:"Group 1",
            schedulelineno:"1",
            schedulelineorder:"10",
            scheduleconfirm:"10",
            schedulecofirmdate:"20.02.2021",
            plannedpgidate:"21.11.2021",
            actualpgidate:"20.10.2021",
            shippedduedate:"19.12.2021",
            shippedcount:"13",
            readycount:"14",
            plant:"4804"
		},
		{
			orderno: "111112",
            orderline: "2567",
            customerno:"10002",
            customer:"IBM",
            ordervalue:"189024",
            materialNum:"1402",
            materialgroup:"Group 3",
            schedulelineno:"5",
            schedulelineorder:"13",
            scheduleconfirm:"14",
            schedulecofirmdate:"25.02.2021",
            plannedpgidate:"21.11.2021",
            actualpgidate:"2.10.2021",
            shippedduedate:"9.12.2021",
            shippedcount:"14",
            readycount:"16",
            plant:"4806"
		}
	]
};
var oModel = new JSONModel(ShipmentData);
this.getView().byId("idtablescreen").setModel(oModel);

            },
              filterGlobally:function(oEvent){
           var thateq = this;
    var aFilters = [];
    	var sQuery = oEvent.getParameter("query");
    	var oFilter = new sap.ui.model.Filter("orderno", sap.ui.model.FilterOperator.Contains,sQuery);
        aFilters.push(oFilter);
        var oFilter1 = new sap.ui.model.Filter("orderline", sap.ui.model.FilterOperator.Contains,sQuery);
        aFilters.push(oFilter1);
         var oFilter2 = new sap.ui.model.Filter("customerno", sap.ui.model.FilterOperator.Contains,sQuery);
        aFilters.push(oFilter2);
        	var fFilters = new sap.ui.model.Filter({
						filters: aFilters,
						and: false
					});
        var oBinding = thateq.getView().byId("idtablescreen");
	oBinding.getBinding().filter(fFilters, "Application");
      },
      pressApply:function(){
        var thateq = this;
	    var sColumnCount = thateq.getView().byId("idfixcol").getValue() || 0;
        var iColumnCount = parseInt(sColumnCount);
        var table = thateq.getView().byId("idtablescreen");
        table.setFixedColumnCount(iColumnCount);
        
      },
		});
	});
