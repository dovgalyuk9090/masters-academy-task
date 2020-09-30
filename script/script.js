
class Main {
    constructor() {
        this.$form = document.querySelector('.mainForm');
        this.$textArea = document.querySelector('.output-field');
        this.$form.addEventListener('submit', this.getValue.bind(this));
    }
    getValue(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const value = formData.get('value');
        if(value.trim()) {
            this.showResult(value);
            this.$form.reset();
        }
    }
    checkValue(value) {
        const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if(format.test(value)) {
            return 'red'
        } else if(value.length > 3) {
            return 'green'
        }
    }
    showResult(value) {
        const result = this.checkValue(value);
        if (result) {
            this.$textArea.style.color = result;
        } else {
            this.$textArea.style.color = '#000';
        }
        this.$textArea.innerText = value;
    }
}

document.addEventListener('DOMContentLoaded',()=> {
    this.main = new Main();
});

