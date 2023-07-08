function showImagePopup(image) {
  var imagePopup = document.createElement("div");
  imagePopup.classList.add("image-popup");

  var popupImage = document.createElement("img");
  popupImage.src = image.src;
  popupImage.alt = image.alt;

  var popupDescription = document.createElement("div");
  popupDescription.classList.add("description");

  var descriptionText = image.getAttribute("data-description");
  var htmlStructure = createHTMLStructure(descriptionText);
  popupDescription.innerHTML = htmlStructure;

  imagePopup.appendChild(popupImage);
  imagePopup.appendChild(popupDescription);

  document.body.appendChild(imagePopup);

  imagePopup.addEventListener("click", function() {
    document.body.removeChild(imagePopup);
  });
}

function createHTMLStructure(descriptionText) {
  var htmlStructure = descriptionText.replace(/\*\*\*/g, "");
  return htmlStructure;
}

function showText(element) {
  var dataText = element.getAttribute("data-text");
  console.log(dataText);
}



