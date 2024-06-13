# Tестовое задание Modsen Shop


## Содержание


- [Техническое задание](#Техническое-задание)
- [API](#API)
- [Используемые технологии](#Используемые-технологии)
- [Необходимый функционал](#Необходимый-функционал)
- [Дополнительный функционал](#Дополнительный-функционал)
- [Описание экранов](#Описание-экранов)
- [Тестирование](#Тестирование)
- [Полезные ссылки](#Полезные-ссылки)


## Техническое задание


Необходимо реализовать React приложение "Modsen Shop" по предоставленному дизайну из Figma.


## API 

Список API для использования(если представленные API не удовлетворяют каким-либо условиям задания, можно использовать любые
другие открытые API для поиска информации о вещах для online магазина):
- ***[API SHOP](https://fakestoreapi.com/product)*** - данные для online магазина.


## Используемые технологии


- **_yarn_** - менеджер пакетов.
- **_TS_** - инструмент строгой типизации
- **_react-router-dom_** - инструмент управления состоянием.
- ***babel*** - транспайлер, преобразующий код из одного стандарта в другой.
- ***eslint*** - линтер для JavaScript кода.
- ***prettier*** - инструмент для автоформатирования кода.
- ***redux toolkit*** - библиотека управления состоянием приложения.
- **_email-js_** - библиотека позволяющая отправлять электронные письма на почту
- ***styled-components*** - система стилизации react компонентов.
- ***webpack*** -  сборщик модулей, который позволяет скомпилировать JavaScript-модули в единый JS-файл.
- ***cypress*** — e2e тестирование для web-приложений
- ***jest*** — unit-тестирование
- **_yup_** - библиотека для валидации форм
- **_react-hook-form_** - библиотека для обработки элементов ввода формы
- **_formik_** - библиотека для обработки элементов ввода формы.


## Необходимый функционал:

Приложение должно предоставлять возможность:

- смены темы приложения
- поиска товаров по категориям
- сортировки товаров
- поиска товаров по диапазону цены
- реализацию корзины товаров
- реализацию отправки сообщений 


## Дополнительный функционал

- Собрать проект с нуля(с настройками всех конфигов: webpack, eslint, prettier, husky и тд.)
- Использование любых библиотек для стилей, валидации и так далее - запрещены, кроме тех, которые рекомендуемы в пункте “Используемые технологии”.
- Настроить Webpack необходимо самостоятельно.
- Использовать Redux Toolkit Query для реализации асинхронных запросов.
- Использовать Typescript для типизации данных.


### Пример графического представления:


Ссылка на макет: [Макет "Modsen Shop"](<https://www.figma.com/file/48iSoUVdUxlK5ee7dm6mz9/Modsen-shop?node-id=0-1&t=YeTKQMbkzvYxgSmu-0>).


### Также проект предполагает:


- Организацию файловой структуры описанной в [structure](https://github.com/mkrivel/structure).
- Обработку ошибок через паттерн _"Error Boundaries"_.
- Использование TypeScript для типизирования и уменьшения количества потенциальных багов.
- Использование алиасов для импортирования файлов.
- Реализацию без использования дополнительных UI библиотек.
- Оптимизацию дизайна под мобильные устройства.
- Покрытие тестами всего приложения (cypress, jest).
- Обязательно необходимо сделать deploy приложения.
- Обязательную анимацию при наведения, нажатии на кнопки, прокрутки карусели и слайдеров, появлении элементов на странице при рендере и скролле.
- Соблюдение принципов DRY, KISS, YAGNI.
- Выполнение всех требований технического задания.
- Для реализации форм можно использовать одну библиотеку из предложенных.


## Описание экранов

Все страницы включают в себя верхний блок, который предполагает реализацию перехода между страницами и смену темы приложения. Также при нажатии на "Shop", пользователь попадает на страницу "Shop". При нажатии на корзину, должна открываться страница Card. Иконка корзины должна быть активной, если в ней находятся какие-либо товары.
В подвале страницы при нажатии на "Contact" пользователь попадает на страницу Contact. Все остальные ссылки должны быть валидные.
Также должна быть реализация отправки сообщения на введенную почту в поле "Give an email, get the newsletter".

1. [Главная Home](<https://www.figma.com/file/48iSoUVdUxlK5ee7dm6mz9/Modsen-shop?node-id=1-7082&t=YeTKQMbkzvYxgSmu-0>).
Вверху страницы отображается слайдер, в котором последовательно отображаются 5 товаров.
На главной странице должен отображаться список из 6 карточек и при нажатии на кнопку "View All" должен быть переход на страницу Shop.
2. [Главная Shop](<https://www.figma.com/file/48iSoUVdUxlK5ee7dm6mz9/Modsen-shop?node-id=1-6414&t=YeTKQMbkzvYxgSmu-0>).
На этой странице нужно реализовать поиск товаров. Sort by предполагает реализацию сортировки по убыванию и возрастаю, также сортировка может быть не указана, тогда поиск осуществляется без учета сортировки. Shop by предполагает выбор только определенной категории из выпадающего списка, также категория может быть не указана, тогда в этом случае поиск производится по всем категориям. Также есть возможность выбора диапазона 
цены, в зависимости от указания параметров, данные должны отображаться корректно. Если ничего не найдено, то должен отображаться альтернативный текст.
При нажатии на карточку, пользователь переходит на страницу Product.
3. [Главная Product](<https://www.figma.com/file/48iSoUVdUxlK5ee7dm6mz9/Modsen-shop?node-id=1-5173&t=YeTKQMbkzvYxgSmu-0>).
На данной странице  находится описание выбранного товара, цена, категория, его фото, рейтинг, возможность выбора количества товара и при нажатии на кнопку "ADD TO CART" данные сохраняются и уже отображаются на странице Card.
В блоке "Similar Items" отображаются товары из той же категории, что и текущий товар на странице.
4. [Главная Card](<https://www.figma.com/file/48iSoUVdUxlK5ee7dm6mz9/Modsen-shop?node-id=1-5899&t=YeTKQMbkzvYxgSmu-0>).
На данной странице отображаются все товары, которые выбрал пользователь, общая сумма всех выбранных товаров. Пользователь может удалить товары из корзины и изменить количество единиц определенного товара. При нажатии на кнопку "Shop now" должно высвечиваться модальное окно с общей суммой и выбранными товарами и в случае подтверждения покупки, корзина должна очиститься и отображать следующий текст: "Спасибо за покупку!".
5. [Главная Contact Us](<https://www.figma.com/file/48iSoUVdUxlK5ee7dm6mz9/Modsen-shop?node-id=1-5504&t=YeTKQMbkzvYxgSmu-0>).
На данной странице пользователь должен ввести свое имя и фамилию, почту(на которую будет отправлено письмо), тему письма и основной текст и при нажатии на кнопку "Send"
на введенную почту должно отправляться письмо с введенными данными. У всех полей должна быть валидация введенных данных. 
6. [Главная Page 404](<https://www.figma.com/file/48iSoUVdUxlK5ee7dm6mz9/Modsen-shop?node-id=1-6404&t=YeTKQMbkzvYxgSmu-0>).
Данная страница должна отображаться, если пользователь ввел некорректный путь в адресной строке.


## Тестирование


Реализовать e2e тестирование c полным покрытием функционала приложения:

- Модуль навигации
- Модуль поиска товаров
- Модуль корзины
- Модуль страницы контактов


## Полезные ссылки


[React](https://reactjs.org/docs/getting-started.html)

[React hooks](https://reactjs.org/docs/hooks-intro.html)

[React router dom](https://reacttraining.com/react-router/web/guides/quick-start)

[Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
​
[Eslint](https://eslint.org/docs/user-guide/configuring)
​
[Prettier](https://prettier.io/docs/en/install.html)
​
[Babel](https://babeljs.io/docs/en/configuration)

[Webpack](https://webpack.js.org/guides/getting-started/)

[Styled-components](https://www.styled-components.com/docs)

[React redux](https://react-redux.js.org/introduction/quick-start)

[Тестирование Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

[Email-js](https://www.emailjs.com/docs/examples/reactjs/)

[Yup](https://www.npmjs.com/package/yup)

[Heroku](https://devcenter.heroku.com/articles/heroku-cli)

[Husky](https://typicode.github.io/husky/#/)



