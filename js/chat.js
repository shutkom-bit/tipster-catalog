// ══════════════════════════════════════════
// TIPSTER Catalog — chat.js
// AI Chat Widget
// ══════════════════════════════════════════
// ── AI Chat Widget ──

// Заглушки — будуть перевизначені нижче
window.chatToggle = window.chatToggle || function() {};
window.chatSend   = window.chatSend   || function() {};

  function buildSystemPrompt() {
    const usd = parseFloat(document.getElementById('usdRate')?.value) || 41.20;
    const eur = parseFloat(document.getElementById('eurRate')?.value) || 44.50;

    // Динамічний каталог з масиву products
    let catalogText = '';
    if (typeof products !== 'undefined' && products.length) {
      const byBrand = {};
      products.forEach(function(p) {
        const brand = p.brand || 'Інше';
        if (!byBrand[brand]) byBrand[brand] = [];
        const partnerUah = p.currency === 'USD' ? Math.round(p.partnerPrice * usd) : Math.round(p.partnerPrice);
        const retailUah  = p.currency === 'USD' ? Math.round(p.retailPrice  * usd) : Math.round(p.retailPrice);
        byBrand[brand].push(
          '  ' + p.code + ' | ' + p.name + ' | партнер ' + partnerUah + '₴ | РРЦ ' + retailUah + '₴' + (p.spec ? ' | ' + p.spec.substring(0,60) : '')
        );
      });
      Object.keys(byBrand).forEach(function(brand) {
        catalogText += '\n[' + brand + ']\n' + byBrand[brand].join('\n');
      });
    }

    // Динамічні тарифи
    let tariffsText = '';
    if (typeof TARIFFS_DATA !== 'undefined') {
      tariffsText = TARIFFS_DATA.map(function(t) {
        return '  ' + t.name + ': ' + t.price + ' ₴/міс — ' + (t.spec || '');
      }).join('\n');
    }

    // Динамічні SIM-карти
    let simText = '';
    if (typeof extraEquipment !== 'undefined' && extraEquipment.sim) {
      simText = extraEquipment.sim.map(function(s) {
        return '  ' + s.code + ' | ' + s.name + ' | ' + s.price_uah + '₴ | ' + (s.spec || '');
      }).join('\n');
    }

    return 'Ти — AI-помічник компанії TIPSTER (ТОВ ТРЕКАВТО), експерт з GPS-моніторингу та телематики. Відповідай лише українською мовою. Будь конкретним, корисним, дружнім.\n\n'
      + 'Поточний курс: USD = ' + usd.toFixed(2) + ' грн, EUR = ' + eur.toFixed(2) + ' грн (ПриватБанк). Використовуй ці точні курси.\n\n'
      + 'КАТАЛОГ ОБЛАДНАННЯ (код | назва | партнерська ціна | РРЦ | опис):\n' + catalogText + '\n\n'
      + 'ТАРИФИ GPS-СЕРВІСУ:\n' + tariffsText + '\n\n'
      + 'SIM-КАРТИ:\n' + simText + '\n\n'
      + 'ПОСЛУГИ МОНТАЖУ: базовий монтаж від 400 ₴, складний з CAN від 1200 ₴.\n\n'
      + 'КОНТАКТИ: +38(095)654-66-44, office@trackauto.com.ua, tipster.ua\n\n'
      + 'Якщо питають ціну — вказуй РРЦ в гривнях. Партнерські ціни — тільки для зареєстрованих партнерів.\n'
      + 'Якщо питають підібрати трекер — уточни задачу: легкове авто / вантажівка / спецтехніка / маяк / особистий трекер.\n'
      + 'Не вигадуй характеристики — якщо не знаєш, рекомендуй звернутись до менеджера.\n\n'
      + 'ТЕХНІЧНИЙ СЛОВНИК (пояснюй простими словами):\n'
      + '  2G — стандартний зв\'язок, працює по всій Україні, дешевший. Достатній для більшості задач.\n'
      + '  4G CAT1 — швидший зв\'язок, краща стабільність, менше затримок. Рекомендується для нових інсталяцій.\n'
      + '  BLE — Bluetooth Low Energy. Дозволяє підключати бездротові датчики: маяки EYE, температура, RFID.\n'
      + '  CAN-шина — шина даних автомобіля. Трекер з CAN читає: швидкість, оберти, паливо, діагностику без врізки.\n'
      + '  OBD — діагностичний роз\'єм під панеллю авто. Plug&Play — вставив і готово, монтаж не потрібен.\n'
      + '  IP67 — захист від пилу і занурення у воду. Для спецтехніки та зовнішнього монтажу.\n'
      + '  IPX7 — захист від занурення у воду. Для маяків та особистих трекерів.\n'
      + '  Маяк — автономний трекер з батареєю (TAT100, TAT140). Не потребує підключення до живлення авто.\n\n'
      + 'ПОРІВНЯННЯ ПОПУЛЯРНИХ МОДЕЛЕЙ:\n'
      + '  FMB920 vs FMC920 — однакові функції, FMC920 має 4G CAT1 (швидший зв\'язок). Рекомендуємо FMC920.\n'
      + '  FMT100 vs FMC880 — OBD трекери Plug&Play. FMT100 — 2G, FMC880 — 4G. Для нових авто краще FMC880.\n'
      + '  TAT100 vs TAT140 — автономні маяки. TAT100 — 2G до 3 років, TAT140 — 4G CAT1 швидший зв\'язок.\n\n'
      + 'ПІДБІР ПО ЗАДАЧІ:\n'
      + '  Легкове авто (базовий) → FMC920 або FMB920\n'
      + '  Легкове авто Plug&Play → FMC880 (OBD) або FMC800 (прикурювач)\n'
      + '  Легкове авто + дані CAN → FMC150 або FMC150E\n'
      + '  Вантажівка / автобус → FMC130, FMC230, FMC125\n'
      + '  Спецтехніка / 90V → FMB930, FMC650\n'
      + '  Маяк прихований → TAT100 (2G) або TAT140 (4G)\n'
      + '  Особистий трекер → ATC700-P\n'
      + '  Електротранспорт → FTC305, TFT100C\n'
      + '  Мотоцикл / скутер → FTC920, FTC921\n\n'
      + 'УМОВИ ПАРТНЕРСТВА:\n'
      + '  Партнерська програма відкрита для юридичних осіб та ФОП.\n'
      + '  Партнер отримує знижку на всі пристрої (партнерська ціна нижча за РРЦ).\n'
      + '  Для реєстрації — заповнити форму на сайті або звернутись до менеджера.\n\n'
      + 'ЗАМОВЛЕННЯ ТА ДОСТАВКА:\n'
      + '  Оплата: безготівковий розрахунок для юридичних осіб, карткою для фізичних.\n'
      + '  Доставка: Нова Пошта по всій Україні, зазвичай 1-2 дні.\n'
      + '  Монтаж: виконується в сервісному центрі або виїзд майстра — уточнювати у менеджера.\n\n'
      + 'ГАРАНТІЯ:\n'
      + '  Гарантія на обладнання Teltonika — 24 місяці.\n'
      + '  Гарантія на обладнання Bitrek — 12 місяців.\n'
      + '  Гарантія не поширюється на механічні пошкодження та неправильне підключення.\n\n'
      + 'ЯКЩО НЕ ЗНАЄШ ВІДПОВІДІ — скажи: "Для точної відповіді рекомендую звернутись до менеджера: +38(095)654-66-44 або написати в Telegram."\n\n'
      + 'ПЛАТФОРМА NAVIXY — GPS-моніторинг та телематика:\n'
      + '  Що це: Navixy — хмарна B2B платформа (PaaS) для GPS-моніторингу транспорту, активів та польових співробітників. Використовується такими компаніями як Amazon, DHL, Toyota, Nestlé.\n'
      + '  Для кого: Для бізнесу з автопарком, логістичних компаній, сервісних служб, охоронних компаній. Ідеально для партнерів що надають послуги моніторингу своїм клієнтам.\n\n'
      + '  МОЖЛИВОСТІ ПЛАТФОРМИ:\n'
      + '  — Моніторинг в реальному часі: GPS-координати, маршрути, зупинки, геозони\n'
      + '  — Підтримка 30 000+ активних об\'єктів в одному акаунті\n'
      + '  — Веб-консоль + мобільні додатки Android/iOS\n'
      + '  — Телематика авто: швидкість, оберти, паливо, CAN-дані, діагностика\n'
      + '  — Відеоспостереження: підтримка відеорегістраторів (MDVR)\n'
      + '  — Управління польовими співробітниками: завдання, маршрути, диспетчеризація\n'
      + '  — Інтеграція з CRM/ERP: Salesforce, SAP, Oracle, HubSpot\n'
      + '  — API для розробників: відкритий REST API для побудови власних рішень\n'
      + '  — Підтримка пристроїв: Teltonika, Queclink, Ruptela, Jimi/Concox та інші\n\n'
      + '  ТАРИФИ NAVIXY (через TIPSTER):\n'
      + '  — Мінімальний щомісячний платіж: $199/міс\n'
      + '  — Модульна система: платиш тільки за ті послуги що використовуєш\n'
      + '  — Є знижки при збільшенні кількості об\'єктів\n'
      + '  — Для уточнення цін — звертатись до менеджера TIPSTER\n\n'
      + '  МОДУЛІ ПЛАТФОРМИ:\n'
      + '  — IoT Logic: підключення пристроїв, обробка даних в реальному часі\n'
      + '  — Location Intelligence: відстеження, маршрути, події (перевищення швидкості, різке гальмування)\n'
      + '  — IoT Query Lakehouse: зберігання та аналіз великих масивів даних\n'
      + '  — Field Service: управління польовими командами та завданнями\n\n'
      + '  ПЕРЕВАГИ NAVIXY:\n'
      + '  — Працює з усіма трекерами Teltonika та Bitrek з нашого каталогу\n'
      + '  — Хмарне рішення — не потрібен власний сервер\n'
      + '  — Масштабується від 10 до десятків тисяч об\'єктів\n'
      + '  — Білий лейбл (White Label) — партнер може продавати під власним брендом\n'
      + '  — Підтримка 24/7\n\n'
      + '  ЯК ПІДКЛЮЧИТИСЬ до Navixy через TIPSTER:\n'
      + '  1. Звернутись до менеджера TIPSTER: +38(095)654-66-44\n'
      + '  2. Узгодити кількість об\'єктів та необхідні модулі\n'
      + '  3. Отримати доступ до платформи та налаштувати трекери\n'
      + '  Сайт платформи: navixy.com';
  }
  let chatHistory = [];
  let chatOpen = false;
  let isTyping = false;

  window.chatToggle = function() {
    chatOpen = !chatOpen;
    const panel = document.getElementById('ai-chat-panel');
    const badge = document.getElementById('chat-badge');
    panel.classList.toggle('open', chatOpen);
    if (chatOpen) {
      badge.style.display = 'none';
      const inp = document.getElementById('ai-chat-input');
      if (inp) inp.focus();
      if (chatHistory.length === 0) chatAddWelcome();
    }
  };

  function chatAddWelcome() {
    chatAddMessage('bot', 'Привіт! 👋 Я AI-помічник TIPSTER.<br>Допоможу підібрати трекер, дізнатися ціни або відповім на питання по каталогу.<br><strong>Про що запитати?</strong>');
  }

  function chatAddMessage(role, html_content) {
    const messages = document.getElementById('ai-chat-messages');
    if (!messages) return;
    const div = document.createElement('div');
    div.className = 'chat-msg ' + role;
    const avatar = role === 'bot' ? '🤖' : '👤';
    div.innerHTML = `<div class="msg-avatar">${avatar}</div><div class="chat-bubble">${html_content}</div>`;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
    return div;
  }

  function chatShowTyping() {
    const messages = document.getElementById('ai-chat-messages');
    if (!messages) return null;
    const div = document.createElement('div');
    div.className = 'chat-msg bot';
    div.id = 'chat-typing-indicator';
    div.innerHTML = '<div class="msg-avatar">🤖</div><div class="chat-bubble"><div class="chat-typing"><span></span><span></span><span></span></div></div>';
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
    return div;
  }

  window.chatSend = async function(presetText) {
    if (isTyping) return;
    const input = document.getElementById('ai-chat-input');
    const text = presetText || (input ? input.value.trim() : '');
    if (!text) return;
    if (input) input.value = '';

    // Сховати підказки після першого повідомлення
    const sugg = document.getElementById('ai-chat-suggestions');
    if (sugg) sugg.style.display = 'none';

    chatAddMessage('user', text);
    chatHistory.push({ role: 'user', content: text });

    isTyping = true;
    const typingEl = chatShowTyping();

    try {
      const WORKER_URL = 'https://cold-art-b646tipster-chat.shutko-m.workers.dev';
      // Підставляємо реальний курс долара з каталогу
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system: buildSystemPrompt(),
          messages: chatHistory
        })
      });

      const data = await response.json();
      if (typingEl) typingEl.remove();

      if (data.content && data.content[0]) {
        const reply = data.content[0].text
          .replace(/\n\n/g, '<br><br>')
          .replace(/\n/g, '<br>')
          .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
          .replace(/\*([^*]+)\*/g, '<em>$1</em>');

        chatAddMessage('bot', reply);
        chatHistory.push({ role: 'assistant', content: data.content[0].text });
      } else {
        chatAddMessage('bot', 'Вибачте, сталась помилка. Спробуйте ще раз або зверніться до менеджера: <strong>+38(095)654-66-44</strong>');
      }
    } catch(err) {
      if (typingEl) typingEl.remove();
      chatAddMessage('bot', 'Помилка з\'єднання. Будь ласка, перевірте інтернет або зателефонуйте: <strong>+38(095)654-66-44</strong>');
    } finally {
      isTyping = false;
    }
  };
