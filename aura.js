document.addEventListener('mousemove', (e) => {
    const aura = document.createElement('div');
    aura.classList.add('aura');
    aura.style.top = `${e.pageY}px`;
    aura.style.left = `${e.pageX}px`;
    document.body.appendChild(aura);

    setTimeout(() => {
        aura.remove();
    }, 1000); // Remove aura after 1 second
});
