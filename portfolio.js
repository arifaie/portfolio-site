function typeEffect(elementId, text, speed, callback) {
    var element = document.getElementById(elementId);
    var i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

window.onload = function() {
    typeEffect('heroTitle', "Alaa Alrifaie", 100, function() {
        typeEffect('heroSubtitle', "Web Developer | Digital Agency Owner | Photographer", 50);
    });
    document.getElementById('currentYear').innerHTML = new Date().getFullYear();
};

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 80) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

document.querySelectorAll('#navbar a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href');
        var targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section, header');
    var navLinks = document.querySelectorAll('#navbar a');
    sections.forEach(function(section) {
        var sectionTop = section.offsetTop - 100;
        var sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            var matchingLink = document.querySelector('#navbar a[href="#' + section.getAttribute('id') + '"]');
            if (matchingLink) {
                matchingLink.classList.add('active');
            }
        }
    });
});

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    if (name === '') {
        alert('Please enter your name.');
        return false;
    }
    if (email === '') {
        alert('Please enter your email address.');
        return false;
    }
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert('Please enter a valid email address.');
        return false;
    }
    if (message === '') {
        alert('Please enter a message.');
        return false;
    }
    document.getElementById('formConfirmation').style.display = 'block';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    return false;
}

var projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(function(card) {
    card.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-8px)';
        this.style.transition = 'transform 0.3s ease';
        this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
    });
    card.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });
});
