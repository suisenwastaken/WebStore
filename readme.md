<!-- Improved compatibility of вернуться наверх link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/suisenwastaken/WebStore">
    <img src="images/logo.png" alt="logo" width="350">
  </a>

<h3 align="center">WebStore</h3>

  <p align="center">
    Онлайн магазин электроники
    <br />
    <a href="https://github.com/suisenwastaken/WebStore"><strong>Изучить»</strong></a>
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Содержание</summary>
  <ol>
    <li>
      <a href="#о-проекте">О проекте</a>
      <ul>
        <li><a href="#использованные-технологии">Использованные технологии</a></li>
      </ul>
    </li>
    <li>
      <a href="#начало-работы">Начало работы</a>
      <ul>
        <li><a href="#предустановка">Предустановка</a></li>
        <li><a href="#установка">Установка</a></li>
      </ul>
    </li>
    <li><a href="#использование">Использование</a></li>
    <li><a href="#контакты">Контакты</a></li>
    <li><a href="#замечания">Замечания</a></li>

  </ol>
</details>

<a name="about-the-project"></a>

<!-- ABOUT THE PROJECT -->

## О проекте

<div align="center">
  <img src="images/1.gif" alt="gif" width="auto" height="auto">
</div>

Захотели обновить какую либо электронику у себя дома? **Вы пришли по адресу**

Удобный и интуитивно понятный сайт для поиска и приобретения различной электроники<br>
Даже самый искушенный покупатель найдет себе товар по душе

_Не обращайте внимания на сами товары, большая их часть сгенерирована_

<p align="right">(<a href="#readme-top">вернуться наверх</a>)</p>

### Использованные технологии

- [![vite][vite]][vite-url]
- [![React][React.js]][React-url]
- [![Axios][Axios]][Axios-url]
- [![router][router]][router-url]
- [![sequelize][sequelize]][sequelize-url]
- [![expressJs][expressJs]][expressJs-url]
- [![postgres][postgres]][postgres-url]

<p align="right">(<a href="#readme-top">вернуться наверх</a>)</p>

<!-- GETTING STARTED -->

## Начало работы

Для начала, вам нужно выбрать вашу среду разработки, в которой вы будете запускать проект. Лично я рекомендую VS Code - Довольно легкий и обширно кастомизируемый инструмент.

### Предустановка

Для запуска кода вам понадобится установленный npm. Чтобы установить его на свой компьютер, напишите в консоли команду:

```sh
npm install npm@latest -g
```

### Установка

1. Клонируйте репозиторий с гитхаба
   ```sh
   git clone https://github.com/suisenwastaken/WebStore
   ```
2. Перейдите в папку клиента
   ```sh
   cd Client
   ```
3. Установите все зависимости для работы проекта
   ```sh
   npm install
   ```
4. Для запуска проекта напишите в консоли
   ```sh
   npm run dev
   ```
5. Выйдите из папки клиента
   ```sh
   cd ..
   ```
6. Перейдите в папку сервера
   ```sh
   cd Client
   ```
7. Установите все зависимости для работы проекта
   ```sh
   npm install
   ```
8. Для запуска проекта напишите в консоли
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">вернуться наверх</a>)</p>

<!-- USAGE EXAMPLES -->

## Использование

**Попадание на сайт**

Первым делом пользователь попадает на главную страницу магазина, где он увидит актуальные акции и поиск товаров по категориям

<div align="center">
  <img src="images/1.gif" alt="gif" width="auto" height="auto">
</div>
 
 _Так же на всех страницах реализован хедер, для удобной навигации по страницам магазина_

<br>

**Страница акции**

При нажатии на банер с акцией откроется соответствующая страница, где будут написаны все шаги для получения выгодного предложения

<div align="center">
  <img src="images/2.gif" alt="gif" width="auto" height="auto">
</div>


<br>

**Поиск товаров**

Как только пользователь захочет найти товар, он попадет на страницу поиска, где есть всевозможные фильтры для его удобства

<div align="center">
  <img src="images/3.gif" alt="gif" width="auto" height="auto">
</div>

_Товар может быть найден как с помощью навигации категорий в хедере, так и при помощи поисковой строки_

<br>

**Вход на сайт**

Если пользователь захочет добавить товар в корзину, то его попросят авторизоваться или зарегистрироваться

<div align="center">
  <img src="images/4.gif" alt="gif" width="auto" height="auto">
</div>

_Если пользователь не авторизован, то ему не будут доступны добавления товаров в корзину и избранное_

<br>

**Страница товара**

На странице товара пользователь может увидеть всю актуальную информацию о товаре. Если товар заинтересовал клиента, то он может добавить его в корзину и менять его количество

<div align="center">
  <img src="images/5.gif" alt="gif" width="auto" height="auto">
</div>
 
_Добавление в корзину и в избранное так же реализовано через появляющиеся кнопки на карточках товара при ховере_

<br>

**Корзина**

В корзине пользователь может увидеть все товары, которые он собирается приобрести. Так же можно изменять их количество, ну или удалить товар из корзины вовсе

<div align="center">
  <img src="images/6.gif" alt="gif" width="auto" height="auto">
</div>
 
_Как только пользователь выберет способ доставки с помощью модального окна, будет показано новое окно с информацией о заказе_

<br>

**Избранное**

Так же, пользователь может сохранять понравившиеся ему товары во вкладке избранное

<div align="center">
  <img src="images/7.gif" alt="gif" width="auto" height="auto">
</div>
 

<br>

**Личный кабинет**

На этой вкладке пользователь может увидеть всю информацию о своих заказах

<div align="center">
  <img src="images/8.gif" alt="gif" width="auto" height="auto">
</div>
 
_Пользователь так же может выйти из системы_

<br>


<p align="right">(<a href="#readme-top">вернуться наверх</a>)</p>

<a name="#contacts"></a>

<!--
<!-- CONTACT -->

## Контакты

Руслан - [@telegram](https://t.me/suisenwastaken) - suisenwastaken@gmail.com

Project Link: [https://github.com/suisenwastaken/WebStore](https://github.com/suisenwastaken/WebStore)

<p align="right">(<a href="#readme-top">вернуться наверх</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Замечания

- Для работы данного проекта вам нужно иметь бд "webstore" в Postgres

<p align="right">(<a href="#readme-top">вернуться наверх</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Axios]: https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white
[Axios-url]: https://axios-http.com/docs/intro
[npm]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[npm-url]: https://docs.npmjs.com/
[router]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[router-url]: https://reactrouter.com/en/main
[vite]: https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E
[vite-url]: https://vitejs.dev/
[sequelize]: https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white
[sequelize-url]: https://sequelize.org/
[expressJs]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[expressJs-url]: https://expressjs.com/
[postgres]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[postgres-url]: https://www.postgresql.org/
