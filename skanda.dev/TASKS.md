# TASKS — Portfolio Project

Файл для задач, ідей та наступних кроків по портфоліо-проєкту.

## Поточний статус

- [x] Angular SSR frontend запускається локально
- [x] NestJS backend/API підготовлений
- [x] Root-level scripts додані
- [x] `.gitignore` доданий
- [x] `.env.example` доданий
- [x] README перекладений українською
- [x] Основні UI-тексти перекладені українською
- [x] Додано QR code на Telegram

## Найближчі задачі

- [ ] Перевірити UI після додавання QR-коду
- [ ] Перевірити форму заявки локально
- [ ] Доробити Telegram service у backend
- [ ] Підключити реальний `TELEGRAM_BOT_TOKEN`
- [ ] Отримати й додати `TELEGRAM_CHAT_ID`
- [ ] Перевірити відправку заявки в Telegram
- [ ] Додати `.env` локально на основі `.env.example`
- [ ] Перевірити production build

## Frontend ideas

- [ ] Покращити Hero section
- [ ] Додати screenshots / preview у README
- [ ] Додати Open Graph metadata
- [ ] Додати sitemap.xml
- [ ] Додати robots.txt
- [ ] Додати блок кейсів / pet-проєктів
- [ ] Додати downloadable CV
- [ ] Додати англійську версію сайту
- [ ] Додати UA / EN перемикач

## Backend ideas

- [ ] Додати Telegram notification service
- [ ] Додати DTO для lead form
- [ ] Додати форматоване повідомлення для Telegram
- [ ] Додати basic anti-spam protection
- [ ] Додати rate limit для contact endpoint
- [ ] Додати health endpoint

## Deployment

- [ ] Обрати hosting для frontend
- [ ] Обрати hosting для backend
- [ ] Налаштувати environment variables
- [ ] Налаштувати CORS для production domain
- [ ] Перевірити Telegram bot у production

## Notes

QR code зараз веде напряму на Telegram-профіль:

```txt
https://t.me/copcoopallie
```

Пізніше можна перенаправити QR на Telegram bot, якщо буде потрібен повноцінний bot flow.
