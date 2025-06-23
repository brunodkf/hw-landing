import { counter } from "./count";

export function timingLayout() {
    const midia = document.querySelector('#vsl');
    const references = document.querySelector('[data-target-reference]');
    const layout = document.querySelector('[data-target-layout]');

    let countStart = false;

    midia.addEventListener('timeupdate', () => {
        if (midia.currentTime >= 1214 && !countStart) {
            references.style.display = 'none';
            layout.style.display = 'block';

            countStart = true;
            counter();
        }
    });
}
