const backToTopBtn = document.getElementById('btn');

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) {
        //показывает кнопку
        if (!backToTopBtn.classList.contains('btnEntra')) {
            backToTopBtn.classList.add('btnEntra');
            backToTopBtn.classList.remove('btnExit');
            backToTopBtn.style.display = 'block';
        }
    } else {
        // скрывает кнопку
        if (backToTopBtn.classList.contains('btnEntra')) {
            backToTopBtn.classList.add('btnExit');
            backToTopBtn.classList.remove('btnEntra');

            setTimeout(function () {
                backToTopBtn.style.display = 'none';
            }, 150);
        }
    }
}

backToTopBtn.addEventListener('click', smoothScroll);

//для плавности
function smoothScroll() {
    const targetPosition = 0;
    const startPosition =window.pageYOffset;
    const distanse = targetPosition - startPosition;
    const duration = 750;
    let start = null;

    window.requestAnimationFrame(step);

    function step(time) {
        if (!start) start = time;

        const progress = time - start;
        window.scrollTo(
            0,
            easeInOutCubic(progress, startPosition, distanse, duration),
        );

        if (progress < duration) window.requestAnimationFrame(step);
    }
}
 
function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
}