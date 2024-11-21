const form = document.getElementById("sellForm");

function validate() {
    fail = validateFullName();
    fail += validateEmail();

    if(fail==""){showInfo();}
    else{alert(fail); return false;}
}

function validateFullName(){
    var field1 = document.forms["sellForm"]["firstname"].value;
    var field2 = document.forms["sellForm"]["lastname"].value;
    if(field1 == "" || field2 == "") {return "No Name was entered.\n"}
    else if(/[0-9]/.test(field1) || /[0-9]/.test(field2)) {return "Your name should not contain any number.\n"}
    else {return "";}
}

function validateEmail() {
    var field = document.forms["sellForm"]["email"].value;
    if(field == "") {return "No Email was entered.\n"}
    else if (!((field.indexOf(".") > 0) && (field.indexOf("@") > 0)) || /[^a-zA-Z0-9.@_-]/.test(field)) {return "The Email address is invalid.\n";}
    else {return "";}
}

function previewImages(files) {

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
    
        if (!file.type.startsWith("image/")) {
          continue;
        }
    
        const img = document.createElement("img");
        img.classList.add("obj");
        img.file = file;
        img.style.maxWidth = "150px";
        img.style.maxHeight = "150px";
        document.getElementById("imagePreviewContainer").appendChild(img);
    
        const reader = new FileReader();
        reader.onload = (e) => {
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);

        img.onclick = function () {
            expandImg(img.src);
        }
      }
}

function expandImg(src) {
   const imageContainer = document.getElementById("expandImg");
    const expandImg = document.getElementById("expandImage");

    imageContainer.style.display = "block";
    expandImg.src = src;

    const closeButton = imageContainer.querySelector(".close");
    closeButton.onclick = function () {
        imageContainer.style.display = "none";
    };
}


// if (form) {
//     form.addEventListener("submit", (event) => {
//         event.preventDefault();

//         const formData = new Formdata(form);
//         const searchString
//     })
// }


