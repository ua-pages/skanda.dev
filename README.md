# Портфоліо — WebComponents + Node.js

Професійне портфоліо Олександра Васильєва — старшого універсального програміста з ухилом на клієнтську частину.

Сайт-візитка з формою заявок, що надсилає структуровані повідомлення в Telegram через API.

---

## Технології

### Frontend

- WebComponents (Custom Elements v1, Shadow DOM)
- Vanilla JS (ES modules)
- CSS Custom Properties
- Responsive UI

### Backend

- Node.js (без фреймворків, чистий HTTP)
- REST API
- Telegram Bot API
- Lead intake flow

### Залежності

**0 (нуль)** в обох пакетах. Жодних фреймворків, бандлерів чи компіляторів.

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
| `portfolio-web` | WebComponents frontend |
| `portfolio-api` | Node.js backend/API |
| `scripts` | Скрипти для запуску, логів та очищення |
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

Форма на сайті надсилає заявку на API, яке переправляє її в Telegram.

```txt
Користувач
  ↓
Форма
  ↓
Node.js API
  ↓
Telegram Bot API
  ↓
Telegram
```

Що надсилається в Telegram:

- імʼя;
- контакт;
- послуга;
- бюджет;
- терміни;
- повідомлення.

---

## Автор

**Олександр Васильєв**  
Старший універсальний програміст з ухилом на клієнтську частину

GitHub: [M00rlock](https://github.com/M00rlock)  
Telegram: [@copcoopallie](https://t.me/copcoopallie)
