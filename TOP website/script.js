function copyAccount() {
        const text = document.getElementById("accountNumber").innerText;
        navigator.clipboard.writeText(text).then(() => {
            alert("Account number copied!");
        })
        .catch(() => {
            alert("Failed to copy");
        });
    }