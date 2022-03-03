let validator = {
  kiemTraSo: function (value, idErr) {
    errEl = document.getElementById(idErr);
    let parten = new RegExp("^(0|[1-9][0-9]*)$");
    if (parten.test(value)) {
      errEl.innerText = "";
      return true;
    } else {
      errEl.innerText = "Your input must be an number";
      return false;
    }
  },
  kiemTraKiTu: function (value, idErr) {
    errEl = document.getElementById(idErr);

    let parten = new RegExp("[A-Za-z]");
    if (parten.test(value)) {
      errEl.innerText = "";
      return true;
    } else {
      errEl.innerText = "Your input must be characters";
      return false;
    }
  },
  kiemTraDoDai: function (value, idErr) {
    errEl = document.getElementById(idErr);

    let length = value.trim().length;
    if (length < 5) {
      errEl.innerText = "Max length must be greater than 5";
      return false;
    }
    if (length > 15) {
      errEl.innerText = "Minimum length must be less than 15 ";
      return false;
    }
    errEl.innerText = "";
    return true;
  },

  kiemTraEmail: function (value, idErr) {
    let parten = new RegExp("/^S+@S+.S+$/");
    return parten.test(value);
  },
};
