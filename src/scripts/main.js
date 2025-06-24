AOS.init();

const buttons = document.querySelectorAll('.btn');
const sections = document.querySelectorAll('.main__container');

buttons.forEach(botao => {
    botao.addEventListener('click', () => {
        const targetId = botao.getAttribute('data-target');

        sections.forEach(section => {
            section.classList.toggle('active', section.id === targetId);
        })
    })
})

