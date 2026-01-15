
/* BEGIN TableGenerator */ 
    

let  TableGenerator = {
        //Properties
        basicTableSelected: "and",
        basicTableJSON: JsonTableDataPractice74LS08,
        circuitTableSelected: "NotXor",
        circuitTableJSON: JsonTableDataPracticeNotXor,
        tableId: "",
        tableData: {},
        validInputs: [ "fFtT","01", "hHlL"],
        dataType: 0, // valid values: 0=> (for "FT"), 1 => (for "01"), or  2 => (for "LH")
        tableEle: {},
        initialized: false,

        //Methods

        createTable: function(tableId, tableData){
            //console.log("tableId = " + tableId);
            this.tableId = tableId;
            this.tableData = tableData;
            this.tableEle = document.getElementById(this.tableId);
            //console.log("tableId.slice(0,3) = " + tableId.slice(0,3));
            if(tableId.slice(0,3) === "bas" || "cir"){
                //console.log("in this.deleteExistingTables()");
                let oldTable = document.getElementById(tableId);
                let tableHead = oldTable.querySelector("thead");
                if(tableHead){
                    //console.log("deleting table");
                    this.deleteTable(tableId);
                }
                //console.log("after if(talbeHead");
            }
            if(tableId.slice(0,5) === "morse"){
                //console.log("adding 'morse-code-table' class to this.tableEle");
                this.tableEle.classList.add("morse-code-table");
            }
            this.createTableHead();
            this.createTableBody();
            //console.log("tableId = " + tableId);
            if(tableId == "basic-practice-table-id"){
                this.addEventListener();
                // delete/add class: "selected-gate" from appropriate selector Labels
                switch(tableData){
                    case JsonTableDataPractice74LS08:
                        document.getElementById(this.basicTableSelected + "-label-id").classList.remove("selected-gate");
                        this.basicTableSelected = "and";
                        document.getElementById("and-label-id").classList.add("selected-gate");
                        this.basicTableJSON = JsonTableDataPractice74LS08;
                        break;
                    case JsonTableDataPractice74LS32:
                        document.getElementById(this.basicTableSelected + "-label-id").classList.remove("selected-gate");
                        this.basicTableSelected = "or";
                        document.getElementById("or-label-id").classList.add("selected-gate");
                        this.basicTableJSON = JsonTableDataPractice74LS32;
                        break;
                    case JsonTableDataPractice74LS86:
                        document.getElementById(this.basicTableSelected + "-label-id").classList.remove("selected-gate");
                        this.basicTableSelected = "xor";
                        document.getElementById("xor-label-id").classList.add("selected-gate");
                        this.basicTableJSON = JsonTableDataPractice74LS86;
                        break;
                    case JsonTableDataPractice74LS00:
                        document.getElementById(this.basicTableSelected + "-label-id").classList.remove("selected-gate");
                        this.basicTableSelected = "nand";
                        document.getElementById("nand-label-id").classList.add("selected-gate");
                        this.basicTableJSON = JsonTableDataPractice74LS00;
                        break;
                    case JsonTableDataPractice74LS02:
                        document.getElementById(this.basicTableSelected + "-label-id").classList.remove("selected-gate");
                        this.basicTableSelected = "nor";
                        document.getElementById("nor-label-id").classList.add("selected-gate");
                        this.basicTableJSON = JsonTableDataPractice74LS02;
                        break;
                    case JsonTableDataPractice74LS266:
                        document.getElementById(this.basicTableSelected + "-label-id").classList.remove("selected-gate");
                        this.basicTableSelected = "nxor";
                        document.getElementById("nxor-label-id").classList.add("selected-gate");
                        this.basicTableJSON = JsonTableDataPractice74LS266;
                        break;
                    default: //console.log("no available TableData");
                }
            }
            if(tableId == "circuit-practice-table-id"){
                this.addCircuitEventListener();
                switch(tableData){
                    case JsonTableDataPracticeNotXor:
                        document.getElementById(this.circuitTableSelected + "-id").classList.remove("circuit-selected");
                        this.circuitTableSelected = "NotXor";
                        document.getElementById("NotXor-id").classList.add("circuit-selected");
                        this.circuitTableJSON = JsonTableDataPracticeNotXor;
                        break;
                    case JsonTableDataPracticeAndNotOr:
                        document.getElementById(this.circuitTableSelected + "-id").classList.remove("circuit-selected");
                        this.circuitTableSelected = "AndNotOr";
                        document.getElementById("AndNotOr-id").classList.add("circuit-selected");
                        this.circuitTableJSON = JsonTableDataPracticeAndNotOr;
                        break;
                    case JsonTableDataPracticeOrAndXor:
                        document.getElementById(this.circuitTableSelected + "-id").classList.remove("circuit-selected");
                        this.circuitTableSelected = "OrAndXor";
                        document.getElementById("OrAndXor-id").classList.add("circuit-selected");
                        this.circuitTableJSON = JsonTableDataPracticeOrAndXor;
                        break;
                    case JsonTableDataPracticeNotAndXorOr:
                        document.getElementById(this.circuitTableSelected + "-id").classList.remove("circuit-selected");
                        this.circuitTableSelected = "NotAndXorOr";
                        document.getElementById("NotAndXorOr-id").classList.add("circuit-selected");
                        this.circuitTableJSON = JsonTableDataPracticeNotAndXorOr;
                        break;
                    case JsonTableDataPracticeNotXorOrNand:
                        document.getElementById(this.circuitTableSelected + "-id").classList.remove("circuit-selected");
                        this.circuitTableSelected = "NotXorOrNand";
                        document.getElementById("NotXorOrNand-id").classList.add("circuit-selected");
                        this.circuitTableJSON = JsonTableDataPracticeNotXorOrNand;
                        break;
                    case JsonTableDataPracticeNandNotNand:
                        document.getElementById(this.circuitTableSelected + "-id").classList.remove("circuit-selected");
                        this.circuitTableSelected = "NandNotNand";
                        document.getElementById("NandNotNand-id").classList.add("circuit-selected");
                        this.circuitTableJSON = JsonTableDataPracticeNandNotNand;
                        break;
                    case JsonTableDataPracticeNorNandNxor:
                        document.getElementById(this.circuitTableSelected + "-id").classList.remove("circuit-selected");
                        this.circuitTableSelected = "NorNandNxor";
                        document.getElementById("NorNandNxor-id").classList.add("circuit-selected");
                        this.circuitTableJSON = JsonTableDataPracticeNorNandNxor;
                        break;
                    case JsonTableDataPracticeAndOrNandNxorNandNor:
                        document.getElementById(this.circuitTableSelected + "-id").classList.remove("circuit-selected");
                        this.circuitTableSelected = "AndOrNandNxorNandNor";
                        document.getElementById("AndOrNandNxorNandNor-id").classList.add("circuit-selected");
                        this.circuitTableJSON = JsonTableDataPracticeAndOrNandNxorNandNor;
                        break;
                    case JsonTableDataPracticeNorNorNor:
                        document.getElementById(this.circuitTableSelected + "-id").classList.remove("circuit-selected");
                        this.circuitTableSelected = "NorNorNor";
                        document.getElementById("NorNorNor-id").classList.add("circuit-selected");
                        this.circuitTableJSON = JsonTableDataPracticeNorNorNor;
                        break;
                    case JsonTableDataPracticeTwoToFourDecoder:
                        document.getElementById(this.circuitTableSelected + "-id").classList.remove("circuit-selected");
                        this.circuitTableSelected = "TwoToFourDecoder";
                        document.getElementById("TwoToFourDecoder-id").classList.add("circuit-selected");
                        this.circuitTableJSON = JsonTableDataPracticeTwoToFourDecoder;
                        break;
                    case JsonTableDataPracticeAndAndOr:
                        document.getElementById(this.circuitTableSelected + "-id").classList.remove("circuit-selected");
                        this.circuitTableSelected = "AndAndOrW3Inputs";
                        document.getElementById("AndAndOrW3Inputs-id").classList.add("circuit-selected");
                        this.circuitTableJSON = JsonTableDataPracticeAndAndOr;
                        break;
                    default: //console.log("no available TableData");
                }
            }
            // delete/add class: ""
        },

        changeDataType: function(dataType){
            //console.log("in changeDataType where dataType = " + dataType);
            this.dataType = dataType;
            //console.log("this.dataType = " + this.dataType);
            // delete existing tables
            this.deleteTable("basic-practice-table-id");
            this.deleteTable("circuit-practice-table-id");
            // recreated existing tables with new data types
            this.createTable("basic-practice-table-id",this.basicTableJSON);
            this.createTable("circuit-practice-table-id", this.circuitTableJSON);
        },

        deleteTable: function(tableId){
            //console.log("tableId to be deleted = " + tableId);
            let oldTable = document.getElementById(tableId);
            oldTable.deleteTHead();
            let tableBody = oldTable.querySelector("tbody");
            if(tableBody){
                tableBody.remove();
            }
           // this.tableEle.removeChild("tbody");
        },

        addEventListener: function(){
            //console.log("in addEventListener");
            const thBtnEle = document.getElementById("thBtn-id");
            if(thBtnEle){
                //console.log("thBtnEle exists");
            }else{
                //console.log("thBtnEle does not exists");
            }
            thBtnEle.addEventListener("click", ()=>{
                //console.log("in thBtn.addEventListener");
                //console.log("thBtn.textContent = " + thBtnEle.textContent);
                if(thBtnEle.textContent === "Show Answers"){
                    //console.log("changing 'Show Answers' to 'Hide Answers'");
                    thBtnEle.textContent = "Hide Answers";
                    //const answerElementsHidden = document.getElementsByClassName('hide-answer');
                    for(var row = 0; row < 4; row++){
                        //console.log("id = answer-" + row + "-id");
                        document.getElementById("answer-" + row + "-id").classList.remove("hide-answer");
                    }
                }else{
                    //console.log("changing 'Hide Answers' to 'Show Answers'");
                    thBtnEle.textContent = "Show Answers";
                    for(var row = 0; row < 4; row++){
                        //console.log("id = answer-" + row + "-id");
                        document.getElementById("answer-" + row + "-id").classList.add("hide-answer");
                    }
                }
            });
        },

        addCircuitEventListener: function(){
            //console.log("in addCircuitEventListener()");
            const thBtnEle = document.getElementById("circuit-thBtn-id");
            if(thBtnEle){
                //console.log("thBtnEle exists");
            }else{
                //console.log("thBtnEle does not exists");
            }
            thBtnEle.addEventListener("click", ()=>{
                //console.log("in thBtn.addEventListener");
                //console.log("thBtn.textContent = " + thBtnEle.textContent);
                //console.log("this.tableData.head.rows[1][2].th[1][1] = " + this.tableData.head.rows[1][2].th[1][1]);
                if(thBtnEle.textContent === "Show Answers"){
                    //console.log("changing 'Show Answers' to 'Hide Answers'");
                    thBtnEle.textContent = "Hide Answers";
                    //const answerElementsHidden = document.getElementsByClassName('hide-answer');
                    for(var row = 0; row < this.tableData.body.rows.length; row++){
                        for(var col = 0; col < this.tableData.head.rows[1][2].th[1][1]/2; col++){
                            //console.log("id = answer-" + row + col + "-id");
                            document.getElementById("answer-" + row + col + "-id").classList.remove("hide-answer");
                        }
                    }
                }else{
                   // //console.log("changing 'Hide Answers' to 'Show Answers'");
                    thBtnEle.textContent = "Show Answers";
                    for(var row = 0; row < this.tableData.body.rows.length; row++){
                        for(var col = 0; col < this.tableData.head.rows[1][2].th[1][1]/2; col++){
                            //console.log("id = answer-" + row + col + "-id");
                            document.getElementById("answer-" + row + col + "-id").classList.add("hide-answer");
                        }
                    }
                }
            });
        },

        createTableHead: function(){
            //console.log("in createTableHead");
            const tableHeadEle = document.createElement("thead");
            if(this.tableId.slice(0,5) == "morse"){
                //console.log("adding class 'smk-header' to tableHeadEle");
                tableHeadEle.classList.add("smk-header");
            }
            //console.log("this.tableData.head.rows.length =  " + this.tableData.head.rows.length);
            for(var row = 0; row < this.tableData.head.rows.length; row++){
                //console.log("row =  " + row);
                //console.log("this.tableData.head.rows[0][0].th.text =  " + this.tableData.head.rows[1][1].th[0][1]);
                tableHeadEle.appendChild(this.createHeadRow(this.tableData.head.rows[row]));
            }
            this.tableEle.appendChild(tableHeadEle);
        },

        createTableBody: function(){
            let tableBodyEle = document.createElement("tbody");
            if(this.tableId.slice(0,5) == "morse"){
                //console.log("adding class 'smk-body' to tableBodyEle");
                tableBodyEle.classList.add("smk-body");
            }
            for(var row = 0; row < this.tableData.body.rows.length; row++){
                tableBodyEle.appendChild(this.createBodyRow(this.tableData.body.rows[row]));
            }
            this.tableEle.appendChild(tableBodyEle);
        },

        createHeadRow(rowData){ //rowData = this.tableData.head.rows[row]
            //console.log("in createHeadRow");
            //console.log(" head rowData.length = " + rowData.length);
            const tableRowEle = document.createElement("tr");
            //console.log("rowData.class = " + rowData[1].class);
            for(col = 0; col < rowData.length; col++){  //rowData.length
                const thEle = document.createElement("th");
                for(attrNmbr = 0; attrNmbr < rowData[col].th.length; attrNmbr++){
                    //console.log("rowData[" + col + "].th[" + attrNmbr + "][0] = " + rowData[col].th[attrNmbr][0]);
                    switch (rowData[col].th[attrNmbr][0]){
                        case "text":
                            //console.log(" rowData[" + col + "].th[0][1] = " +  rowData[col].th[attrNmbr][1]);
                            thEle.textContent = rowData[col].th[0][1];
                            break;
                        case "colSpan":
                           //console.log(" rowData[" + col + "].th[1][1] = " +  rowData[col].th[attrNmbr][1]);
                            thEle.setAttribute('colSpan', rowData[col].th[1][1]); // colApan
                            break;
                        case "rowSpan":
                            //console.log(" rowData[" + col + "].th[2][1] = " +  rowData[col].th[attrNmbr][1]);
                            thEle.setAttribute('rowSpan', rowData[col].th[2][1]); // rowSpan
                            break;
                        case "image":
                            break;
                        case "class":
                            //console.log("in case 'class'");
                            /*if(col == rowData.length - 1){
                                //console.log("last column = " + col);
                                tdEle.classList.add("hide-answer");
                            }*/
                            //console.log(" rowData[" + col + "].td[" + attrNmbr + "][1] = " +  rowData[col].td[attrNmbr][1]);
                            thEle.classList.add(rowData[col].th[attrNmbr][1]);
                            break;
                        case "button":
                            //console.log("in case 'button'");
                            //console.log(" rowData[" + col + "].td[0][1] = " +  rowData[col].th[attrNmbr][1]);
                            //let tdCellImg = tdEle.insertCell();   
                            //tdCellImg.rowSpan = numberOfRows;  
                            const thBtn = document.createElement('button');
                            if(this.tableId == "basic-practice-table-id"){ 
                                thBtn.id = "thBtn-id";
                            }else{ 
                                thBtn.id = "circuit-thBtn-id";
                            }
                            thBtn.textContent = "Show Answers";
                            //thBtn.classList.add("hide-answer");
                            //tdCellImg.appendChild(tdImg);
                            thEle.appendChild(thBtn);
                            break;
                        default: //console.log("No such rowData");
                    }
                }
                tableRowEle.appendChild(thEle);
            }
            return tableRowEle;
        },

        createBodyRow(rowData){
            //console.log("in createBodyRow");
            //console.log("rowData.length = " + rowData.length);
            const tableRowEle = document.createElement("tr");
            for(col = 0; col < rowData.length; col++){
                const tdEle = document.createElement("td");
                //if(this.tableId.slice(0,5) == "morse"){
                //console.log("adding class 'tdth-wrapper' to BodyTdEle");
                tdEle.classList.add("tdth-contents");
                //}
                for(attrNmbr = 0; attrNmbr < rowData[col].td.length; attrNmbr++){
                    //console.log("attrNmbr = " + attrNmbr);
                    //console.log("rowData[" + col + "].td[" + attrNmbr + "][0] = " + rowData[col].td[attrNmbr][0]);
                    switch (rowData[col].td[attrNmbr][0]){
                        case "text":
                            //console.log("in case 'text'");
                            /*if(col == rowData.length - 1){
                                //console.log("last column = " + col);
                                tdEle.classList.add("hide-answer");
                            }*/
                            //console.log(" rowData[" + col + "].td[attrNmbr][1] = " +  rowData[col].td[attrNmbr][1]);
                            tdEle.textContent = rowData[col].td[attrNmbr][1];
                            break;
                        case "data":
                            //console.log("rowData[col].td[attrNmbr][1][this.dataType] = " + rowData[col].td[attrNmbr][1][this.dataType]);
                            tdEle.textContent = rowData[col].td[attrNmbr][1][this.dataType];
                        case "id":
                            //console.log("in case 'id'");
                            console.log(" rowData[" + col + "].td[attrNmbr][1] = " +  rowData[col].td[attrNmbr][1]);
                            tdEle.id = rowData[col].td[attrNmbr][1];
                            console.log("tdEle.id = " + tdEle.id);
                            break;
                        case "class":
                            //console.log("in case 'class'");
                            /*if(col == rowData.length - 1){
                                //console.log("last column = " + col);
                                tdEle.classList.add("hide-answer");
                            }*/
                            //console.log(" rowData[" + col + "].td[" + attrNmbr + "][1] = " +  rowData[col].td[attrNmbr][1]);
                            tdEle.classList.add(rowData[col].td[attrNmbr][1]);
                            break;
                        case "image":
                            //console.log("in case 'image'");
                            //console.log(" rowData[" + col + "].td[0][1] = " +  rowData[col].td[attrNmbr][1]);
                            //let tdCellImg = tdEle.insertCell();   
                            //tdCellImg.rowSpan = numberOfRows;  
                            const tdImg = document.createElement('img');
                            tdImg.src = rowData[col].td[attrNmbr][1];
                            tdImg.classList.add("img-width");
                            tdEle.appendChild(tdImg);
                            break;
                        case "input":
                            console.log("in case 'input'");
                            console.log(" rowData[" + col + "].td[0][1] = " +  rowData[col].td[attrNmbr][1]);
                            const inputEle = document.createElement("input");
                            inputEle.id = rowData[col].td[attrNmbr][1]
                            inputEle.addEventListener("keydown", this.inputEventListener.bind(this));
                            inputEle.classList.add("table-input-width-font-size");
                            inputEle.setAttribute("autocomplete", "off");
                           /* switch(this.dataType){
                                case 0:
                                    console.log("setting input.type to 'text'");
                                    inputEle.type = "text";
                                    inputEle.pattern = "fFtT{1,1}";
                                    inputEle.maxLength = 1;
                                    console.log("setting input.pattern to '[f,F,t,T]{1}'");
                                    break;
                                case 1:
                                    console.log("setting input.type to 'number'");
                                    inputEle.type = "number";
                                    inputEle.pattern = "[0,1]{1}";
                                    console.log("setting input.pattern to '[0-1]{1}'");
                                    break;
                                case 2:
                                    console.log("setting input.type to 'text'");
                                    inputEle.type = "text";
                                    inputEle.pattern = "[h,H,l,L]{1}";
                                    console.log("setting input.pattern to '[h,H,l,L]{1}'");
                                    break;
                                default: //console.log("No such dataSelector");
                            }*/
                            //inputEle.addEventListener("keyup", this.handleKeyUp.bind(this));
                            //inputEle.maxLength = 1;
                            inputEle.style.color = "black";
                            tdEle.appendChild(inputEle);
                            break;
                        case "colSpan":
                            //console.log(" rowData[" + col + "].td[1][1] = " +  rowData[col].td[1][1]);
                            tdEle.setAttribute('colSpan', rowData[col].td[1][1]); // colApan
                            break;
                        case "rowSpan":
                            //console.log(" rowData[" + col + "].td[2][1] = " +  rowData[col].td[2][1]);
                            tdEle.setAttribute('rowSpan', rowData[col].td[2][1]); // rowSpan
                            break;
                        default: //console.log("No such rowData");
                    }
                    tableRowEle.appendChild(tdEle);
                }
            }
            return tableRowEle;
        },

        validateInput: function(){
            console.log("validating Input");
        },

        inputEventListener: function(evt){
            let validInput = "";
           //console.log("key has been pressed on this Input");
            //console.log("key pressed is " + evt.key);
            //console.log("evt.target.id = " + evt.target.id);
            //console.log("this.dataType = " + this.dataType);
            const validValues = this.validInputs[this.dataType];
            //console.log("valid Values = " + validValues);

            if (validValues.includes(evt.key) || (evt.key === "Backspace")){
                validInput += evt.key;
                console.log("validInput = " + validInput);
                //console.log("document.getElementById(evt.target.id).value.length =" + document.getElementById(evt.target.id).value.length);
                if(document.getElementById(evt.target.id).value.length < 1){
                    console.log("validInput = " + validInput);
                    validInput = evt.key;
                }else{
                    //console.log("valid inputs but more than once");
                    if(evt.key === "Backspace"){
                        console.log("evt.key === Backspace");
                    }else{
                        console.log("2nd input is not the 'Backspace'");
                        evt.preventDefault();
                    }
                }
            }else{
                console.log("preventing input as input is not a valid value");
                evt.preventDefault();
            }
        }

        /*
        createTableSection: function(tableDataRow, tableSection){
           // //console.log("In createTableSection table section: " + tableSection);
           // //console.log("tableDataRow[0].col[0].label = " + tableDataRow[0].col[0].label);
            //let headRowArray = this.tableData.LS00.head.row;
            let rowArray = tableDataRow;
            nmbrRows = rowArray.length;
            //alert("nmbrRows = " + nmbrRows);
           // this.nmbrHeadRows = this.tableData.LS00.head.row.length;
            //alert("allCols[0].label = " + allCols[0].label);
           // for (const rowEle of JsonTableData74LS00.head.row) {
            for (let rowEle = 0; rowEle < nmbrRows; rowEle++) {
                const trEle = document.createElement('tr');
                //alert("rowEle = " + rowEle);
                //console.log("rowEle = " + rowEle);
                let colArray = rowArray[rowEle].col;
                let nmbrCols = rowArray[rowEle].col.length;
                //alert("nmbr of cols = " + nmbrCols);
                for(let colEle = 0; colEle < nmbrCols; colEle++) {
                    //console.log("colEle = " + colEle);
                    //alert("colEle = " + colEle);
                    //alert("dataType = " + dataType);
                    //let tdhLabel = rowArray[rowEle].col[colEle].label;
                    if(tableSection == "head"){
                        //alert("creating new dataEld for 'th'");
                        const thEle = document.createElement('th');
                        thEle.textContent = colArray[colEle].text;
                        //console.log("thEle.textContent = " + thEle.textContent);
                        thEle.setAttribute('colSpan', colArray[colEle].colSpan); // colApan
                        thEle.setAttribute('rowSpan', colArray[colEle].rowSpan); // rowSpan
                        trEle.appendChild(thEle);
                        //console.log("thEle.appended to trEle");
                    }else{
                       // alert("creating new dataEld for 'td'");
                        const tdEle = document.createElement('td');
                        //if(colArray[colEle].label.slice(0,5) == "media"){
                        if(colArray[colEle].image){
                       // //console.log("adding img");
                            //console.log("image name = " + colArray[colEle].image.slice(11,colArray[colEle].image.length - 4));
                            let imgName = colArray[colEle].image.slice(11,colArray[colEle].image.length - 4);
                            var imgEle = document.createElement('img');
                        //console.log("colArray[colEle].label = " + colArray[colEle].label);
                            imgEle.src = colArray[colEle].image;
                            //console.log("img.src: " + imgEle.src); 
                            imgEle.alt = "Rising Edge";
                            imgEle.classList.add(imgName);
                            tdEle.appendChild(imgEle);
                        //console.log("imgEle appended");
                        }else{
                            tdEle.textContent = colArray[colEle].text;
                        }
                        //tdEle.textContent = colArray[colEle].label;
                        //console.log("tdEle.textContent = " + tdEle.textContent);
                        //tdEle.appendChild(divEle);
                        tdEle.setAttribute('colSpan', colArray[colEle].colSpan); // colApan
                        tdEle.setAttribute('rowSpan', colArray[colEle].rowSpan); // rowSpan
                        trEle.appendChild(tdEle);
                    }
                }
               // //console.log("tableId = " + tableId);
                if(tableSection == "head"){
                    this.tableHeadEle.appendChild(trEle);
                }else{
                    this.tableBodyEle.appendChild(trEle);
                }                                                
            }

            if(tableSection == "head"){
                this.tableEle.appendChild(this.tableHeadEle);
            }else{
                this.tableEle.appendChild(this.tableBodyEle);
            } 
        }*/
    }
/* END TableGenerator */