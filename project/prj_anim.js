const sub = document.getElementById('submit');
const nums = document.getElementsByClassName('nums')
function ratin() {
    window.location.href = 'prj_str1.html'
    
}
for(var i=0;i<nums.length;i++){
    nums[i].addEventListener('click', function(event){
        const el=event.target
        localStorage.setItem('num',el.value)
        el.style.cssText='color:white; background-color:hsl(217, 12%, 63%)'
        
    })
}
sub.addEventListener('click', ratin)