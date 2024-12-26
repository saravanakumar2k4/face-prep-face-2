// Update salary range display
const salaryRangeInput = document.querySelector('input[type="range"]');
const salaryRangeValue = document.getElementById('salaryRangeValue');

salaryRangeInput.addEventListener('input', function () {
    salaryRangeValue.textContent = salaryRangeInput.value;
});
