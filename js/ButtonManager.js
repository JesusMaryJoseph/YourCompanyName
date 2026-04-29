  function showBattery(){
        //console.log("showing battery using outside fct");
        MultiMeterManager.batterySymbol.classList.remove("hidden-element");
        MultiMeterManager.clearBatteryTimer();
        /*MultiMeterManager.batteryTimerStarted = false;*/
   }
   function shutOffLight(){
       // console.log("shutting off backlight");
        //console.log("shutting off time = " + Date.now());
        MultiMeterManager.displayScreen.classList.remove("white-bckgrnd");
        MultiMeterManager.displayScreen.classList.add("gray-bckgrnd");
        MultiMeterManager.screenColor = "gray";
   }


    let ButtonManager = {
        //Properties
        initiated: false,

//BEGIN Buttons
        //PlugIn 'Click' Areas
        selClick:{},
        lightClick:{},
        rangeClick:{},
        maxMinClick:{},
        holdClick:{},

        //Plug In's
        blackPlugin:{},
        redPlugin:{},
        blackPluginConnected:{},
        redPluginConnected:{},
        redTenAmpPluginConnected:{},

        warningLabel: {},

        // BEGIN Plug ins 
        comPluginClick: {},
        lowAmpPluginClick: {},
        highAmpPluginClick:{},
        // END Plug ins
        
        //Button Backgrounds
        selButtonBckgrnd: {},

        //Light, Range & MaxMin Button Timers
       /* twoSecTimer: {},*/
        lightStartMilliSeconds: {},
        lightEndMilliSeconds: {},
        maxMinStartMilliSeconds: {},
        maxMinEndMilliSeconds: {},
        rangeStartMilliSeconds: {},
        rangeEndMilliSeconds: {},
        batteryTimer: {},
        lightThreeMinTimer: {},

//END Buttons


        //Status of particular elements
        
        presentSELcolor: "orange",
        presentAmpConnection: "",
        redPluginConnection: false,
        redTenAmpPluginConnection: false,
        blackPluginConnection: false,
        pluginConnections: false,
        maxMinClicked: false,
        maxMinClockStarted: false,
        rangeClockStarted: false,
        lightClockStarted: false,
        batteryTimerStarted: false,

        //Methods
        
        ButtonHandler: function(buttonLabel){
            switch (buttonLabel){
                case "sel":
                        if(this.presentKnobSelectorLabel == "off"){return;}
                        this.selButtonBckgrnd.classList.toggle("red-bckgrnd");
                        this.selButtonBckgrnd.classList.toggle("orange-bckgrnd");
                        if(this.presentSELcolor == "orange"){
                            this.presentSELcolor = "red";
                        }else{
                            this.presentSELcolor = "orange";
                        }
                        ScreenManager.PrefixUnitHandler(KnobSelectorManager.presentKnobSelectorLabel, "hide"); 
                        ScreenManager.PrefixUnitHandler(KnobSelectorManager.presentKnobSelectorLabel, "show");
                        KnobSelectorManager.changeSetting(KnobSelectorManager.presentKnobSelectorLabel); 
                    break;
                case "hold":
                        if(this.presentKnobSelectorLabel == "off"){return;}
                        ScreenManager.holdSymbol.classList.toggle("hidden-element");
                    
                    break;
                case "maxMin":
                        if(this.presentKnobSelectorLabel == "off"){return;}
                        ScreenManager.autoSymbol.classList.add("hidden-element");
                        //this.maxMinEndMilliSeconds = Date.now();
                        //const maxMinDownTime = (this.maxMinEndMilliSeconds - this.maxMinStartMilliSeconds);
                        //console.log("maxMinDownTime = " + maxMinDownTime);
                        if(maxMinDownTime > 1000){
                            ScreenManager.minSymbol.classList.add("hidden-element");
                            ScreenManager.maxSymbol.classList.add("hidden-element");
                            ScreenManager.autoSymbol.classList.remove("hidden-element");
                            ScreenManager.maxMinSelected = "max";
                        }else{
                            //console.log("switching between 'MAX and 'MIN'");
                            if(this.maxMinSelected == "max"){
                                //console.log("showing Max & hiding Min");
                                ScreenManager.maxSymbol.classList.remove("hidden-element");
                                ScreenManager.minSymbol.classList.add("hidden-element");
                                ScreenManager.maxMinSelected = "min";
                            }else{
                                //console.log("showing Min & hiding Max");
                                ScreenManager.minSymbol.classList.remove("hidden-element");
                                ScreenManager.maxSymbol.classList.add("hidden-element");
                                ScreenManager.maxMinSelected = "max";
                            }
                        }
                        //console.log("this.maxMinSelected = " + this.maxMinSelected);
                    break;
                case "light":
                        if(this.presentKnobSelectorLabel == "off"){return;}
                        //console.log("in ButtonHandler('light')");
                        //console.log("lightStartMilliSeconds = " + this.lightStartMilliSeconds);
                       // ScreenManager.lightEndMilliSeconds = Date.now();
                       // console.log("lightEndMilliSeconds = " + this.lightEndMilliSeconds);
                        //const lightDownTime = (this.lightEndMilliSeconds - this.lightStartMilliSeconds);
                        //console.log("lightDownTime = " + lightDownTime);
                       /* if(lightDownTime > 1000){
                            //console.log("downTime = " + lightDownTime);
                            if(this.screenColor == "gray"){
                                this.displayScreen.classList.remove("gray-bckgrnd");
                                this.displayScreen.classList.add("white-bckgrnd");
                                this.screenColor = "white";
                            }else{
                                this.displayScreen.classList.remove("white-bckgrnd");
                                this.displayScreen.classList.add("gray-bckgrnd");
                                this.screenColor = "gray";
                            }
                        }*/
                    break;
                case "range":
                        if(this.presentKnobSelectorLabel == "off"){return;}
                       // ScreenManager.autoSymbol.classList.add("hidden-element");
                        //console.log("rangeStartMilliSeconds = " + this.rangeStartMilliSeconds);
                        //ScreenManager.rangeEndMilliSeconds = Date.now();
                        //console.log("rangeEndMilliSeconds = " + this.rangeEndMilliSeconds);
                       // const rangeDownTime = (ScreenManager.rangeEndMilliSeconds - ScreenManager.rangeStartMilliSeconds);
                        //console.log("rangeDownTime = " + rangeDownTime);
                        /*if(rangeDownTime > 1000){
                            //console.log("downTime = " + rangeDownTime);
                            this.autoSymbol.classList.remove("hidden-element");
                        }else{
                            this.rangeSelected = "ten";
                            //console.log("switching between 'ten', 'milli', 'micro'");
                        }*/
                    break;
                case "comPlugin":
                    console.log("in 'comPlugin'");
                    console.log("KnobSelectorManager.presentKnobSelectorLabel = " + KnobSelectorManager.presentKnobSelectorLabel);
                    if(KnobSelectorManager.presentKnobSelectorLabel == "off"){return;}
                    this.blackPlugin.classList.add("hidden-element");
                    this.blackPluginConnected.classList.remove("hidden-element");
                    this.blackPluginConnection = true;
                    if(this.redPluginConnection || this.redTenAmpPluginConnection){
                        console.log("this.pluginConnections is true");
                        this.pluginConnections = "true";
                    }
                    break;
                case "lowAmpPlugin":
                   // if(this.presentKnobSelectorLabel == "off"){return;}
                   console.log("in 'lowAmpPlugin");
                   console.log("KnobSelectorManager.presentKnobSelectorLabel = " + KnobSelectorManager.presentKnobSelectorLabel);
                   if(KnobSelectorManager.presentKnobSelectorLabel == "off"){return}
                    this.presentAmpConnection = "low";
                   /* this.showHideWarning(this.presentKnobSelectorLabel);*/
                   if(KnobSelectorManager.presentKnobSelectorLabel == "tenAmp"){
                        this.warningLabel.classList.remove("hidden-element");
                        console.log("showing Warning");
                    }else{
                       this.warningLabel.classList.add("hidden-element"); 
                    }
                    this.redTenAmpPluginConnected.classList.add("hidden-element");
                    this.redTenAmpPluginConnection = false;
                    this.redPluginConnected.classList.remove("hidden-element");
                    this.redPluginConnection = true;
                    if(this.blackPluginConnection){
                        this.pluginConnections = "true";
                        console.log("this.pluginConnections is true");
                    }else{
                        console.log("this.pluginConnections is false");
                    }
                    this.redPlugin.classList.add("hidden-element");
                    break;
                case "highAmpPlugin":
                   // if(this.presentKnobSelectorLabel == "off"){return;}
                   console.log("in 'highAmpPlugin");
                   console.log("KnobSelectorManager.presentKnobSelectorLabel = " + KnobSelectorManager.presentKnobSelectorLabel);
                   /* this.showHideWarning(this.presentKnobSelectorLabel);*/ /*&& (KnobSelectorManager.presentKnobSelectorLabel != "off")*/
                    if(KnobSelectorManager.presentKnobSelectorLabel == "off"){return}
                    this.presentAmpConnection = "high";
                    if((KnobSelectorManager.presentKnobSelectorLabel != "tenAmp") ){
                        console.log("showing Warning");
                        this.warningLabel.classList.remove("hidden-element");
                    }else{
                       this.warningLabel.classList.add("hidden-element"); 
                    }
                        
                    /*if(KnobSelectorManager.presentKnobSelectorLabel == "tenAmp"){
                        console.log("in 'highAmpPlugin' & presentKnowSlectorLabel == 'tenAmp'");
                        this.warningLabel.classList.add("hidden-element");
                    }else{
                        console.log("in 'highAmpPlugin' & presentKnowSlectorLabel != 'tenAmp'");
                        this.warningLabel.classList.remove("hidden-element");
                    }*/
                    //console.log("hiding the redPluginConnected");
                    this.redPluginConnected.classList.add("hidden-element");
                    this.redPlugin.classList.add("hidden-element");
                    this.redPluginConnection = false;
                    this.redTenAmpPluginConnected.classList.remove("hidden-element");
                    this.redTenAmpPluginConnection = true;
                    if(this.blackPluginConnection){
                        this.pluginConnections = "true";
                        console.log("this.pluginConnections is true");
                    }else{
                        console.log("this.pluginConnections is false");
                    }
                    break;
                default: console.log("Not an allowable Button or PlugIn");
            }
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
            // Button Symbols
            console.log("in ButtonManager.reset()");
            this.selButtonBckgrnd.classList.add("orange-bckgrnd");
            this.clearBatteryTimer();
            // PlugIns
            this.blackPlugin.classList.remove("hidden-element");
            this.redPlugin.classList.remove("hidden-element");
            this.redPluginConnected.classList.add("hidden-element");
            this.redTenAmpPluginConnected.classList.add("hidden-element");
            this.blackPluginConnected.classList.add("hidden-element");
            this.redPluginConnection = false;
            this.redTenAmpPluginConnection = false;
            this.blackPluginConnection = false;

            this.warningLabel.classList.add("hidden-element");

            this.redPluginConnection = false;
            this.redTenAmpPluginConnection = false;
            this.blackPluginConnection = false;

            this.presentSELcolor = "orange";
            this.maxMinSelected = "max";
            this.maxMinClicked = false;
            this.maxMinClockStarted = false;

        },

        init: function(){
            
            this.warningLabel = document.getElementById("warning-label-id");

            // Plugin Click Areas
            this.comPluginClick = document.getElementById("mm-com-plugin-click-area-id");/* mm-com-plugin-click-area-id */
            this.comPluginClick.addEventListener("click",function(){ButtonManager.ButtonHandler("comPlugin")});
            this.lowAmpPluginClick= document.getElementById("mm-mamp-plugin-click-area-id");
            this.lowAmpPluginClick.addEventListener("click",function(){ButtonManager.ButtonHandler("lowAmpPlugin")});
            this.highAmpPluginClick = document.getElementById("mm-ten-amp-plugin-click-area-id");
            this.highAmpPluginClick.addEventListener("click",function(){ButtonManager.ButtonHandler("highAmpPlugin")});
            this.blackPlugin = document.getElementById("black-plugin-id");
            this.redPlugin = document.getElementById("red-plugin-id");
            this.blackPluginConnected = document.getElementById("black-plugin-connected-id");
            this.redPluginConnected = document.getElementById("red-plugin-connected-id");
            this.redTenAmpPluginConnected = document.getElementById("red-ten-amp-plugin-connected-id");

            // Button Click Areas
            this.selClick = document.getElementById("mm-select-button-click-area-id");
            this.selClick.addEventListener("click",function(){ButtonManager.ButtonHandler("sel")});
            this.lightClick = document.getElementById("mm-light-button-click-area-id");
            this.lightClick.addEventListener("mouseup",function(){ButtonManager.ButtonHandler("light")});
            this.lightClick.addEventListener("mousedown",function(){this.startLightTime("light")});
            this.rangeClick = document.getElementById("mm-range-button-click-area-id");
            this.rangeClick.addEventListener("mouseup",function(){ButtonManager.ButtonHandler("range")});
            this.rangeClick.addEventListener("mousedown",function(){this.startRangeTime("range")});
            this.maxMinClick = document.getElementById("mm-max-min-button-click-area-id");
            this.maxMinClick.addEventListener("mouseup",function(){ButtonManager.ButtonHandler("maxMin")});
            /*this.maxMinClick.addEventListener("mousedown",function(){this.startMaxMinTime()});*/
            this.holdClick = document.getElementById("mm-hold-button-click-area-id");
            this.holdClick.addEventListener("click",function(){ButtonManager.ButtonHandler("hold")});
           // console.log("ending 'button click' elements");

            this.selButtonBckgrnd = document.getElementById("mm-sel-button-bckgrnd-id");

            this.initiated = true;
           // console.log("finished MultiMeterManager.init()"); 
        }
    }
