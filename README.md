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


## Структура проекта (важные файлы)
```
state-manager/
├── packages/
│   ├── state-manager/           # Библиотека стейт-менеджера
│   │   ├── src/               
│   │   │   └── index.ts         # Реализация хранилища
│   │   ├── package.json         # Конфигурация пакета
│   │   ├── tsconfig.json        # Настройки TypeScript
│   │   ...
│   │   └── webpack.config.js    # Настройки Webpack
│   └── example/                 # Пример приложения
│       ├── src/
│       │   ├── components/      # Компоненты
│       │   │   ├── App/
│       │   │       ├── App.tsx  # Использование хранилища
│       │   │        ...
│       │   └── store.ts        # Инициализация хранилища списка дел
│       ...
│       ├── package.json
│       └── vite.config.ts      # Конфиг сборки
├── package.json                # Конфигурация монорепозитория
└── .gitignore
```
