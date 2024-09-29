const profileImage = document.querySelector('.profile-img');


profileImage.addEventListener('mouseenter', function() {
    profileImage.style.transform = 'scale(1.1)';  
    profileImage.style.transition = 'transform 0.3s';  
});


profileImage.addEventListener('mouseleave', function() {
    profileImage.style.transform = 'scale(1)';  
});