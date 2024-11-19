function autoPreviewImage(event) {
    var file = event.target.files[0];
    
    if (file && file.type.startsWith('image/')) {
        var reader = new FileReader();
        
        reader.onload = function() {
            var output = document.getElementById('preview');
            output.src = reader.result;
            output.style.display = 'block';
        }
        
        reader.readAsDataURL(file);
    } else {
        alert("Please select a valid image file.");
    }
}