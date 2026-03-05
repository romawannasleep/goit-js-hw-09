let formData= {
    email: "",
    message: "",
};
const form = document.querySelector(".feedback-form");
form.addEventListener ("input", (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    formData[fieldName] = fieldValue;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});
const savedData = localStorage.getItem("feedback-form-state");
if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData = parsedData;
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;


};
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formData.email === "" || formData.message === ""){
        return alert("Fill please all fields");
    }
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData = { email: "", message: "" };
    form.reset();
})