
    let MultiMeterManager = {
        //Properties
        initiated: false,

// BEGIN Plug ins 
        comPluginClick: {},
        lowAmpPluginClick: {},
        highAmpPluginClick:{},
// END Plug ins

//BEGIN Buttons
        //Button 'Click' Areas
        selClick:{},
        lightClick:{},
        rangeClick:{},
        maxMinClick:{},
        holdClick:{},

        //Button Backgrounds
        selButtonBckgrnd: {},

        //Button Timers
       /* twoSecTimer: {},*/
        maxMinStartMilliSeconds: {},
        maxMinEndMilliSeconds: {},
        rangeStartMilliSeconds: {},
        rangeEndMilliSeconds: {},

//END Buttons

//BEGIN Selectors
        //Selector Knobs
        offSelectorKnob: {},
        tempSelectorKnob: {},
        microAmpSelectorKnob: {},
        milliAmpSelectorKnob: {},
        tenAmpSelectorKnob: {},
        voltSelectorKnob: {},
      //  hertzSelectorKnob: {},
        ohmsSelectorKnob: {},
        capDiodeSelectorKnob: {},

        //Selector Labels 
        offSelector: {},
        tempSelector: {},
        microAmpSelector: {},
        milliAmpSelector: {},
        tenAmpSelector: {},
        voltSelector: {},
      //  hertzSelector: {},
        ohmsSelector: {},
        capDiodeSelector: {},

        //Selector 'Click' Areas
        tempClick:{},
        tenAmpClick:{},
        microAmpClick:{},
        milliAmpClick:{},
        offClick:{},
        voltsClick:{},
      //  hertzClick:{},
        ohmsClick:{},
        capDiodeClick:{},
//END Selectors

        displayScreen: {},
        //Auxiliary elements visible on the "Display Screen"
        valueLabel: {},
        onSymbol: {},
        autoSymbol: {},
        holdSymbol: {},
        maxSymbol: {},
        minSymbol: {},
        // Unit Symbols
        degFahrenheitSymbol: {},
        degCelsiusSymbol: {},
        tenAmpSymbol: {},
        voltSymbol: {},
      //  hertzSymbol: {},
        faradSymbol: {},
        diodeSymbol: {},
        // Prefix Symbols
        milliSymbol: {},
        microSymbol: {},
        nanoSymbol: {},
        
        //Status of particular elements
        presentSelectorLabel: "off",
        presentSELcolor: "orange",
        maxMinSelected: "max",
        screenColor: "gray",
        maxMinClicked: false,
        maxMinClockStarted: false,


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

        changeButton: function(buttonLabel){
            console.log("in changeButton: buttonLabel = " + buttonLabel);
            switch (buttonLabel){
                case "sel":
                        if(this.presentSelectorLabel == "off"){return;}
                        this.selButtonBckgrnd.classList.toggle("red-bckgrnd");
                        this.selButtonBckgrnd.classList.toggle("orange-bckgrnd");
                        //console.log("toggling 'red-bckgrnd' and 'orange-bckgrnd' on SEL Label");
                        //console.log("this.presentSELcolor =  " + this.presentSELcolor);
                        if(this.presentSELcolor == "orange"){
                            //console.log("setting this.presentSELcolor to 'red'");
                            this.presentSELcolor = "red";
                        }else{
                            //console.log("setting this.presentSELcolor to 'orange'");
                            this.presentSELcolor = "orange";
                        }
                        this.showHidePrefixesUnits(this.presentSelectorLabel); 
                        /*this.selWhiteBckgrnd.classList.toggle("hidden-element");
                        console.log("toggling 'hidden-element' on White Label");*/
                    break;
                case "hold":
                        if(this.presentSelectorLabel == "off"){return; }
                        this.holdSymbol.classList.toggle("hidden-element");
                       
                    break;
                case "maxMin":
                        if(this.presentSelectorLabel == "off"){return; }
                        this.autoSymbol.classList.add("hidden-element");
                        this.maxMinEndMilliSeconds = Date.now();
                        const maxMinDownTime = (this.maxMinEndMilliSeconds - this.maxMinStartMilliSeconds);
                        console.log("maxMinDownTime = " + maxMinDownTime);
                        if(maxMinDownTime > 1000){
                            this.minSymbol.classList.add("hidden-element");
                            this.maxSymbol.classList.add("hidden-element");
                            this.autoSymbol.classList.remove("hidden-element");
                            this.maxMinSelected = "max";
                        }else{
                            console.log("switching between 'MAX and 'MIN'");
                            if(this.maxMinSelected == "max"){
                                console.log("showing Max & hiding Min");
                                this.maxSymbol.classList.remove("hidden-element");
                                this.minSymbol.classList.add("hidden-element");
                                this.maxMinSelected = "min";
                            }else{
                                console.log("showing Min & hiding Max");
                                this.minSymbol.classList.remove("hidden-element");
                                this.maxSymbol.classList.add("hidden-element");
                                this.maxMinSelected = "max";
                            }
                        }
                        console.log("this.maxMinSelected = " + this.maxMinSelected);
                    break;
                case "light":
                        if(this.presentSelectorLabel == "off"){return; }
                        console.log("in changeButton('light')");
                        if(this.screenColor == "gray"){
                            this.displayScreen.classList.remove("gray-bckgrnd");
                            this.displayScreen.classList.add("white-bckgrnd");
                            this.screenColor = "white";
                        }else{
                            this.displayScreen.classList.remove("white-bckgrnd");
                            this.displayScreen.classList.add("gray-bckgrnd");
                            this.screenColor = "gray";
                        }
                    break;
                case "range":
                        if(this.presentSelectorLabel == "off"){return; }
                        this.autoSymbol.classList.add("hidden-element");
                        this.rangeEndMilliSeconds = Date.now();
                        const rangeDownTime = (this.rangeEndMilliSeconds - this.rangeStartMilliSeconds);
                        if(rangeDownTime > 1000){
                            console.log("downTime = " + rangeDownTime);
                            this.autoSymbol.classList.remove("hidden-element");
                            this.rangeSelected = "ten";
                        }else{
                            console.log("switching between 'ten', 'milli', 'micro'");
                        }
                    break;
                default: console.log("Not an allowable Setting");
            }
        },

        startTime: function(){
            console.log("setting start time in milliSeconds");
            this.maxMinStartMilliSeconds = Date.now();
        },

       // stopTime: function(){
           // const currentDate = new Date();
           // this.endSeconds = currentDate.getSeconds();
            //clearTimeout(this.twoSecTimer);
            /*this.autoSymbol.classList.remove("hidden-element");
            this.minSymbol.classList.add("hidden-element");
            this.maxSymbol.classList.add("hidden-element");
            this.maxMinClockStarted = false;*/
       // },
        showHidePrefixesUnits: function(selectorLabel){
            console.log("in showHidePrefixesUnits");
            this.faradSymbol.classList.add("hidden-element");
            this.nanoSymbol.classList.add("hidden-element");
            this.voltSymbol.classList.add("hidden-element");
            this.diodeSymbol.classList.add("hidden-element");
            switch (selectorLabel){
                case "temp":
                    console.log("hidding degF & degC");
                    this.degFahrenheitSymbol.classList.toggle("hidden-element");
                    this.degCelsiusSymbol.classList.toggle("hidden-element");
                    break;
                case "microAmp":
                   // this.microSymbol.classList.toggle("hidden-element");
                   // this.tenAmpSymbol.classList.toggle("hidden-element");
                    break;
                case "milliAmp":
                   // this.milliSymbol.classList.toggle("hidden-element");
                   // this.tenAmpSymbol.classList.toggle("hidden-element");
                    break;
                case "tenAmp":
                    //console.log("in case: 'tenAmp'");
                  //  this.tenAmpSymbol.classList.toggle("hidden-element");
                    break;
                case "off":
                    //this.onSymbol.classList.add("hidden-selector");
                    this.reset();
                    break;
                case "volts":
                   // this.voltSymbol.classList.toggle("hidden-element");
                    break;
                case "hertz":
              //      this.hertzSymbol.classList.toggle("hidden-element");
                    //this.dutyCycleSymbol.classList.toggle("hidden-element");
                    break;
                case "ohms":
                    break;
                case "capDiode":
                    //console.log("entering 'capDiode'");
                            /*this.faradSymbol.classList.toggle("hidden-element");
                            this.nanoSymbol.classList.add("hidden-element");
                            this.voltSymbol.classList.add("hidden-element");
                            this.diodeSymbol.classList.add("hidden-element");*/
                        if(this.presentSELcolor == "orange"){
                            console.log("hiding nF");
                            this.faradSymbol.classList.toggle("hidden-element");
                            this.nanoSymbol.classList.toggle("hidden-element");
                            this.voltSymbol.classList.add("hidden-element");
                            this.diodeSymbol.classList.add("hidden-element");
                        }else{
                            console.log("hiding V & diode");
                            this.faradSymbol.classList.add("hidden-element");
                            this.nanoSymbol.classList.add("hidden-element");
                            this.voltSymbol.classList.toggle("hidden-element");
                            this.diodeSymbol.classList.toggle("hidden-element");
                    }
                    break;
                default: console.log(selector + " is not an allowable label");
            } 
        },

        showHideSelectors: function(selectorLabel){
            console.log("in showHideSelectors");
            console.log("selectorLabel = " + selectorLabel);
            this.faradSymbol.classList.add("hidden-element");
            this.nanoSymbol.classList.add("hidden-element");
            this.voltSymbol.classList.add("hidden-element");
            this.diodeSymbol.classList.add("hidden-element");
            this.autoSymbol.classList.remove("hidden-element");
            this.onSymbol.classList.remove("hidden-selector");
            this.valueLabel.classList.remove("hidden-element");
            switch (selectorLabel){
                case "temp":
                    console.log("In showHideSelectors & this.present SEL = " + this.presentSELcolor);
                    this.tempSelectorKnob.classList.toggle("hidden-selector");
                    if(this.presentSELcolor == "orange"){
                        this.degFahrenheitSymbol.classList.toggle("hidden-element");
                    }else{
                        this.degCelsiusSymbol.classList.toggle("hidden-element");
                    }
                    break;
                case "microAmp":
                    this.microAmpSelectorKnob.classList.toggle("hidden-selector");
                    this.microSymbol.classList.toggle("hidden-element");
                    this.tenAmpSymbol.classList.toggle("hidden-element");
                    break;
                case "milliAmp":
                    this.milliAmpSelectorKnob.classList.toggle("hidden-selector");
                    this.milliSymbol.classList.toggle("hidden-element");
                    this.tenAmpSymbol.classList.toggle("hidden-element");
                    break;
                case "tenAmp":
                    console.log("in case: 'tenAmp'");
                    this.tenAmpSelectorKnob.classList.toggle("hidden-selector");
                    this.tenAmpSymbol.classList.toggle("hidden-element");
                    break;
                case "off":
                    this.offSelectorKnob.classList.toggle("hidden-selector");
                    this.onSymbol.classList.add("hidden-selector");
                    this.reset();
                    break;
                case "volts":
                    this.voltSelectorKnob.classList.toggle("hidden-selector");
                    this.voltSymbol.classList.toggle("hidden-element");
                    break;
                case "hertz":
             //       this.hertzSelectorKnob.classList.toggle("hidden-selector");
                    break;
                case "ohms":
                    this.ohmsSelectorKnob.classList.toggle("hidden-selector");
                    break;
                case "capDiode":
                    this.capDiodeSelectorKnob.classList.toggle("hidden-selector");
                    console.log("capDiode Knob selected: now setting appropriate Prefixes & Units");
                    if(this.presentSELcolor == "orange"){
                        this.faradSymbol.classList.remove("hidden-element");
                        this.nanoSymbol.classList.remove("hidden-element");
                    }else{
                        this.voltSymbol.classList.remove("hidden-element");
                        this.diodeSymbol.classList.remove("hidden-element");
                    }
                   // this.showHidePrefixesUnits("capDiode");
                    break;
                default: console.log("Not an allowable Setting");
            }
        },

        reset: function(){
            this.valueLabel.classList.add("hidden-element");
            this.onSymbol.classList.add("hidden-element");
            // Button Symbols
            this.selButtonBckgrnd.classList.add("orange-bckgrnd");
            this.autoSymbol.classList.add("hidden-element");
            this.holdSymbol.classList.add("hidden-element");
            this.maxSymbol.classList.add("hidden-element");
            this.minSymbol.classList.add("hidden-element");
            // Prefix Symbols
            this.milliSymbol.classList.add("hidden-element");
            this.microSymbol.classList.add("hidden-element");
            this.nanoSymbol.classList.add("hidden-element");
            // Unit Symbols
            this.degFahrenheitSymbol.classList.add("hidden-element");
            this.degCelsiusSymbol.classList.add("hidden-element");
            this.tenAmpSymbol.classList.add("hidden-element");
            this.voltSymbol.classList.add("hidden-element");
          //  this.hertzSymbol.classList.add("hidden-element");
            this.faradSymbol.classList.add("hidden-element");
            this.diodeSymbol.classList.add("hidden-element");

            this.presentSELcolor = "orange";
            this.presentSelectorLabel = "off";
            this.maxMinSelected = "max";
            this.screenColor = "gray";
            this.maxMinClicked = false;
            this.maxMinClockStarted = false;

        },

        init: function(){
            console.log("beginning MultiMeterManager.init()");
           /* this.selectorKnob = document.getElementById("mm-selector-id");
           this.selectorKnob.style.transformOrigin = '50% -20%';*/

           // Selectors
            this.offSelectorKnob = document.getElementById("selector-knob-off-id")
            this.capDiodeSelectorKnob = document.getElementById("selector-knob-cap-diode-id");
            this.tempSelectorKnob = document.getElementById("selector-knob-temp-id");
            this.microAmpSelectorKnob = document.getElementById("selector-knob-micro-amp-id");
            this.milliAmpSelectorKnob = document.getElementById("selector-knob-milli-amp-id");
            this.tenAmpSelectorKnob = document.getElementById("selector-knob-ten-amp-id");
            this.voltSelectorKnob = document.getElementById("selector-knob-volts-id");
           // this.hertzSelectorKnob = document.getElementById("selector-knob-hertz-id");
            this.ohmsSelectorKnob = document.getElementById("selector-knob-ohms-id");
            // Selector Click Areas
            console.log("beginning 'click' elements");
            this.offClick = document.getElementById("mm-off-click-area-id");
            this.offClick.addEventListener("click",function(){MultiMeterManager.changeSetting("off")});
            this.tenAmpClick = document.getElementById("mm-ten-amp-click-area-id");
            this.tenAmpClick.addEventListener("click",function(){MultiMeterManager.changeSetting("tenAmp")});
            this.milliAmpClick = document.getElementById("mm-milli-amp-click-area-id");
            this.milliAmpClick.addEventListener("click",function(){MultiMeterManager.changeSetting("milliAmp")});
            this.microAmpClick = document.getElementById("mm-micro-amp-click-area-id");
            this.microAmpClick.addEventListener("click",function(){MultiMeterManager.changeSetting("microAmp")});
            this.tempClick = document.getElementById("mm-temp-click-area-id");
            this.tempClick.addEventListener("click",function(){MultiMeterManager.changeSetting("temp")});
            this.voltsClick = document.getElementById("mm-volts-click-area-id");
            this.voltsClick.addEventListener("click",function(){MultiMeterManager.changeSetting("volts")});
          //  this.hertzClick = document.getElementById("mm-hz-click-area-id");
           // this.hertzClick.addEventListener("click",function(){MultiMeterManager.changeSetting("hertz")});
            this.ohmsClick = document.getElementById("mm-ohms-click-area-id");
            this.ohmsClick.addEventListener("click",function(){MultiMeterManager.changeSetting("ohms")});
            this.capDiodeClick = document.getElementById("mm-cap-diode-click-area-id");
            this.capDiodeClick.addEventListener("click",function(){MultiMeterManager.changeSetting("capDiode")});
            console.log("ending 'selector click' elements");

            // Plugin Click Areas
            this.comPluginClick = document.getElementById("rect82");/* mm-com-plugin-click-area-id */
            this.comPluginClick.addEventListener("click",function(){MultiMeterManager.changeButton("comPlugin")});
                /*this.lowAmpPluginClick= document.getElementById("mm-500-mamp-plugin-click-area-id");
                this.lowAmpPluginClick.addEventListener("click",function(){MultiMeterManager.changeButton("lowAmpPlugin")});
                this.highAmpPluginClick = document.getElementById("mm-ten-amp-plugin-click-area-id");
                this.highAmpPluginClick.addEventListener("click",function(){MultiMeterManager.changeButton("highAmpPlugin")});*/

            // Button Click Areas
            this.selClick = document.getElementById("mm-select-button-click-area-id");
            this.selClick.addEventListener("click",function(){MultiMeterManager.changeButton("sel")});
            this.lightClick = document.getElementById("mm-light-button-click-area-id");
            this.lightClick.addEventListener("click",function(){MultiMeterManager.changeButton("light")});
            this.rangeClick = document.getElementById("mm-range-button-click-area-id");
            this.rangeClick.addEventListener("click",function(){MultiMeterManager.changeButton("range")});
            this.maxMinClick = document.getElementById("mm-max-min-button-click-area-id");
            this.maxMinClick.addEventListener("mouseup",function(){MultiMeterManager.changeButton("maxMin")});
            this.maxMinClick.addEventListener("mousedown",function(){MultiMeterManager.startTime()});
            this.holdClick = document.getElementById("mm-hold-button-click-area-id");
            this.holdClick.addEventListener("click",function(){MultiMeterManager.changeButton("hold")});
            console.log("ending 'button click' elements");

            // Selector Labels
            this.offSelector = document.getElementById("mm-off-id");
            this.tempSelector = document.getElementById("mm-temp-id");
            this.microAmpSelector = document.getElementById("mm-micro-amp-id");
            this.milliAmpSelector = document.getElementById("mm-milli-amp-id");
            this.tenAmpSelector = document.getElementById("mm-ten-amp-id");
            this.voltSelector = document.getElementById("mm-volts-id");
           // this.hertzSelector = document.getElementById("mm-hertz-id");
            this.ohmsSelector = document.getElementById("mm-ohms-id");
            this.capDiodeSelector = document.getElementById("mm-cap-diode-id");

            this.displayScreen = document.getElementById("mm-display-screen-id");

            this.onSymbol = document.getElementById("mm-on-indicator-id");
            this.holdSymbol = document.getElementById("mm-hold-indicator-id");
            this.maxSymbol = document.getElementById("mm-max-indicator-id");
            this.minSymbol = document.getElementById("mm-min-indicator-id");
            this.autoSymbol = document.getElementById("mm-auto-indicator-id");
            this.tenAmpSymbol = document.getElementById("mm-ten-amp-symbol-id");
            this.milliSymbol = document.getElementById("mm-milli-si-prefix-id");
            this.microSymbol = document.getElementById("mm-micro-si-prefix-id");
            this.nanoSymbol = document.getElementById("mm-nano-si-prefix-id");
            this.voltSymbol = document.getElementById("mm-volt-symbol-id");
            this.valueLabel = document.getElementById("mm-value-label-id");
            this.degFahrenheitSymbol = document.getElementById("mm-deg-fahrenheit-symbol-id");
            this.degCelsiusSymbol = document.getElementById("mm-deg-celsius-symbol-id");
            //this.hertzSymbol = document.getElementById("mm-hertz-symbol-id");
            this.dutyCycleSymbol = document.getElementById("mm-duty-cydle-symbol-id");
            this.faradSymbol = document.getElementById("mm-farad-symbol-id");
            this.diodeSymbol = document.getElementById("mm-diode-display-id");

            /*this.selRedButton = document.getElementById("mm-sel-red-label-id");
            this.selWhiteButton = document.getElementById("mm-sel-white-label-id");
            this.selOrangeBckgrnd = document.getElementById("mm-sel-orange-bckgrnd-id");*/
            this.selButtonBckgrnd = document.getElementById("mm-sel-button-bckgrnd-id");
         
            /*this.offSelector.addEventListener("click",function(){MultiMeterManager.changeSetting("off")});
            this.tempSelector.addEventListener("click",function(){MultiMeterManager.changeSetting("temp")});
            this.microAmpSelector.addEventListener("click",function(){MultiMeterManager.changeSetting("microAmp")});
            this.milliAmpSelector.addEventListener("click",function(){MultiMeterManager.changeSetting("milliAmp")});
            this.tenAmpSelector.addEventListener("click",function(){MultiMeterManager.changeSetting("tenAmp")});
            this.voltSelector.addEventListener("click",function(){MultiMeterManager.changeSetting("Volts")});
            this.hertzSelector.addEventListener("click",function(){MultiMeterManager.changeSetting("Hertz")});
            this.ohmsSelector.addEventListener("click",function(){MultiMeterManager.changeSetting("Ohms")});
            this.capDiodeSelector.addEventListener("click",function(){MultiMeterManager.changeSetting("CapDiode")});*/

           /* this.selRedButton.addEventListener("click",function(){MultiMeterManager.changeSelect()});
            this.selWhiteButton.addEventListener("click",function(){MultiMeterManager.changeSelect()});
            this.selButtonBckgrnd.addEventListener("click",function(){MultiMeterManager.changeSelect()});*/

            this.initiated = true;
            console.log("finished MultiMeterManager.init()"); 
        }
    }
