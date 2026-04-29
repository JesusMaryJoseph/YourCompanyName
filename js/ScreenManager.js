let ScreenManager = {
        //Properties
        initiated: false,

        // Unit Symbols
        degFahrenheitSymbol: {},
        degCelsiusSymbol: {},
        ampSymbol: {},
        voltSymbol: {},
        ohmsSymbol:{},
        soundSymbol:{},
        hertzSymbol: {},
        dutyCycleSymbol: {},
        faradSymbol: {},
        diodeSymbol: {},
        // Prefix Symbols
        milliSymbol: {},
        microSymbol: {},
        nanoSymbol: {},
        
        displayScreen: {},
        //Auxiliary elements visible on the "Display Screen"
        valueLabel: {},
        onSymbol: {},
        autoSymbol: {},
        holdSymbol: {},
        maxSymbol: {},
        minSymbol: {},
        acSymbol: {},
        dcSymbol: {},
        batterySymbol: {},
        
        //Status of particular elements
        maxMinSelected: "max",
        screenColor: "gray",
        presentPrefix: "",
        presentUnit: "",

        //Methods

        UpdateScreenHandler: function(callHandler, hideShow) {
                switch (callHandler){
                    case "off":
                        this.onSymbol.classList.toggle("hidden-element");
                        break;
                default: console.log("Not an allowable Setting");
            /*let changeKnobSelector = function(callHandler, hideShow){
                console.log("in UpdateScreenHandler called by " + callHandler + "   & hideShow = " + hideShow);
                if(callHandler == "off"){
                    console.log("removing class='hidden-element'");
                    this.onSymbol.classList.remove("hidden-element");
                    this.acSymbol.classList.remove("hidden-element");
                }*/
            }
        },

        PrefixUnitHandler:function(selectedKnob, showHide) {
            //console.log("in PrefixUnitHandler");
            //console.log("selectedKnob = " + selectedKnob);
           // console.log("at BEGINNING of PrefixUnitHandler & this.presentKnobSelectorLabel = " + this.presentKnobSelectorLabel);
           // console.log("this.lastKnobSelectorLabel ="+this.lastKnobSelectorLabel+"  and this.presentKnobSelectorLabel = "+this.presentKnobSelectorLabel);
            //if(this.lastKnobSelectorLabel == this.presentKnobSelectorLabel){return}
            if((selectedKnob=="microAmp") || (selectedKnob=="milliAmp")||(selectedKnob=="tenAmp") || (selectedKnob=="volts")){
                //console.log("showing either acSymbol or dcSymbol");
                if((showHide == "show") && (ButtonManager.presentSELcolor == "orange")){
               // if((selectedKnob != "off") && (ButtonManager.presentSELcolor == "orange")){
                    this.acSymbol.classList.remove("hidden-element");
                    this.dcSymbol.classList.add("hidden-element");
                }else{
                    this.acSymbol.classList.add("hidden-element");
                    this.dcSymbol.classList.remove("hidden-element");
                }
            }
            if((selectedKnob=="temp") || (selectedKnob=="hertz")||(selectedKnob=="ohms") || (selectedKnob=="capDiode")){
                this.acSymbol.classList.add("hidden-element");
                this.dcSymbol.classList.add("hidden-element");
            }

            switch (selectedKnob){
                case "temp":
                    if(showHide == "show"){
                        this.autoSymbol.classList.add("hidden-element");
                        if(ButtonManager.presentSELcolor == "orange"){
                        //console.log("showing degF & hiding degC");
                            this.degFahrenheitSymbol.classList.remove("hidden-element");
                            this.degCelsiusSymbol.classList.add("hidden-element");
                        }else{
                        //console.log("showing degC & hiding degF");
                            this.degFahrenheitSymbol.classList.add("hidden-element");
                            this.degCelsiusSymbol.classList.remove("hidden-element");
                        }
                    }else{
                        //console.log("hiding degC & degF");
                        this.degFahrenheitSymbol.classList.add("hidden-element");
                        this.degCelsiusSymbol.classList.add("hidden-element");
                    }
                    break;
                case "microAmp":
                    this.microSymbol.classList.toggle("hidden-element");
                    this.ampSymbol.classList.toggle("hidden-element");
                    this.autoSymbol.classList.remove("hidden-element");
                    break;
                case "milliAmp":
                    this.milliSymbol.classList.toggle("hidden-element");
                    this.ampSymbol.classList.toggle("hidden-element");
                    this.autoSymbol.classList.remove("hidden-element");
                    break;
                case "tenAmp":
                    console.log("toggling ScreenManager.prefixUnitHandler 'tenAmp' 'hidden-element'");
                    this.ampSymbol.classList.toggle("hidden-element");
                    this.autoSymbol.classList.remove("hidden-element");
                    break;
                case "off":
                    //console.log("in PrefixUnitHandler.off: reseting all screen elements");
                    this.reset();
                    break;
                case "volts":
                    this.voltSymbol.classList.toggle("hidden-element");
                    this.autoSymbol.classList.remove("hidden-element");
                    break;
                case "hertz":
                    this.autoSymbol.classList.remove("hidden-element");
                    if(showHide == "show"){
                        if(ButtonManager.presentSELcolor == "orange"){
                            this.hertzSymbol.classList.remove("hidden-element");
                            this.dutyCycleSymbol.classList.add("hidden-element");
                        }else{
                            //console.log("toggling dutyCycleSymbol");
                            this.hertzSymbol.classList.add("hidden-element");
                            this.dutyCycleSymbol.classList.remove("hidden-element");
                        }
                    }else{
                        this.hertzSymbol.classList.add("hidden-element");
                        this.dutyCycleSymbol.classList.add("hidden-element");
                    }
                    break;
                case "ohms":
                    if(showHide == "show"){
                        this.ohmsSymbol.classList.remove("hidden-element");
                        if(ButtonManager.presentSELcolor == "orange"){
                            //console.log("showing ohms and souund");
                            this.soundSymbol.classList.remove("hidden-element");
                            this.autoSymbol.classList.add("hidden-element");
                        }else{
                            //console.log("hiding sound and showing ohms");
                            this.soundSymbol.classList.add("hidden-element");
                            this.autoSymbol.classList.remove("hidden-element");
                        }
                    }else{
                        this.ohmsSymbol.classList.add("hidden-element");
                        this.soundSymbol.classList.add("hidden-element");
                    }
                    break;
                case "capDiode":
                    if(showHide == "show"){
                        if(ButtonManager.presentSELcolor == "orange"){
                            //console.log("hiding V & diode");
                            this.faradSymbol.classList.remove("hidden-element");
                            this.nanoSymbol.classList.remove("hidden-element");
                            this.voltSymbol.classList.add("hidden-element");
                            this.diodeSymbol.classList.add("hidden-element");
                            this.autoSymbol.classList.remove("hidden-element");
                        }else{
                            //console.log("hiding nF");
                            this.faradSymbol.classList.add("hidden-element");
                            this.nanoSymbol.classList.add("hidden-element");
                            this.voltSymbol.classList.remove("hidden-element");
                            this.diodeSymbol.classList.remove("hidden-element");
                            this.autoSymbol.classList.add("hidden-element");
                        }
                    }else{
                        //console.log("hiding nf, V, and diode");
                        this.faradSymbol.classList.add("hidden-element");
                        this.nanoSymbol.classList.add("hidden-element");
                        this.voltSymbol.classList.add("hidden-element");
                        this.diodeSymbol.classList.add("hidden-element");
                    }
                    break;
                default: console.log(selectedKnob + " is not an allowable selector Knob");
            }
            //console.log("at END of PrefixUnitHandler & this.presentKnobSelectorLabel = " + this.presentKnobSelectorLabel);
        },
        
        startMaxMinTime: function(){
            //console.log("setting Range start time in milliSeconds");
            this.maxMinStartMilliSeconds = Date.now();
        },
        startRangeTime: function(){
            this.rangeStartMilliSeconds = Date.now();
            this.rangeClockStarted = true;
        },
        startLightTime: function(){
           // console.log("in startLightTime");
            this.lightStartMilliSeconds = Date.now();
            //console.log("lightStartMilliSeconds = " + this.lightStartMilliSeconds);
            this.lightClockStarted = true;
            this.startThreeMinLightTime();
           // console.log("leaving startLightTime");
        },
        startThreeMinLightTime: function(){
            //console.log("in startThreeMinLightTime");
           // this.threeMinLightStartMilliSeconds = Date.now();
           // console.log("lightStartMilliSeconds = " + this.lightStartMilliSeconds);
           // this.lightClockStarted = true;
            clearTimeout(this.lightThreeMinTimer);
            this.lightThreeMinTimer = setTimeout(shutOffLight, 180000);
            //console.log("leaving startLightTime");
        },

        startBatteryTimer: function(){
            //console.log("batteryTimer started");
            this.batteryTimer = setTimeout(showBattery, 600000);/* 300000 milli secs = 5 mins  */
            //console.log("batteryTimer running");
        },
    
        clearBatteryTimer: function(){
            clearTimeout(this.batteryTimer);
            //console.log("batteryTimer has been cleared");
        },


        reset: function(){
            console.log("in ScreenManager.reset()");
            //console.log("in reset() & this.presentKnobSelectorLabel = " + this.presentKnobSelectorLabel);
            this.valueLabel.classList.add("hidden-element");
            this.onSymbol.classList.add("hidden-element");
            this.displayScreen.classList.add("gray-bckgrnd");
            this.displayScreen.classList.remove("white-bckgrnd");
           // this.warningLabel.classList.add("hidden-element");
            this.autoSymbol.classList.add("hidden-element");
            this.holdSymbol.classList.add("hidden-element");
            this.maxSymbol.classList.add("hidden-element");
            this.minSymbol.classList.add("hidden-element");
            // Prefix Symbols
            console.log("resetting Prefix symbols");
            this.milliSymbol.classList.add("hidden-element");
            this.microSymbol.classList.add("hidden-element");
            this.nanoSymbol.classList.add("hidden-element");
            // Unit Symbols
            console.log("resetting Unit symbols");
            this.degFahrenheitSymbol.classList.add("hidden-element");
            this.degCelsiusSymbol.classList.add("hidden-element");
            this.ampSymbol.classList.add("hidden-element");
            this.voltSymbol.classList.add("hidden-element");
            this.soundSymbol.classList.add("hidden-element");
            this.ohmsSymbol.classList.add("hidden-element");
            this.hertzSymbol.classList.add("hidden-element");
            this.dutyCycleSymbol.classList.add("hidden-element");
          //  this.hertzSymbol.classList.add("hidden-element");
            this.faradSymbol.classList.add("hidden-element");
            this.diodeSymbol.classList.add("hidden-element");
            // Output Symbols
            console.log("resetting Output symbols");
            this.acSymbol.classList.add("hidden-element");
            this.dcSymbol.classList.add("hidden-element");
            this.batterySymbol.classList.add("hidden-element");

            console.log("resetting maxMin & screenColor");
            this.maxMinSelected = "max";
            this.screenColor = "gray";

        },

        init: function(){

            //Output elements
            this.displayScreen = document.getElementById("mm-display-screen-id");
            this.valueLabel = document.getElementById("mm-measured-value-id");
            //Prefix symbols
            this.kiloSymbol = document.getElementById("mm-kilo-si-prefix-id");
            this.megaSymbol = document.getElementById("mm-mega-si-prefix-id");
            this.milliSymbol = document.getElementById("mm-milli-si-prefix-id");
            this.microSymbol = document.getElementById("mm-micro-si-prefix-id");
            this.nanoSymbol = document.getElementById("mm-nano-si-prefix-id");
            //Unit symbols
            this.ampSymbol = document.getElementById("mm-amp-unit-id");
            this.voltSymbol = document.getElementById("mm-volt-unit-id");
            this.degFahrenheitSymbol = document.getElementById("mm-deg-fahrenheit-unit-id");
            this.degCelsiusSymbol = document.getElementById("mm-deg-celsius-unit-id");
            this.faradSymbol = document.getElementById("mm-farad-unit-id");
            this.ohmsSymbol = document.getElementById("mm-omega-unit-id");
            this.soundSymbol = document.getElementById("mm-sound-unit-id");
            this.hertzSymbol = document.getElementById("mm-hertz-unit-id");
            this.dutyCycleSymbol = document.getElementById("mm-duty-cycle-unit-id");
            //Auxillary Screen Symbols
            this.onSymbol = document.getElementById("mm-on-indicator-id");
           // this.onSymbol.classList.remove("hidden-element");
            this.holdSymbol = document.getElementById("mm-hold-indicator-id");
            this.maxSymbol = document.getElementById("mm-max-indicator-id");
            this.minSymbol = document.getElementById("mm-min-indicator-id");
            this.autoSymbol = document.getElementById("mm-auto-indicator-id");
            this.diodeSymbol = document.getElementById("mm-diode-symbol-id");
            this.acSymbol = document.getElementById("mm-ac-indicator-id");
            this.dcSymbol = document.getElementById("mm-dc-indicator-id");
            this.batterySymbol = document.getElementById("mm-battery-indicator-id");
            //console.log("just finished setting this.batterySymbol = doc....");

            this.initiated = true;
           // console.log("finished ScreenManager.init()"); 
        }
    }
