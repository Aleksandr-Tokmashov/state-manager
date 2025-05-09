# state-manager
## Инструкция по запуску
Склонируйте репозиторий к себе на компьютер командой:
```bash
git clone git@github.com:Aleksandr-Tokmashov/state-manager.git
cd state-manager
```

Установите зависимости:
```bash
npm i
```
Запустите приложение на локальном сервере:
```bash
npm run start
```

Перейдите по адресу http://localhost:5173/ чтобы посмотреть приложение в браузере.


## Структура проекта
```
state-manage/
├── packages/
│   ├── state-manager/  # Библиотека стейт-менеджера
│   └── example/        # Пример приложения с использованием библиотеки
├── package.json        # Конфигурация монорепозитория 
└── .gitignore
```
