# Full-Stack Portfolio — Angular SSR + NestJS

Професійне портфоліо Олександра Васильєва — Full-Stack / Frontend-leaning розробника з фокусом на Angular, TypeScript, Node.js, NestJS, SSR, архітектуру, продуктивність та якість коду.

Проєкт створений як повноцінний full-stack portfolio website для презентації досвіду, залучення клієнтів, комунікації з роботодавцями та демонстрації практичного підходу до розробки.

---

## Мета проєкту

Цей проєкт має показати не лише резюме, а реальний технічний рівень через робочий full-stack продукт.

Основні цілі:

- презентувати досвід у Frontend / Full-Stack розробці;
- показати роботу з Angular SSR та NestJS;
- створити швидкий, SEO-friendly та адаптивний сайт;
- реалізувати lead form для заявок;
- інтегрувати Telegram для отримання повідомлень;
- підготувати основу для подальшого розвитку портфоліо.

---

## Технології

### Frontend

- Angular
- Angular SSR
- TypeScript
- SCSS
- Responsive UI
- SEO-friendly структура

### Backend

- NestJS
- Node.js
- TypeScript
- REST API
- Telegram Bot API
- Lead intake flow

### Tooling

- npm scripts
- Git / GitHub
- root-level dev commands
- local development helpers

---

## Структура проєкту

```txt
portfolio/
  package.json
  scripts/
  portfolio-web/
  portfolio-api/
  README.md
  TASKS.md
  .env.example
  .gitignore
```

| Шлях | Опис |
|---|---|
| `portfolio-web` | Angular SSR frontend |
| `portfolio-api` | NestJS backend/API |
| `scripts` | Скрипти для запуску, логів, build та очищення |
| `TASKS.md` | Список задач, ідей та roadmap |
| `.env.example` | Приклад environment variables |

---

## Команди

### Встановити залежності

```bash
npm run install:all
```

### Запустити весь проєкт

```bash
npm run app
```

### Запустити після очищення dev-файлів

```bash
npm run app:fresh
```

### Очистити dev-файли

```bash
npm run app:clear
```

### Запустити frontend і backend у dev-режимі

```bash
npm run dev:all
```

### Зупинити dev-процеси

```bash
npm run dev:stop
```

### Перевірити статус процесів

```bash
npm run dev:status
```

### Переглянути логи

```bash
npm run dev:logs
```

### Production build

```bash
npm run build
```

---

## Environment variables

Для локального запуску backend потрібно створити `.env` на основі `.env.example`.

```bash
cp .env.example portfolio-api/.env
```

Приклад:

```env
PORT=3333
WEB_ORIGIN=http://localhost:4200

TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```

| Змінна | Опис |
|---|---|
| `PORT` | Порт backend/API |
| `WEB_ORIGIN` | Дозволений frontend origin для CORS |
| `TELEGRAM_BOT_TOKEN` | Token Telegram бота |
| `TELEGRAM_CHAT_ID` | Chat ID, куди надсилати заявки |

> `.env` не має потрапляти в GitHub. У репозиторії зберігається лише `.env.example`.

---

## Telegram lead flow

У проєкті планується інтеграція Telegram для збору заявок із сайту.

Очікуваний flow:

```txt
Користувач
  ↓
Angular форма
  ↓
NestJS API
  ↓
Telegram Bot API
  ↓
Telegram Олександра
```

Що має надсилатися в Telegram:

- імʼя;
- контакт;
- тип запиту;
- бюджет;
- терміни;
- повідомлення;
- дата та час;
- джерело заявки.

---

## QR code

У першій версії QR code веде напряму на Telegram-профіль:

```txt
https://t.me/copcoopallie
```

Файл QR-коду лежить тут:

```txt
portfolio-web/public/assets/images/telegram-contact-qr.png
```

У браузері він доступний за шляхом:

```txt
/assets/images/telegram-contact-qr.png
```

---

## Roadmap

### GitHub / Repository

- [x] Підготувати структуру проєкту
- [x] Додати `.gitignore`
- [x] Додати `.env.example`
- [x] Додати `TASKS.md`
- [x] Зробити перший push у GitHub
- [x] Перекласти README українською
- [ ] Додати screenshots / preview

### Frontend

- [x] Запустити Angular SSR локально
- [x] Вирішити проблему з Angular / Vite
- [x] Вирішити проблему `NG0908`
- [x] Перекласти основні UI-тексти українською
- [x] Додати QR code на Telegram
- [ ] Покращити Hero section
- [ ] Додати lead form validation states
- [ ] Покращити адаптивність
- [ ] Перевірити SEO

### Backend

- [x] Підготувати NestJS API
- [ ] Додати Telegram service
- [ ] Додати validation/error handling для lead form
- [ ] Додати production CORS config
- [ ] Перевірити Telegram integration у production

### Deployment

- [ ] Обрати платформу для frontend
- [ ] Обрати платформу для backend
- [ ] Налаштувати production environment
- [ ] Задеплоїти frontend
- [ ] Задеплоїти backend

---

## Автор

**Олександр Васильєв**  
Full-Stack / Frontend-leaning Developer

- Angular
- TypeScript
- Node.js
- NestJS
- SSR
- SCSS
- Architecture
- Performance optimization
- Code review / mentoring

GitHub: [M00rlock](https://github.com/M00rlock)  
Telegram: [@copcoopallie](https://t.me/copcoopallie)
