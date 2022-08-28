const dropdownTips = document.getElementById('dropdownTips');
const lamp = document.getElementById('lamp');
const EyeLamp = document.getElementById('EyeLamp')

lamp.addEventListener('click', function(){
    dropdownTips.className = 'dropdownTips show';
})

EyeLamp.addEventListener('click', function(){
    dropdownTips.className = 'dropdownTips';
})

dropdownTips.addEventListener('click', function(){
    dropdownTips.className = 'dropdownTips';
})