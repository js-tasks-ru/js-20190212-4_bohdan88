(function () {

    class Tooltip {

        /**
         * Имя компонента
         * @property {string}
         */
        get name() {
            return 'tooltip';
        }

        /**
         * Обязательный отступ
         */
        get indent() {
            return 5;
        }

        constructor() {
            /**
             * Данное свойство содержит ссылку на
             * елемент содержащий подсказку
             * @type {HTMLDivElement}
             */
            this.el = document.createElement('div');
            this.el.style.position = 'absolute';

            this.el.classList.add(this.name);
            document.body.appendChild(this.el);
        }

        /**
         * Метод подключает включает работу подсказок
         * на элементе
         *
         * @param {Element} root - элемент, внутри которого, нужно включить работу подсказок
         */
        attach(root) {
            document.onmouseover = (e) => {
                let target = e.target
                let tooltip = target.getAttribute('data-tooltip')
                if (!tooltip) return;

                this.el.classList.add('tooltip_active');
                this.el.innerHTML = tooltip;

                let coord = target.getBoundingClientRect();
                const heightDoc = document.documentElement.clientHeight;

                let left = coord.left + (target.offsetWidth - this.el.offsetWidth) / 2;
                if (left < 0) left = 8;

                let top = coord.top + target.offsetHeight + this.indent;
                if (heightDoc - top < this.el.offsetHeight) {
                    top = coord.top - (this.el.offsetHeight + this.indent);
                }

                this.el.style.left = left + 'px';
                this.el.style.top = top + 'px';
            }
            document.onmouseout = () => {

                this.el.classList.remove('tooltip_active')


            }
        }
        /**
         * Удаляет все обработчики событий
         */
        detach() {
            document.onmouseover = e => {
                e.preventDefault();
            }
        }
    }

    window.Tooltip = Tooltip;
})();
