/*
*
*
*
*
*
*/ 


const TableDataAsciiString = `{   
"head": { "rows":   [
                        [  
                            { "th":     [
                                            ["text", "ASCII Table"],
                                            ["colSpan", 4],
                                            ["rowSpan", 1],
                                            ["class", "table-title"],
                                            ["class", "table-padding-margin"]                                                                           
                                        ]
                            }
                        ],
                        [   
                            { "th":
                                        [
                                            ["text",  "DEC"],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "inputs-output-tr"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },
                            { "th":
                                        [
                                            ["text", "HEX"],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "inputs-output-tr"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },
                            { "th":
                                        [
                                            ["text", "SYMBOL"],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "inputs-output-tr"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },
                            { "th":
                                        [
                                            ["text", "DESCRIPTION"],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "inputs-output-tr"],
                                            ["class", "table-padding-margin"]
                                        ]
                            }
                        ]
                    ]
        }
}`;
const JsonTableDataASCII = JSON.parse(TableDataAsciiString);

/*
,   
                            { "th":
                                        [
                                            ["text", ""],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "heading-divider"],
                                        ]
                            },   
                            { "th":
                                        [
                                            ["text",  "DEC"],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "inputs-output-tr"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },
                            { "th":
                                        [
                                            ["text", "HEX"],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "inputs-output-tr"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },
                            { "th":
                                        [
                                            ["text", "SYMBOL"],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "inputs-output-tr"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },
                            { "th":
                                        [
                                            ["text", "DESCRIPTION"],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "inputs-output-tr"],
                                            ["class", "table-padding-margin"]
                                        ]
                            }
                        ] 
*/

/*
 `{   
"head": { "rows":   [
                        [  
                            { "th":     [
                                            ["text", "74LS00 NAND Logic Gate"],
                                            ["colSpan", 5],
                                            ["rowSpan", 1],
                                            ["class", "table-title"],
                                            ["class", "table-padding-margin"]                                                                           
                                        ]
                            }
                        ],
                        [   
                            { "th":
                                        [
                                            ["text",  "Inputs"],
                                            ["colSpan", 2],
                                            ["rowSpan", 1],
                                            ["class", "inputs-output-tr"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },
                            { "th":
                                        [
                                            ["text", "Design Circuitry"],
                                            ["colSpan", 1],
                                            ["rowSpan", 4],
                                            ["class", "inputs-output-tr"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },
                            { "th":
                                        [
                                            ["text", "Output"],
                                            ["colSpan", 2],
                                            ["rowSpan", 1],
                                            ["class", "inputs-output-tr"],
                                            ["class", "table-padding-margin"]
                                        ]
                            }
                        ],
                        [    
                            { "th":                            
                                        [       
                                            ["text",  "P1"],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "bits"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },
                            { "th":
                                        [  
                                            ["text", "P0"],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "bits"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },
                            { "th":
                                        [  
                                            ["text", "Q0"],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "bits"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },
                            { "th":
                                        [  
                                            ["button", "Show Answer"],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "bits"],
                                            ["class", "table-padding-margin"]
                                        ]
                            }
                        ]   
                    ]                  
        },
"body": { "rows":   [ 
                        [     
                            { "td":     
                                        [
                                            ["data", [ "F", "0", "L"]],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "bits"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },     
                            { "td":     
                                        [
                                            ["data", [ "F", "0", "L"]],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "bits"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },     
                            { "td":     
                                        [
                                            ["image", "media/imgs/basicLogicGates/NAND_wPQ.svg"],
                                            ["colSpan", 1],
                                            ["rowSpan", 4],
                                            ["class", "bits"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },     
                            { "td":     
                                        [
                                            ["input", "user-answer-0-id"],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "bits"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },     
                            { "td":     
                                        [
                                            ["data", [ "T", "1", "H"]],
                                            ["id", "answer-0-id"],
                                            ["class", "hide-answer"],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "bits"],
                                            ["class", "table-padding-margin"]
                                        ]
                            }
                        ], 
                        [ 
                            { "td":     
                                        [
                                            ["data", [ "F", "0", "L"]],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "bits"],
                                            ["class", "table-padding-margin"]
                                        ]
                            }, 
                            { "td":     
                                        [
                                            ["data", [ "T", "1", "H"]],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "bits"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },     
                            { "td":     
                                        [
                                            ["input", "user-answer-1-id"],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "bits"],
                                            ["class", "table-padding-margin"]
                                        ]
                            }, 
                            { "td":     
                                        [
                                            ["data", [ "T", "1", "H"]],
                                            ["id", "answer-1-id"],
                                            ["class", "hide-answer"],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "bits"],
                                            ["class", "table-padding-margin"]
                                        ]
                            }
                        ],
                        [ 
                            { "td":     
                                        [
                                            ["data", [ "T", "1", "H"]],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "bits"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },
                            { "td":     
                                        [
                                            ["data", [ "F", "0", "L"]],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "bits"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },     
                            { "td":     
                                        [
                                            ["input", "user-answer-2-id"],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "bits"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },
                            { "td":     
                                        [
                                            ["data", [ "T", "1", "H"]],
                                            ["id", "answer-2-id"],
                                            ["class", "hide-answer"],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "bits"],
                                            ["class", "table-padding-margin"]
                                        ]
                            }
                        ],
                        [  
                            { "td":     
                                        [
                                            ["data", [ "T", "1", "H"]],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "bits"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },  
                            { "td":     
                                        [                
                                            ["data", [ "T", "1", "H"]],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "bits"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },     
                            { "td":     
                                        [
                                            ["input", "user-answer-3-id"],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "bits"],
                                            ["class", "table-padding-margin"]
                                        ]
                            },  
                            { "td":     
                                        [ 
                                            ["data", [ "F", "0", "L"]],
                                            ["id", "answer-3-id"],
                                            ["class", "hide-answer"],
                                            ["colSpan", 1],
                                            ["rowSpan", 1],
                                            ["class", "bits"],
                                            ["class", "table-padding-margin"]
                                        ]
                            } 
                        ]
                    ]
        }
}`;
*/