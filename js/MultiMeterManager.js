
    let MultiMeterManager = {
        //Properties
        initiated: false,
        selectorKnob: {},
        offSelector: {},
        degSelector: {},
        microAmpSelector: {},
        milliAmpSelector: {},
        tenAmpSelector: {},
        voltSelector: {},
        hertsSelector: {},
        ohmsSelector: {},
        capDiodeSelector: {},
        presentSetting: "off",

        //Methods
        changeSetting: function(newSetting){
            console.log("new setting = " + newSetting);
            const oldDegrees = this.getDegrees(presentSetting);
            console.log("oldDegrees = " + oldDegrees);
            const newDegrees = this.getDegrees(newSetting);
            console.log("newDegrees = " + newDegrees);
            const netRotation = newDegrees - oldDegrees;
            console.log("new rotation = " + netRotation);
            this.knob.style.transformOrigin = "50% 50%";
            this.know.style.transform = rotate(netRotation);
            this.presentSetting = newSetting;
        },

        getDegrees: function(setting){
            const degrees = 0;
            switch (setting){
                case "off":
                    degrees = 0;
                    break;
                case "deg":
                    degrees = -90;
                    break;
                case "microAmp":
                    degrees = -67.5;
                    break;
                case "milliAmp":
                    degrees = -45;
                    break;
                case "tenAmp":
                    degrees = -22.5;
                    break;
                case "0ff":
                    degrees = 0;
                    break;
                case "volt":
                    degrees = 22.5;
                    break;
                case "herts":
                    degrees = 45;
                    break;
                case "ohms":
                    degrees = 67.5;
                    break;
                case "capDiode":
                    degrees = 90;
                    break;
                default: console.log("Not an allowable Setting");

            }
            return degrees;
        },

        init: function(){
            console.log("beginning MultiMeterManager.init()");
            this.selectorKnob = document.getElementById("mm-selector-knob-id");
            this.offSelector = document.getElementById("mm-off-id");
            this.degSelector = document.getElementById("mm-deg-id");
            this.microAmpSelector = document.getElementById("mm-microAmp-id");
            this.milliAmpSelector = document.getElementById("mm-milliAmp-id");
            this.tenAmpSelector = document.getElementById("mm-tenAmp-id");
            this.voltSelector = document.getElementById("mm-volt-id");
            this.hertsSelector = document.getElementById("mm-herts-id");
            this.ohmsSelector = document.getElementById("mm-ohms-id");
            this.capDiodeSelector = document.getElementById("mm-capDiode-id");
         
            this.offSelector.addEventListener("click",alert("off"));
            this.degSelector.addEventListener("click",alert("deg evt"));
            this.microAmpSelector.addEventListener("click",alert("microAmp evt"));
            this.milliAmpSelector.addEventListener("click",alert("milliAmp evt"));
            this.tenAmpSelector.addEventListener("click",alert("tenAmp evt"));
            this.voltSelector.addEventListener("click",alert("volt evt"));
            this.hertsSelector.addEventListener("click",alert("herts evt"));
            this.ohmsSelector.addEventListener("click",alert("ohms evt"));
            this.capDiodeSelector.addEventListener("click",alert("capDiode evt"));
            this.initiated = true;
            console.log("finished MultiMeterManager.init()");
        }
    }
