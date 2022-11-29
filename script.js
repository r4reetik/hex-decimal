const hex = document.getElementById("hex");
const dec = document.getElementById("dec");

hex.addEventListener("input", (e) => {
    if (e.target.value && e.target.value != "0x") {
        e.target.value = e.target.value.replace(/[^0-9a-fA-F]/gi, "");
        dec.value = convertHexToDecimal(e.target.value);
    } else {
        dec.value = "";
    }
});

dec.addEventListener("input", (e) => {
    if (e.target.value) {
        e.target.value = e.target.value.replace(/[^0-9]/gi, "");
        hex.value = convertDecimalToHex(e.target.value);
    } else {
        hex.value = "";
    }
});

const convertHexToDecimal = (hex) => {
    return parseInt(hex, 16).toString(10);
};

convertDecimalToHex = (dec) => {
    return parseInt(dec, 10).toString(16);
};
