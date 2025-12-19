
/* BEGIN TableGenerator */ 
    

let  TableGenerator = {
        //Properties
        tableId: "",
        tableData: "",
        tableEle: {},
        initialized: false,

        //Methods

        createTable: function(tableId, tableData){
            console.log("tableId = " + tableId);
            this.tableId = tableId;
            this.tableData = tableData;
            this.tableEle = document.getElementById(this.tableId);
            this.clearTable();
            this.createTableHead();
            this.createTableBody();
        },

        clearTable: function(){
            this.tableEle.deleteTHead();
            let tableBody = this.tableEle.querySelector("tbody");
            if(tableBody){
                tableBody.remove();
            }
           // this.tableEle.removeChild("tbody");
        },

        createTableHead: function(){
            const tableHeadEle = document.createElement("thead");
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
            for(var row = 0; row < this.tableData.body.rows.length; row++){
                tableBodyEle.appendChild(this.createBodyRow(this.tableData.body.rows[row]));
            }
            this.tableEle.appendChild(tableBodyEle);
        },

        createHeadRow(rowData){
            //console.log("in createHeadRosw");
            console.log(" head rowData.length = " + rowData.length);
            const tableRowEle = document.createElement("tr");
            for(col = 0; col < rowData.length; col++){
                const thEle = document.createElement("th");
                for(attribute = 0; attribute < rowData[col].th.length; attribute++){
                    console.log("rowData[" + col + "].th[" + attribute + "][0] = " + rowData[col].th[attribute][0]);
                    console.log("rowData[" + col + "].th[0] = " + rowData[col].th[0])
                    switch (rowData[col].th[attribute][0]){
                        case "text":
                            console.log(" rowData[" + col + "].th[0][1] = " +  rowData[col].th[0][1]);
                            thEle.textContent = rowData[col].th[0][1];
                            break;
                        case "colSpan":
                            console.log(" rowData[" + col + "].th[1][1] = " +  rowData[col].th[1][1]);
                            thEle.setAttribute('colSpan', rowData[col].th[1][1]); // colApan
                            break;
                        case "rowSpan":
                            console.log(" rowData[" + col + "].th[2][1] = " +  rowData[col].th[2][1]);
                            thEle.setAttribute('rowSpan', rowData[col].th[2][1]); // rowSpan
                            break;
                        case "image":
                            break;
                        default: console.log("No such rowData");
                    }
                }
                tableRowEle.appendChild(thEle);
            }
            return tableRowEle;
        },

        createBodyRow(rowData){
            console.log("in createBodyRow");
            console.log("rowData.length = " + rowData.length);
            const tableRowEle = document.createElement("tr");
            for(col = 0; col < rowData.length; col++){
                const tdEle = document.createElement("td");
                for(attribute = 0; attribute < rowData[col].td.length; attribute++){
                    console.log("attribute = " + attribute);
                    console.log("rowData[" + col + "].td[" + attribute + "][0] = " + rowData[col].td[attribute][0]);
                    switch (rowData[col].td[attribute][0]){
                        case "text":
                            console.log(" rowData[" + col + "].td[0][1] = " +  rowData[col].td[0][1]);
                            tdEle.textContent = rowData[col].td[0][1];
                            break;
                        case "image":
                            console.log(" rowData[" + col + "].td[0][1] = " +  rowData[col].td[0][1]);
                            //let tdCellImg = tdEle.insertCell();   
                            //tdCellImg.rowSpan = numberOfRows;  
                            const tdImg = document.createElement('img');
                            tdImg.src = rowData[col].td[0][1];
                            //tdCellImg.appendChild(tdImg);
                            tdEle.appendChild(tdImg);
                            //tableRowEle.appendChild(tdEle);
                            break;
                        case "input":
                            console.log(" rowData[" + col + "].td[0][1] = " +  rowData[col].td[0][1]);
                            const inputEle = document.createElement("input");
                            if(this.dataSelector == 0){
                                inputEle.type = "text";
                            }else{
                                inputEle.type = "number";
                            }
                            //inputEle.addEventListener("keyup", this.handleKeyUp.bind(this));
                            inputEle.maxLength = 1;
                            inputEle.max = 1;
                            inputEle.min = 0;
                            inputEle.style.color = "black";
                            tdEle.appendChild(inputEle);
                            break;
                        case "colSpan":
                            console.log(" rowData[" + col + "].td[1][1] = " +  rowData[col].td[1][1]);
                            tdEle.setAttribute('colSpan', rowData[col].td[1][1]); // colApan
                            //tableRowEle.appendChild(tdEle);
                            break;
                        case "rowSpan":
                            console.log(" rowData[" + col + "].td[2][1] = " +  rowData[col].td[2][1]);
                            tdEle.setAttribute('rowSpan', rowData[col].td[2][1]); // rowSpan
                            //tableRowEle.appendChild(tdEle);
                            break;
                        default: console.log("No such rowData");
                    }
                    tableRowEle.appendChild(tdEle);
                }
            }
            return tableRowEle;
        }

        /*
        createTableSection: function(tableDataRow, tableSection){
           // console.log("In createTableSection table section: " + tableSection);
           // console.log("tableDataRow[0].col[0].label = " + tableDataRow[0].col[0].label);
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
                       // console.log("adding img");
                            console.log("image name = " + colArray[colEle].image.slice(11,colArray[colEle].image.length - 4));
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
               // console.log("tableId = " + tableId);
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