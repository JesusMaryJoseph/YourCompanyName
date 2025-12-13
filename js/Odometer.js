 
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
                console.log("setting 8sec timer");
                if( !this.initialized){this.init(); this.initialized = true}
                let timerId = setTimeout(
                    this.digitInterval(),
                    8000
                )
            },*/
            start: function(){
                console.log("this.count = " + this.count);
                console.log("setting Interval 500ms");
                if( !this.initialized){this.init(); this.initialized = true}
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
                console.log("this.digitOneCount = " + this.digitOneCountount);
                if(this.digitOneCount == 16){
                    console.log("stopping");
                    clearInterval(this.digitOneIntervalId);
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
                console.log("this.digitTwoCount = " + this.digitTwoCount);
                if(this.digitTwoCount == 8){
                    console.log("stopping");
                    clearInterval(this.digitTwoIntervalId);
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
                console.log("this.digitThreeCount = " + this.digitThreeCount);
                if(this.digitThreeCount == 4){
                    console.log("stopping");
                    clearInterval(this.digitThreeIntervalId);
                }

            },
            digitFourValues: function(){
                //console.log("this.digitOne.textContent = " + this.digitOne.textContent);
                if(this.digitFour.textContent == "0"){
                    //console.log("setting digitOne.innerHtml to 1");
                    this.digitFour.textContent = "1";
                }else{
                    //console.log("setting digitOne.innerHtml to 0");
                    this.digitFour.textContent = "0";
                }
                this.digitFourCount++;
                console.log("this.digitFourCount = " + this.digitFourCount);
                if(this.digitFourCount == 2){
                    console.log("stopping");
                    clearInterval(this.digitFourIntervalId);
                }

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