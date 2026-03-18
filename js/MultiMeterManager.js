
    let MultiMeterManager = {
        //Properties
        initiated: false,
        offSelectorKnob: {},
        tempSelectorKnob: {},
        microAmpSelectorKnob: {},
        milliAmpSelectorKnob: {},
        tenAmpSelectorKnob: {},
        voltSelectorKnob: {},
        hertzSelectorKnob: {},
        ohmsSelectorKnob: {},
        capDiodeSelectorKnob: {},

        offSelector: {},
        tempSelector: {},
        microAmpSelector: {},
        milliAmpSelector: {},
        tenAmpSelector: {},
        voltSelector: {},
        hertzSelector: {},
        ohmsSelector: {},
        capDiodeSelector: {},
        presentSelectorLabel: "off",

        selRedButton: {},
        selWhiteButton: {},
        selButtonBckgrnd: {},

        //Methods
        changeSetting: function(newSelectorLabel){
            console.log("old Selector = " + this.presentSelectorLabel);
            console.log("new Selector = " + newSelectorLabel);
            this.showHideSelectors(this.presentSelectorLabel);
            this.showHideSelectors(newSelectorLabel);
            /*console.log("newDegrees = " + newDegrees);
            let netRotation = (newDegrees - oldDegrees) + "deg";
            console.log("new rotation = " + netRotation);
            this.selectorKnob.style.transform = 'rotate(' + netRotation + ')';*/
            this.presentSelectorLabel = newSelectorLabel;
        },

        changeSelect: function(){
            this.selRedButton.classList.toggle("hidden-selector");
            console.log("toggling 'hidden-selector' on Red Label");
            this.selWhiteButton.classList.toggle("hidden-selector");
            console.log("toggling 'hidden-selector' on White Label");
        },

        showHideSelectors: function(selectorLabel){
            console.log("in showHideSelectors");
            console.log("selectorLabel = " + selectorLabel);
            switch (selectorLabel){
                case "temp":
                    this.tempSelectorKnob.classList.toggle("hidden-selector");
                    break;
                case "microAmp":
                    this.microAmpSelectorKnob.classList.toggle("hidden-selector");
                    break;
                case "milliAmp":
                    this.milliAmpSelectorKnob.classList.toggle("hidden-selector");
                    break;
                case "tenAmp":
                    this.tenAmpSelectorKnob.classList.toggle("hidden-selector");
                    break;
                case "off":
                    this.offSelectorKnob.classList.toggle("hidden-selector");
                    break;
                case "Volts":
                    this.voltSelectorKnob.classList.toggle("hidden-selector");
                    break;
                case "Hertz":
                    this.hertzSelectorKnob.classList.toggle("hidden-selector");
                    break;
                case "Ohms":
                    this.ohmsSelectorKnob.classList.toggle("hidden-selector");
                    break;
                case "CapDiode":
                    this.capDiodeSelectorKnob.classList.toggle("hidden-selector");
                    break;
                default: console.log("Not an allowable Setting");

            }
        },

        /*clicked: function(selector){
            console.log(selector + " was clicked in upload MultiMeterManager");
        },*/

        init: function(){
            console.log("beginning MultiMeterManager.init()");
           /* this.selectorKnob = document.getElementById("mm-selector-id");
           this.selectorKnob.style.transformOrigin = '50% -20%';*/
            this.offSelectorKnob = document.getElementById("selector-knob-off-id")
            this.capDiodeSelectorKnob = document.getElementById("selector-knob-cap-diode-id");
            this.tempSelectorKnob = document.getElementById("selector-knob-temp-id");
            this.microAmpSelectorKnob = document.getElementById("selector-knob-micro-amp-id");
            this.milliAmpSelectorKnob = document.getElementById("selector-knob-milli-amp-id");
            this.tenAmpSelectorKnob = document.getElementById("selector-knob-ten-amp-id");
            this.voltSelectorKnob = document.getElementById("selector-knob-volts-id");
            this.hertzSelectorKnob = document.getElementById("selector-knob-hertz-id");
            this.ohmsSelectorKnob = document.getElementById("selector-knob-ohms-id");

            this.offSelector = document.getElementById("mm-off-id");
            this.tempSelector = document.getElementById("mm-temp-id");
            this.microAmpSelector = document.getElementById("mm-micro-amp-id");
            this.milliAmpSelector = document.getElementById("mm-milli-amp-id");
            this.tenAmpSelector = document.getElementById("mm-ten-amp-id");
            this.voltSelector = document.getElementById("mm-volts-id");
            this.hertzSelector = document.getElementById("mm-hertz-id");
            this.ohmsSelector = document.getElementById("mm-ohms-id");
            this.capDiodeSelector = document.getElementById("mm-cap-diode-id");

            this.selRedButton = document.getElementById("mm-sel-label-red-id");
            this.selWhiteButton = document.getElementById("mm-sel-label-white-id");
            this.selButtonBckgrnd = document.getElementById("mm-sel-push-button-id");
         
            this.offSelector.addEventListener("click",function(){MultiMeterManager.changeSetting("off")});
            this.tempSelector.addEventListener("click",function(){MultiMeterManager.changeSetting("temp")});
            this.microAmpSelector.addEventListener("click",function(){MultiMeterManager.changeSetting("microAmp")});
            this.milliAmpSelector.addEventListener("click",function(){MultiMeterManager.changeSetting("milliAmp")});
            this.tenAmpSelector.addEventListener("click",function(){MultiMeterManager.changeSetting("tenAmp")});
            this.voltSelector.addEventListener("click",function(){MultiMeterManager.changeSetting("Volts")});
            this.hertzSelector.addEventListener("click",function(){MultiMeterManager.changeSetting("Hertz")});
            this.ohmsSelector.addEventListener("click",function(){MultiMeterManager.changeSetting("Ohms")});
            this.capDiodeSelector.addEventListener("click",function(){MultiMeterManager.changeSetting("CapDiode")});

            this.selRedButton.addEventListener("click",function(){MultiMeterManager.changeSelect()});
            this.selWhiteButton.addEventListener("click",function(){MultiMeterManager.changeSelect()});
            this.selButtonBckgrnd.addEventListener("click",function(){MultiMeterManager.changeSelect()})

            this.initiated = true;
            console.log("finished MultiMeterManager.init()"); 
        }
    }
