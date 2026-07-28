(function () {
  var form = document.getElementById("contact-form");
  if (!form) return;

  var statusEl = document.getElementById("contact-status");
  var submitBtn = document.getElementById("contact-submit");
  var PLACEHOLDER_KEY = "YOUR_ACCESS_KEY_HERE";

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!statusEl || !submitBtn) return;

    var accessKey = form.querySelector('[name="access_key"]');
    if (!accessKey || !accessKey.value || accessKey.value === PLACEHOLDER_KEY) {
      setStatus(
        "Form is not connected yet. Add a Web3Forms access key in contact/index.html (replace YOUR_ACCESS_KEY_HERE).",
        "error"
      );
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var payload = {
      access_key: accessKey.value,
      subject: form.querySelector('[name="subject"]').value,
      from_name: form.querySelector('[name="from_name"]').value,
      name: form.querySelector("#contact-name").value.trim(),
      email: form.querySelector("#contact-email").value.trim(),
      message: form.querySelector("#contact-message").value.trim(),
      botcheck: false,
    };

    var topic = form.querySelector("#contact-topic").value.trim();
    if (topic) {
      payload.topic = topic;
      payload.subject = topic + " — Horncalls website inquiry";
    }

    submitBtn.disabled = true;
    setStatus("Sending…", "pending");

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(function (response) {
        return response.json().then(function (data) {
          return { ok: response.ok, data: data };
        });
      })
      .then(function (result) {
        if (result.ok) {
          form.reset();
          setStatus("Thank you, your message has been sent.", "success");
        } else {
          setStatus(
            (result.data && result.data.message) || "Something went wrong. Please try again.",
            "error"
          );
        }
      })
      .catch(function () {
        setStatus("Could not send right now. Please try again shortly.", "error");
      })
      .finally(function () {
        submitBtn.disabled = false;
      });
  });

  function setStatus(message, state) {
    statusEl.textContent = message;
    statusEl.className = "contact-status" + (state ? " is-" + state : "");
  }
})();
