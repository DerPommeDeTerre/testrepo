
function addRecommendation(){
    
    let recommendation = document.getElementById("new-recommendation")

    if (recommendation.value != null && recommendation.value.trim() != ""){

        console.log("New recommendation added");

        var element = document.createElement("div");
        element.setAttribute("class","recommendation-card");
        element.innerHTML = "<p><span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span></p>";
        document.getElementById("recommendations-container").appendChild(element);

        recommendation.value = ""; /*Cleans the Text Area*/
        showPopup(true);
    }
}

function showPopup(bool) {
    if (bool) {
      document.getElementById('pop-up').style.visibility = 'visible'
    } else {
      document.getElementById('pop-up').style.visibility = 'hidden'
    }
  }