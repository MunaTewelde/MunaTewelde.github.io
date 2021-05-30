var accountInfo = [];

var bankApp = (function () {
    var name = "";
    var balance = 0;
    var y;

    function showData() {
        var dataText = "";
        for (let i = 0; i < accountInfo.length; i++) {
            dataText += "Account name: " + accountInfo[i].name + " Balance: " + accountInfo[i].balance + "\n";
        }
        document.getElementById("output").value = dataText;

    }

    return {
        createAccount: function () {
            name = document.getElementById("accountname").value;
            balance = document.getElementById("deposit").value;

            accountInfo.push({ "name": name, "balance": balance });
            showData();
            document.getElementById("accountname").value = "";
            document.getElementById("deposit").value = "";
        }

    }

})();

document.getElementById("create").onclick = bankApp.createAccount;