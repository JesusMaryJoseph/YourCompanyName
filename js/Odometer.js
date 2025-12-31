 
        let OdometerSimulator = {
            //properties
            initialized: false,
            digitOneCount: 0,
            digitTwoCount: 0,
            digitThreeCount: 0,
            digitFourCount: 0,
            digitOneIntervalId: "",
            digitTwoIntervalId: "",
            digitThreeIntervalId: "",
            digitFourIntervalId: "",
            digitOne: {},
            digitTwo: {},
            digitThree: {},
            digitFour: {},

            //methods
            /*start: function(){
                //console.log("setting 8sec timer");
                if( !this.initialized){this.init(); this.initialized = true}
                let timerId = setTimeout(
                    this.digitInterval(),
                    8000
                )
            },*/
            start: function(){
                //console.log("setting Interval 500ms");
                if( !this.initialized){
                    this.init(); 
                    this.initialized = true
                }
                //console.log("setting all digits to '0'");
                this.digitOne.textContent = "0";
                this.digitTwo.textContent = "0";
                this.digitThree.textContent = "0";
                this.digitFour.textContent = "0";
                //console.log("clock reset to 000"); 
                //console.log("setting all Intervals");
                this.digitOneIntervalId = setInterval(
                    this.digitOneValues.bind(this),
                    1000
                );
                this.digitTwoIntervalId = setInterval(
                    this.digitTwoValues.bind(this),
                    2000
                );
                this.digitThreeIntervalId = setInterval(
                    this.digitThreeValues.bind(this),
                    4000
                );
                this.digitFourIntervalId = setInterval( 
                    this.digitFourValues.bind(this),
                    8000
                );
                //console.log("finished setting all intervals");
            },
            digitOneValues: function(){
                //console.log("this.digitOne.textContent = " + this.digitOne.textContent);
                if(this.digitOne.textContent == "0"){
                    //console.log("setting digitOne.innerHtml to 1");
                    this.digitOne.textContent = "1";
                }else{
                    //console.log("setting digitOne.innerHtml to 0");
                    this.digitOne.textContent = "0";
                }
                this.digitOneCount++;
                //console.log("this.digitOneCount = " + this.digitOneCount);
                if(this.digitOneCount == 15){
                    //console.log("stopping digitOneCount at 15");
                    clearInterval(this.digitOneIntervalId);
                    //console.log("cleared interval for digitalOne");
                }

            },
            digitTwoValues: function(){
                //console.log("this.digitOne.textContent = " + this.digitOne.textContent);
                if(this.digitTwo.textContent == "0"){
                    //console.log("setting digitOne.innerHtml to 1");
                    this.digitTwo.textContent = "1";
                }else{
                    //console.log("setting digitOne.innerHtml to 0");
                    this.digitTwo.textContent = "0";
                }
                this.digitTwoCount++;
                //console.log("this.digitTwoCount = " + this.digitTwoCount);
                if(this.digitTwoCount == 7){
                    //console.log("stopping digitTwoCount at 7");
                    clearInterval(this.digitTwoIntervalId);
                    //console.log("cleared interval for digitalTwo");
                }

            },
            digitThreeValues: function(){
                //console.log("this.digitOne.textContent = " + this.digitOne.textContent);
                if(this.digitThree.textContent == "0"){
                    //console.log("setting digitOne.innerHtml to 1");
                    this.digitThree.textContent = "1";
                }else{
                    //console.log("setting digitOne.innerHtml to 0");
                    this.digitThree.textContent = "0";
                }
                this.digitThreeCount++;
                //console.log("this.digitThreeCount = " + this.digitThreeCount);
                if(this.digitThreeCount == 3){
                    //console.log("stopping digitThreeCount at 3");
                    clearInterval(this.digitThreeIntervalId);
                    //console.log("cleared interval for digitalThree");
                }

            },
            digitFourValues: function(){
                //console.log("this.digitOne.textContent = " + this.digitOne.textContent);
                if(this.digitFour.textContent == "0"){
                    //console.log("setting digitFour.textContent to 1");
                    this.digitFour.textContent = "1";
                    //console.log("digitOne.textContent = " + this.digitOne.textContent);
                    //console.log("digitTwo.textContent = " + this.digitTwo.textContent);
                    //console.log("digitThree.textContent = " + this.digitThree.textContent);
                    //console.log("digitFour.textContent = " + this.digitFour.textContent);
                    //console.log("stopping digitFourCount at 1");
                    clearInterval(this.digitFourIntervalId);
                    //console.log("cleared interval for digitalFour"); 
                }else{
                    //alert("cleared interval for digitalFour");
                    //console.log("digitOne.textContent = " + this.digitOne.textContent);
                    //console.log("digitTwo.textContent = " + this.digitTwo.textContent);
                    //console.log("digitThree.textContent = " + this.digitThree.textContent);
                    //console.log("digitFour.textContent = " + this.digitFour.textContent);
                   /* clearInterval(this.digitOneIntervalId);
                    clearInterval(this.digitTwoIntervalId);
                    clearInterval(this.digitThreeIntervalId);
                    clearInterval(this.digitFourIntervalId);*/
                    //this.digitFour.textContent = "0";
                    /*if( (this.digitOne.textContent == "1") && (this.digitTwo.textContent == "1") && (this.digitThree.textContent == "1") ){
                        console.log("going to this.stop()");
                        this.stop();
                    }*/
                }
                this.digitFourCount++;
                //console.log("this.digitFourCount = " + this.digitFourCount);
                /*if(this.digitFourCount == 2){
                    console.log("this.digitFourCount")
                    console.log("stopping digitFourCount");
                    clearInterval(this.digitFourIntervalId);
                }*/

            },
            stop: function(){
                //console.log("in this.stop() and clearing all Intervals");
                /*clearInterval(this.digitOneIntervalId);
                clearInterval(this.digitTwoIntervalId);
                clearInterval(this.digitThreeIntervalId);
                clearInterval(this.digitFourIntervalId);*/
            },
            init: function(){
                //console.log("in init");
                this.digitOne = document.getElementById("digit-1-id");
                this.digitTwo = document.getElementById("digit-2-id");
                this.digitThree = document.getElementById("digit-3-id");
                this.digitFour = document.getElementById("digit-4-id");
                //console.log("leaving init");
            }
        }