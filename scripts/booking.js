/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded? for initial value yes
// When do they need to be reset or updated? yup we do
let f_day_cost = 35;
let h_day_cost = 20;
let cost_p_day = f_day_cost;

let day_count = 0;

let days = document.querySelectorAll(".day-selector li");

let clear_button = document.getElementById("clear-button");
let calculated_cost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the day_count if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

for (let day of days) {
    day.addEventListener("click", function() {
        if (!day.classList.contains("clicked")) {
            day.classList.add("clicked");
            day_count++;
            calculateCost();
        }
    });
}



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clear_button.addEventListener("click", function() {
    for (let day of days) {
        day.classList.remove("clicked");
    }
    day_count = 0;
    calculateCost();
});



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

let fullDayButton = document.getElementById("full");
let halfDayButton = document.getElementById("half");

halfDayButton.addEventListener("click", function() {
    cost_p_day = h_day_cost;
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    calculateCost();
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDayButton.addEventListener("click", function() {
    cost_p_day = f_day_cost;
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
    calculateCost();
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateCost() {
    calculated_cost.textContent = day_count * cost_p_day;
}

