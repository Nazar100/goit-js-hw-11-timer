class CountdownTimer {
    constructor({ selector, targetDate } = {}) {
        this.selector = selector;
        this.targetDate = targetDate;
    }

    refs = {
        days: document.querySelector('span[data-value=days]'),
        hours: document.querySelector('span[data-value=hours]'),
        mins: document.querySelector('span[data-value=mins]'),
        secs: document.querySelector('span[data-value=secs]'),
    };

    start() {
        const targetValue = this.targetDate;
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - targetValue;
            this.updateClock(deltaTime);
        }, 1000);
    }

    updateClock(deltaTime) {
        const days = this.pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
        const hours = this.pad(
            Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        );
        const mins = this.pad(
            Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)),
        );
        const secs = this.pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
        this.showOnScreen(days, hours, mins, secs);
    }

    showOnScreen(days, hours, mins, secs) {
        this.refs.days.textContent = -days - 1;
        this.refs.hours.textContent = -hours;
        this.refs.mins.textContent = -mins;
        this.refs.secs.textContent = -secs;
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }
}
const bd = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Feb 17, 2021'),
});

bd.start();
