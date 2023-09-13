//-----
const btnSuccess = document.querySelector(".btnSuccess")
const btnError = document.querySelector(".btnError")
const btnInvalid = document.querySelector(".btnInvalid")
const toastBox = document.querySelector("#toastBox")
const successMsg = `<i class="fa-solid fa-circle-check"></i>Successsfully Submitted`
const errorMsg = `<i class="fa-solid fa-circle-xmark"></i> Please fix the Error!`
const InvalidsMsg = `<i class="fa-solid fa-triangle-exclamation"></i>Invalid input, Check it again`
//-----
const showToast = (msg) => {
    return () => {
        let toast = document.createElement("div")
        let progressBar = document.createElement("div")
        toast.classList.add("toast");
        progressBar.classList.add("progressBar")
        toast.innerHTML = msg;
        toast.appendChild(progressBar)
        toastBox.appendChild(toast);
        //---
        setTimeout(() => {
            toastBox.removeChild(toast);
        }, 3000);
        //---
        let msgColor = toast.firstChild
        if (msg == successMsg) {
            msgColor.style.color = "green"
            progressBar.style.background = "green"
        }
        if (msg == errorMsg) {
            msgColor.style.color = "red"
            progressBar.style.background = "red"
        }
        if (msg == InvalidsMsg) {
            msgColor.style.color = "#FFC300 "
            progressBar.style.background = "#FFC300 "
        }
    }
}
//----
btnSuccess.addEventListener("click", showToast(successMsg))
btnError.addEventListener("click", showToast(errorMsg))
btnInvalid.addEventListener("click", showToast(InvalidsMsg))





