function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    upLeft(pHeight, pColorEven, pColorOdd, pSymbol); // Display upLeft content in upRight section
    upRight(pHeight, pColorEven, pColorOdd, pSymbol); // Display upRight content in upLeft section
    downLeft(pHeight, pColorEven, pColorOdd, pSymbol); // Display downLeft content in downRight section
    downRight(pHeight, pColorEven, pColorOdd, pSymbol); // Display downRight content in downLeft section
}

function downLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (var i = pHeight - 1; i >= 0; i--) {
        // Create each line
        var line = "";
        // Add spaces based on the current row
        for (var s = 0; s < (pHeight - i - 1); s++) {
            line += "&nbsp;&nbsp;"; // 2 spaces
        }
        // Add symbols
        for (var j = 0; j <= i; j++) {
            // Add symbols based on the current row index
            line += "<span style='color:" + (j % 2 ? pColorEven : pColorOdd) + ";'>" + pSymbol + "</span>";
        }
        rLine += "<p>" + line + "</p>";
    }
    document.getElementById("upRight").innerHTML = rLine;
}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (var i = 0; i < pHeight; i++) {
        // Create each line
        var line = "";
        // Add spaces based on the current row
        for (var s = 0; s < (pHeight - i - 1); s++) {
            line += "&nbsp;&nbsp;"; // 2 spaces
        }
        // Add symbols
        for (var j = 0; j <= i; j++) {
            // Add symbols based on the current row index
            line += "<span style='color:" + (j % 2 ? pColorEven : pColorOdd) + ";'>" + pSymbol + "</span>";
        }
        rLine += "<p>" + line + "</p>";
    }
    document.getElementById("downRight").innerHTML = rLine;
}
function upLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (i = 0; i < pHeight; i++) {
        // Create each line on the Rhombus
        var line = "";
        for (j = 0; j <= i; j++) {
            // Is the position even or odd so we change the color
            if (j % 2) {
                // even
                line += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                // odd
                line += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }
        rLine += "<p>" + line + "</p>";
    }
    document.getElementById("upLeft").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (i = 0; i < pHeight; i++) {
        // Create each line on the Rhombus
        var line = "";
        for (j = 0; j < pHeight - i; j++) {
            // Is the position even or odd so we change the color
            if (j % 2) {
                // even
                line += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                // odd
                line += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }
        rLine += "<p>" + line + "</p>";
    }
    document.getElementById("downLeft").innerHTML = rLine;
}
