# 🚀 ДЕПЛОЙ НА GITHUB PAGES (Бесплатно)

## Шаг 1: Включение GitHub Pages

### 1.1 Перейдите в настройки репозитория
1. Откройте https://github.com/foxampy/platonintel2
2. Нажмите вкладку **Settings** (справа вверху)

### 1.2 Настройте Pages
1. В левом меню выберите **Pages** (в разделе Code and automation)
2. В разделе **Build and deployment** выберите:
   - **Source:** Deploy from a branch
   - **Branch:** main
   - **Folder:** / (root)
3. Нажмите **Save**

```
Settings → Pages → Source: Deploy from a branch → Branch: main → Save
```

### 1.3 Дождитесь деплоя
- GitHub начнёт сборку (займёт 1-3 минуты)
- Перезагрузите страницу настроек через минуту
- Появится зелёный бейдж с URL вашего сайта

---

## Шаг 2: Проверка URL

После успешного деплоя сайт будет доступен по адресу:
```
https://foxampy.github.io/platonintel2/
```

Или если настроен кастомный домен:
```
https://ваш-домен.by
```

---

## Шаг 3: Исправление путей (ВАЖНО!)

GitHub Pages работает из подпапки `/platonintel2/`, поэтому нужно исправить абсолютные пути.

### 3.1 Добавьте base тег в <head> всех HTML файлов:

Откройте `index.html` и добавьте после `<head>`:
```html
<base href="/platonintel2/">
```

Или используйте относительные пути.

### 3.2 Альтернатива - относительные пути:

Замените во всех HTML файлах:
```html
<!-- Было (абсолютный путь): -->
<link rel="stylesheet" href="/css/main.css">
<script src="/js/main.js"></script>
<img src="/assets/images/products/tkg-200.jpg">

<!-- Стало (относительный путь): -->
<link rel="stylesheet" href="./css/main.css">
<script src="./js/main.js"></script>
<img src="./assets/images/products/tkg-200.jpg">
```

---

## Быстрый фикс путей (автоматически)

Запустите эту команду PowerShell в папке v2:

```powershell
# Заменить абсолютные пути на относительные
Get-ChildItem -Filter *.html -Recurse | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $content = $content -replace 'href="/([^"])', 'href="./$1'
    $content = $content -replace 'src="/([^"])', 'src="./$1'
    Set-Content $_.FullName $content -NoNewline
}
```

---

## Альтернатива: Netlify (Проще!)

Если GitHub Pages кажется сложным, используйте **Netlify**:

### Вариант 1: Через Drag & Drop (Самый простой)
1. Зайдите на https://app.netlify.com/drop
2. Перетащите папку `v2` прямо в браузер
3. Получите живой URL через 10 секунд!

### Вариант 2: Через GitHub
1. Зайдите на https://app.netlify.com
2. Нажмите **Add new site** → **Import an existing project**
3. Выберите **GitHub** → авторизуйтесь → выберите репозиторий `platonintel2`
4. Нажмите **Deploy site**
5. Через 2 минуты сайт будет доступен по типа `https://plato-intel-abc123.netlify.app`

---

## Альтернатива: Vercel

1. Зайдите на https://vercel.com
2. Нажмите **Add New...** → **Project**
3. Импортируйте из GitHub
4. Нажмите **Deploy**

---

## Проверка работоспособности

После деплоя проверьте:

- [ ] Главная страница открывается
- [ ] Стили загружаются (цвета, шрифты)
- [ ] Каталог работает
- [ ] Формы отображаются
- [ ] Чат открывается
- [ ] Изображения видны (если загружены)

---

## Настройка кастомного домена (опционально)

### Для GitHub Pages:
1. В репозитории: Settings → Pages → Custom domain
2. Введите: `plato-intel.by`
3. В настройках DNS вашего домена добавьте:
   ```
   CNAME: www → foxampy.github.io
   A: @ → 185.199.108.153
   A: @ → 185.199.109.153
   A: @ → 185.199.110.153
   A: @ → 185.199.111.153
   ```

### Для Netlify:
1. Site settings → Domain management → Add custom domain
2. Введите ваш домен
3. Подтвердите владение доменом

---

## Проблемы и решения

### Проблема: Стили не загружаются (404)
**Решение:** Используйте относительные пути `./` вместо абсолютных `/`

### Проблема: Изображения не отображаются
**Решение:** 
- Загрузите реальные изображения в `assets/images/`
- Или используйте placeholder сервисы:
  ```html
  <img src="https://via.placeholder.com/600x400/1a1f2e/e76f51?text=TKG-200">
  ```

### Проблема: GitHub Pages не обновляется
**Решение:**
- Подождите 5-10 минут после push
- Проверьте Actions tab в репозитории
- Сделайте пустой коммит: `git commit --allow-empty -m "trigger rebuild" && git push`

---

## Рекомендация для демонстрации

**Для быстрой демонстрации используйте Netlify Drop:**
1. Откройте https://app.netlify.com/drop
2. Перетащите папку `v2` в браузер
3. Получите URL через 10 секунд!

Это самый быстрый способ показать сайт заказчику.

---

**Статус:** 🟡 Ожидает настройки GitHub Pages
**ETA:** 5 минут после настройки
