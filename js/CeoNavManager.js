
 let CeoNavManager = {
        //properties
            initialized: false,
            
            packetsLabelEle: {},
		    packetsDropdownEle: {},
            packetsDropdownHidden: true,

        //methods
            openCloseDropdown: function(dropdown, openOrClose){
                if(!this.initialized){this.init(); this.initialized = true;}
                //console.log("after init(). dropdown = " + dropdown);
                switch(dropdown){
                    case ("packets2-menu-dd-lev-1"):
                        console.log("this.packetsDropdownHidden = " + this.packetsDropdownHidden);
                        console.log("openOrClose = " + openOrClose);
                        this.toggleDropdown(this.packetsDropdownEle, "packets2-menu-dd-lev-1-hidden", openOrClose);
                        this.packetsDropdownHidden = !this.packetsDropdownHidden;
                        break;
                    /*case ("menu-dd-lev-1"):
				        //console.log("in 'menu-dd-lev-1'");
                        this.toggleDropdown(this.trainingDropdownEle, "menu-dd-lev-1-hidden", openOrClose);
                        this.trainingDropdownHidden = !this.trainingDropdownHidden;
                        break;
                    case ("edu-nav-dropdown"):
				        //console.log("in 'edu-nav-dropdown'");
                        this.toggleDropdown(this.eduNavDropdownEle, "hide-nav-dropdown", openOrClose);
                        this.introductionDropdownEle = !this.introductionDropdownEle;
                        break;
                    case ("test-menu-dd-lev-1"):
				        //console.log("in test-menu-dd-lev-1");
                        this.toggleDropdown(this.testingDropdownEle, "menu-dd-lev-1-hidden", openOrClose);
                        this.testingDropdownHidden = !this.testingDropdownHidden;
                        break;
                    case ("codes-dropdown"):
				        //console.log("in training 'introduction-dropdown'");
                        this.toggleDropdown(this.codesDropdownEle, "menu-dd-lev-2-hidden", openOrClose);
                        this.codesDropdownHidden = !this.codesDropdownHidden;
                        break;
                    case ("test-codes-dropdown"):
				        //console.log("in testing 'introduction-dropdown'");
                        this.toggleDropdown(this.testingCodesDropdownEle, "menu-dd-lev-2-hidden", openOrClose);
                        this.testingCodesDropdownHidden = !this.testingCodesDropdownHidden;
                        break;
                    case ("logic-gates-dropdown"):
                        this.toggleDropdown(this.logicGatesDropdownEle, "menu-dd-lev-2-hidden", openOrClose);
                        this.logicGatesDropdownHidden = !this.logicGatesDropdownHidden;
                        break;
                    case ("test-logic-gates-dropdown"):
                        this.toggleDropdown(this.testinglogicGatesDropdownEle, "menu-dd-lev-2-hidden", openOrClose);
                        this.testinglogicGatesDropdownHidden = !this.testinglogicGatesDropdownHidden;
                        break;
                    case ("tech-dropdown"):
                        this.toggleDropdown(this.techDropdownEle, "menu-dd-lev-2-hidden", openOrClose);
                        this.techDropdownHidden = !this.techDropdownHidden;
                        break;
                    case ("test-tech-dropdown"):
                        this.toggleDropdown(this.testingTechDropdownEle, "menu-dd-lev-2-hidden", openOrClose);
                        this.testingTechDropdownHidden = !this.testingTechDropdownHidden;
                        break;
                    case ("media-arts-dropdown"):
                        this.toggleDropdown(this.mediaArtsDropdownEle, "menu-dd-lev-2-hidden", openOrClose);
                        this.mediaArtsDropdownHidden = !this.mediaArtsDropdownHidden;
                        break;
                    case ("test-media-arts-dropdown"):
                        this.toggleDropdown(this.testingMediaArtsDropdownEle, "menu-dd-lev-2-hidden", openOrClose);
                        this.testingMediaArtsDropdownHidden = !this.testingMediaArtsDropdownHidden;
                        break;*/
                    default:(console.log("No Such Dropdown"));
                }
            },

            toggleDropdown: function(dropdownEle, hiddenClassName, openOrClose){
                //console.log("dropdownHidden = " + hiddenClassName);
                //console.log("dropdownEle.id = " + dropdownEle.id);
                if(openOrClose === "open"){
                    //console.log("removing hidenClassName = " + hiddenClassName);
                    dropdownEle.classList.remove(hiddenClassName);
                }else{
                    //console.log("adding hidenClassName = " + hiddenClassName);
                    dropdownEle.classList.add(hiddenClassName);
                }
            },

            init: function(){
            //console.log(" in EduNavManager.init()");
                this.packetsLabelEle = document.getElementById('packets2-menu-label-id');
                this.packetsDropdownEle = document.getElementById("packets2-menu-dd-id");
               // console.log("this.equipmentlabelEle.id = " + this.equipmentlabelEle.id);
                //console.log("this.equipmentDropdownEle.id = " + this.equipmentDropdownEle.id);
                //console.log("Ending EduNavManager.init()");
            }

    }