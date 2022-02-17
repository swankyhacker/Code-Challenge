document.addEventListener("DOMContentLoaded", () => {
  const addressDiv = document.getElementById("address-group");
  const amountDiv = document.getElementById("amount-group");
  const otpDiv = document.getElementById("otp-group");
  const submitBtn = document.getElementById("submit");

  submitBtn.addEventListener("click", () => {
    handleSubmit();
  });

  function verifyAddress(address) {
    if (address.length < 14 || address.length > 74) {
      addressDiv.innerHTML += `<p id='warning'>An address should be between 13 and 75 letters</p>`;
    }
    const sets = address.match(/[a-zA-Z0-9]+/g);
    if (
      sets === null ||
      sets.length !== 1 ||
      sets[0].length !== address.length
    ) {
      addressDiv.innerHTML += `<p id='warning'>An address cannot contain special characters</p>`;
    }
  }

  function verifyAmount(amount) {
    if (amount === "") {
      amountDiv.innerHTML += `<p id='warning'>Enter an amount</p>`;
    }
    if (amount < 0) {
      amountDiv.innerHTML += `<p id='warning'>The amount cannot be negative</p>`;
    }
  }

  function verifyOtp(otp) {
    if (otp === "") {
      otpDiv.innerHTML += `<p id='warning'>Enter an OTP </p>`;
    }
  }

  function removeAllWarnings() {
    while (document.getElementById("warning") !== null) {
      const warning = document.getElementById("warning");
      warning.remove();
    }
  }

  function handleSubmit() {
    const addressInput = document.getElementById("address");
    const amountInput = document.getElementById("ethAmount");
    const otpInput = document.getElementById("otp");
    removeAllWarnings();
    verifyAddress(addressInput.value.trim());
    verifyAmount(amountInput.value);
    verifyOtp(otpInput.value);
    const warning = document.getElementById("warning");
    if (warning === null) {
      alert("Transaction Completed");
      addressInput.value = "";
      amountInput.value = "";
      otpInput.value = "";
    }
  }
});
