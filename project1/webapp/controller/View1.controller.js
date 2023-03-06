sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("skybfr.mfa.cardproject.controller.Card", {
            onInit: function () {


            },
            onButtonPress: function (eve) {
                //var oText = eve.getSource().getText();
                var oInput1 = this.getview().byId("input1").getValue();
                var oInput2 = this.getView().byId("input2").getValue();
                MessageToast.show(Number(oInput1) + Number(oInput2));

            },
            onaddPress: function (eve) {
                //  var oText = eve.getSource().getText();
                var oInput1 = this.getView().byId("input1").getValue();
                var oInput2 = this.getView().byId("input2").getValue();
                MessageToast.show(Number(oInput1) + Number(oInput2));
            },
            onsubPress: function (eve) {
                //var oText = eve.getSource().getText();
                var oInput1 = this.getView().byId("input1").getValue();
                var oInput2 = this.getView().byId("input2").getValue();
                MessageToast.show(Number(oInput1) - Number(oInput2));
            },
            onmulPress: function (eve) {
                //var oText = eve.getSource().getText();
                var oInput1 = this.getView().byId("input1").getValue();
                var oInput2 = this.getView().byId("input2").getValue();
                MessageToast.show(Number(oInput1) * Number(oInput2));
            },
            ondivPress: function (eve) {
                //var oText = eve.getSource().getText();
                var oInput1 = this.getView().byId("input1").getValue();
                var oInput2 = this.getView().byId("input2").getValue();
                MessageToast.show(Number(oInput1) / Number(oInput2));
            },
            onInputChange: function (eve) {
                var oText = oEvent.getSource().getValue();
                var oIsNotNumber = isNaN(oText);
                if (oIsNotNumber) {
                    oEvent.getSource().setValueState("Error");
                    oEvent.getSource().setValueStateText("Please input a number");
                } else {
                    oEvent.getSource().setValueState("Success");
                    oEvent.getSource().setValueStateText("Success");
                }




            },

            onFibonacciPress: function () {
                var oNumber = this.getView().byId("input3").getValue();
                var oNumber1 = 0, oNumber2 = 1, oSum;
                var oFibbonacci = oNumber1 + "," + oNumber2;
                for (var i = 1; i < oNumber; i++) {
                    oSum = oNumber1 + oNumber2;
                    oFibbonacci = oFibbonacci + "," + oSum;

                    oNumber1 = oNumber2;
                    oNumber2 = oSum;
                }
                MessageToast.show(oFibbonacci);
            },

            onPrimePress: function () {
                var oNum = this.getView().byId("input4").getValue();
                for (var i = 2; i < oNum; i++) {
                    if (oNum % i == 0) {
                        MessageToast.show("It is not a Prime Number");
                        return;
                    } 
                }
                MessageToast.show("It is a Prime Number");
            },

            onArrayPress: function () {
                //var oArr = [];
                var oNumber = this.getView().byId("input5").getValue();
                var oNumber1 = this.getView().byId("input6").getValue();
                var oNumber2 = this.getView().byId("input7").getValue();
                var oNumber3 = this.getView().byId("input8").getValue();
                var oNumber4 = this.getView().byId("input9").getValue();
                var oNumber5 = this.getView().byId("input10").getValue();
                var oArray = [oNumber, oNumber1, oNumber2, oNumber3, oNumber4, oNumber5];
                oArray.sort();

                MessageToast.show(oArray);
            },

            // if(oArray.indexOf(oNumber2) !==-1){
                //     MessageToast.show("Found" + oArray[oArray.indexOf(oNumber2)] + "\nIndex " + oArray.indexOf(oNumber2));

                // }else{
                //     MessageToast.show("Not Found");
                // }

            onBinaryPress: function () {
                var oNumber = this.getView().byId("input11").getValue();
                var oNumber2 = this.getView().byId("input12").getValue();
                var oArray = oNumber.split(",");
                oArray.sort();
                 var oStart=0 , oEnd=oArray.length - 1; //0,1,2,3,4 Array.length = 5 -1
                  
               
                while(oStart<= oEnd){
                    var oMid = Math.floor((oStart + oEnd)/2);
                    if (oArray[oMid]=== oNumber2){
                        MessageToast.show("Item found in Array");
                        return;
                    }

                    if(oNumber2 < oArray[oMid]){
                        oEnd=oMid-1;
                    }

                     else if(oNumber2>oArray[oMid]){
                        oStart= oMid + 1;
                }
            }
            MessageToast.show("Search Item not found in the array");
        }

               
            //     oMid=((oStart+oEnd)/2);
            // MessageToast.show("array found in index: " + oMid);
            // return;
             

            
            // oMid=((oStart+oEnd)/2);
            // MessageToast.show("array found in index: " + oMid);
            // return;
        
        

    

               
                   
                // for (var i = 0; i < oArray.length; i++) {
                //     if (oNumber2 === oArray[i]) {
                //         //var flag = true;
                //         MessageToast.show("array found in index: " + i);
                //         return;
                //     }
                // }
                // //if (!flag) {
                //     MessageToast.show("Array is not found");
                // //}

              
        
    
        });
    });

