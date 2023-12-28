const dailySpent = document.querySelectorAll(".daily-spent")
const titleElements = [
    document.querySelector(".title"),
    document.querySelector(".title2"),
    document.querySelector(".title3"),
    document.querySelector(".title4"),
    document.querySelector(".title5"),
    document.querySelector(".title6"),
    document.querySelector(".title7"),
]

let jsonDataArray = []

fetch("data.json")
    .then(response => response.json())
    .then(values => values.forEach((value, index) => {
        let jsonData = value.amount
        jsonDataArray.push(jsonData)

        let floored = Math.floor(jsonData)
   

        dailySpent[index].style.paddingTop = `${floored * 3}px`
        dailySpent[index].style.borderRadius = "5px"
        dailySpent[index].style.paddingBottom = "0"
        dailySpent[index].style.width = "50px"
        dailySpent[index].style.backgroundColor = "hsl(10, 79%, 65%)"
        dailySpent[2].style.backgroundColor = "hsl(186, 34%, 60%)"

       
        dailySpent[index].addEventListener("mouseover", () => {
            titleElements[index].classList.toggle("display")
        })

        dailySpent[index].addEventListener("mouseout", () => {
            titleElements[index].classList.toggle("display")
        })
    }))