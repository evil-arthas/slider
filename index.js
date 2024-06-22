const links = document.getElementsByClassName("links__elem")
const roundedButtons = document.getElementsByClassName("slider-buttons__rounded-button")
const slideToLeftButton = document.querySelector(".slider-buttons__slide-to-left-button")
const slideToRightButton = document.querySelector(".slider-buttons__slide-to-right-button")

const image = document.getElementsByTagName("img")

const area = document.getElementsByClassName("area")
const city = document.getElementsByClassName("city")
const repairTime = document.getElementsByClassName("repair-time")
const repairCost = document.getElementsByClassName("repair-cost")

slideToRightButton.addEventListener("click", slideToRight)
slideToLeftButton.addEventListener("click", slideToLeft)

const imageArrayed = Array.from(image)
const linksArrayed = Array.from(links)
const roundedButtonsArrayed = Array.from(roundedButtons)

let previosCount = 0
let count = 1

for (let roundedButton of roundedButtons){
  roundedButton.addEventListener("click", goToSlideRoundedButton)
}

for (let link of links){
  link.addEventListener("click", goToSlideLink)
}

function slideToLeft(){
  previosCount = count
  count--
  count = checkCount(count)
  sliding()
  // console.log("настояший",count)
  // console.log("предыдущий",previosCount)
}

function slideToRight(){
  previosCount = count
  count++
  count = checkCount(count)
  sliding()
}

function goToSlideLink(e){
  previosCount = count
  count = linksArrayed.indexOf(e.target)+1
  sliding()
}

function goToSlideRoundedButton(e){
  previosCount = count
  count = roundedButtonsArrayed.indexOf(e.target)+1
  sliding()
}

function checkCount(count){
  if (count>3){
    return 1
  }
  if (count<1){
    return 3
  }
  else {
    return count
  }
}

function sliding(){
  if (previosCount!==count){
  area[count-1].style.display="block"
  city[count-1].style.display="block"
  repairTime[count-1].style.display="block"
  repairCost[count-1].style.display="block"
  imageArrayed[count-1].style.display = "inline-block"
  links[count-1].style.borderBottom = "1px solid #E3B873"
  
  
  }

  if(previosCount!==count&&previosCount!==0){
    city[previosCount-1].style.display= "none"
    area[previosCount-1].style.display= "none"
    repairTime[previosCount-1].style.display= "none"
    repairCost[previosCount-1].style.display= "none"
    image[previosCount-1].style.display= "none"
    links[previosCount-1].style.borderBottom = "none"
    console.log("slided")
  }
}

sliding()