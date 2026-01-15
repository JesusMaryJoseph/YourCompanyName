
    let QuestionAnswerManager = {
        //Properties

        //Methods
        revealAnswer: function(id){
        // alert("in revealAnswer");
        // alert("id =  " + id);con
            console.log("id + '-answer = " + id + "-answer");
            const eleName = id.slice(0,id.length-3);
            console.log("eleName = " + eleName);
            //document.getElementById(id).classList.replace(id + "-answer-hidden", id + "-answer");
            document.getElementById(id).classList.toggle("answer-hidden");
        }
    }
