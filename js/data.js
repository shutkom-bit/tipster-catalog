// ══════════════════════════════════════════════════
// TIPSTER Catalog — data.js
// Статичні дані: товари, аксесуари, тарифи
// ══════════════════════════════════════════════════

// ════════════════════════════════════════════════════════
//  DATA
// ════════════════════════════════════════════════════════

const TELTONIKA_URL = {
  // 2G
  "FMB900":  "https://www.teltonika-gps.com/products/trackers/basic/fmb900",
  "FMB910":  "https://www.teltonika-gps.com/products/trackers/basic/fmb910",
  "FMB920":  "https://www.teltonika-gps.com/products/trackers/basic/fmb920",
  "FMB930":  "https://www.teltonika-gps.com/products/trackers/basic/fmb930",
  "FMB965":  "https://www.teltonika-gps.com/products/trackers/basic/fmb965",
  "FMT100":  "https://www.teltonika-gps.com/products/trackers/fast-easy/fmt100",
  "FMT100G": "https://www.teltonika-gps.com/products/trackers/fast-easy/fmt100",
  "FMP100":  "https://www.teltonika-gps.com/products/trackers/fast-easy/fmp100",
  "FMB010":  "https://www.teltonika-gps.com/products/trackers/fast-easy/fmb010",
  "FMB020":  "https://www.teltonika-gps.com/products/trackers/fast-easy/fmb020",
  "FMB001":  "https://www.teltonika-gps.com/products/trackers/obd/fmb001",
  "FMB003":  "https://www.teltonika-gps.com/products/trackers/obd/fmb003",
  "FMB110":  "https://www.teltonika-gps.com/products/trackers/advanced/fmb110",
  "FMB120":  "https://www.teltonika-gps.com/products/trackers/advanced/fmb120",
  "FMB130":  "https://www.teltonika-gps.com/products/trackers/advanced/fmb130",
  "FMB122":  "https://www.teltonika-gps.com/products/trackers/advanced/fmb122",
  "FMB204":  "https://www.teltonika-gps.com/products/trackers/advanced/fmb204",
  "FMB209":  "https://www.teltonika-gps.com/products/trackers/advanced/fmb209",
  "FMB150L": "https://www.teltonika-gps.com/ru/products/trackers/can-data/fmb150",
  "FMB150E": "https://www.teltonika-gps.com/ru/products/trackers/can-data/fmb150",
  "FMB140L": "https://www.teltonika-gps.com/products/trackers/can/fmb140",
  "FMB140A": "https://www.teltonika-gps.com/products/trackers/can/fmb140",
  "FMB240L": "https://www.teltonika-gps.com/products/trackers/can/fmb240",
  "FMB240A": "https://www.teltonika-gps.com/products/trackers/can/fmb240",
  "FMB125E": "https://www.teltonika-gps.com/products/trackers/professional/fmb125",
  "FMB125I": "https://www.teltonika-gps.com/products/trackers/professional/fmb125",
  "FMB225":  "https://www.teltonika-gps.com/products/trackers/professional/fmb225",
  // 4G
  "FMC920":  "https://www.teltonika-gps.com/products/trackers/basic/fmc920",
  "FMC880":  "https://www.teltonika-gps.com/products/trackers/fast-easy/fmc880",
  "FMC880G": "https://www.teltonika-gps.com/products/trackers/fast-easy/fmc880",
  "FMC800":  "https://www.teltonika-gps.com/products/trackers/fast-easy/fmc800",
  "FMC003":  "https://www.teltonika-gps.com/products/trackers/obd/fmc003",
  "FMC130":  "https://www.teltonika-gps.com/products/trackers/advanced/fmc130",
  "FMC230":  "https://www.teltonika-gps.com/products/trackers/advanced/fmc230",
  "FMC234":  "https://www.teltonika-gps.com/products/trackers/advanced/fmc234",
  "FMC150":  "https://www.teltonika-gps.com/products/trackers/can/fmc150",
  "FMC150E": "https://www.teltonika-gps.com/products/trackers/can/fmc150",
  "FMC250":  "https://www.teltonika-gps.com/products/trackers/can/fmc250",
  "FMC250E": "https://www.teltonika-gps.com/products/trackers/can/fmc250",
  "FMC125":  "https://www.teltonika-gps.com/products/trackers/professional/fmc125",
  "FMC225":  "https://www.teltonika-gps.com/products/trackers/professional/fmc225",
  "FMC650":  "https://www.teltonika-gps.com/products/trackers/professional/fmc650",
  // FTC
  "FTC920":  "https://www.teltonika-gps.com/products/trackers/basic/ftc920",
  "FTC921":  "https://www.teltonika-gps.com/products/trackers/basic/ftc921",
  "FTC924":  "https://www.teltonika-gps.com/products/trackers/basic/ftc924",
  "FTC927":  "https://www.teltonika-gps.com/products/trackers/basic/ftc927",
  "FTC961":  "https://www.teltonika-gps.com/products/trackers/basic/ftc961",
  "FTC965":  "https://www.teltonika-gps.com/products/trackers/basic/ftc965",
  "FTC880":  "https://www.teltonika-gps.com/products/trackers/fast-easy/ftc880",
  "FTC887":  "https://www.teltonika-gps.com/products/trackers/fast-easy/ftc887",
  "FTC134":  "https://www.teltonika-gps.com/products/trackers/advanced/ftc134",
  "FTC305":  "https://wiki.teltonika-gps.com/view/FTC305",
  "FTC305W": "https://wiki.teltonika-gps.com/view/FTC305",
  // Assets
  "TAT100":  "https://www.teltonika-gps.com/products/trackers/autonomous/tat100",
  "TAT100B": "https://www.teltonika-gps.com/products/trackers/autonomous/tat100",
  "TAT140":  "https://www.teltonika-gps.com/products/trackers/autonomous/tat140",
  "TAT240":  "https://www.teltonika-gps.com/products/trackers/autonomous/tat240",
  "ATC700-P": "https://wiki.teltonika-gps.com/view/ATC700",
  "GH5200":  "https://www.teltonika-gps.com/products/trackers/assets-workforce/gh5200",
  "TFT100C": "https://www.teltonika-gps.com/products/trackers/e-mobility/tft100",
  "TFT100R": "https://www.teltonika-gps.com/products/trackers/e-mobility/tft100",
  "TFT100U": "https://www.teltonika-gps.com/products/trackers/e-mobility/tft100",
};

const BITREK_URL = {
  // Контроль транспорту — підтверджені URL з bitrek.ua
  "BI 910 TREK":     "https://bitrek.ua/kontrol-transporta/bi-910-trek",
  "BI 920 TREK":     "https://bitrek.ua/kontrol-transporta/bi-920-trek",
  "BI 810 TREK":     "https://bitrek.ua/kontrol-transporta/bitrek-1",
  "BI 820 TREK":     "https://bitrek.ua/kontrol-transporta/bi-820-trek",
  "BI 868 TREK":     "https://bitrek.ua/kontrol-transporta/bitrek-15",
  "BI 420 TREK":     "https://bitrek.ua/kontrol-transporta/bitrek-20",
  "BI 522 L TREK":   "https://bitrek.ua/kontrol-transporta/bitrek-19",
  "BI 530 R TREK":   "https://bitrek.ua/kontrol-transporta/bitrek-2",
  "BI 530 C TREK":   "https://bitrek.ua/kontrol-transporta/bi530ctrek",
  "BI 450 TREK":     "https://bitrek.ua/kontrol-transporta/bitrek-21",
  "BI 310 Cicada":   "https://bitrek.ua/kontrol-transporta/bitrek-18",
  // Контроль пального
  "BI FLB 1000":     "https://bitrek.ua/kontrol-topliva/bitrek-23",
};

const PROGRAM_TAG = {
  "BASIC":       "tag-gray",
  "FAST&EASY":   "tag-blue",
  "OBD":         "tag-orange",
  "ADVANCED":    "tag-green",
  "CAN":         "tag-purple",
  "PROFESSIONAL":"tag-red",
  "E-MOBILITY":  "tag-blue",
  "AUTONOMOUS":  "tag-orange",
  "Оновлення":   "tag-gray",
  "Standard":    "tag-gray",
  "Advanced":    "tag-green",
  "BLE":         "tag-blue",
  "BLE RS485":   "tag-blue",
  "CAN BLE":     "tag-purple",
  "CAN OBD":     "tag-purple",
  "4G BLE":      "tag-blue",
  "4G CAN":      "tag-purple",
  "mNVR":        "tag-red",
  "Камери":      "tag-orange",
  "Паливо":      "tag-green",
  "Температура": "tag-blue",
  "Темп+Вологість":"tag-blue",
  "Мітки":       "tag-orange",
  "CAN":         "tag-purple",
  "Форсунки":    "tag-gray",
  "SENSORS":     "tag-blue",
  "EYE SENSORS": "tag-orange",
  "RFID":        "tag-orange",
  "SOS":         "tag-red",
  "Антена":      "tag-blue",
  "Кабель":      "tag-gray",
  "Батарея":     "tag-orange",
  "Монтаж":      "tag-gray",
};

const products = [
  // TELTONIKA 2G
  { mode:"fixed", code:"FMB900",    article:"FMB900AGCO01",        name:"FMB900",                                  currency:"USD", partnerPrice:37.80, retailPrice:41.40, series:"2G", program:"BASIC", brand:"Teltonika" , spec:"2G трекер початкового рівня. Компактний, вбудована антена GNSS/GSM. Ідеально для базового моніторингу транспорту."},
  { mode:"fixed", code:"FMB910",    article:"FMB91093IN01",        name:"FMB910",                                  currency:"USD", partnerPrice:37.80, retailPrice:41.20, series:"2G", program:"BASIC", brand:"Teltonika" , spec:"2G трекер з розширеними входами/виходами. Цифрові та аналогові I/O. Підтримка датчиків і реле."},
  { mode:"fixed", code:"FMB920",    article:"FMB920AECORU",        name:"FMB920",                                  currency:"USD", partnerPrice:39.60, retailPrice:43.16, series:"2G", program:"BASIC", brand:"Teltonika" , spec:"2G трекер з BLE 4.0. Зчитує маяки EYE, датчики температури та RFID. Компактний корпус."},
  { mode:"fixed", code:"FMB930",    article:"FMB930XR3C01",        name:"FMB930 (90V)",                            currency:"USD", partnerPrice:39.60, retailPrice:43.16, series:"2G", program:"BASIC", brand:"Teltonika" , spec:"2G трекер для вантажного транспорту. Вхід живлення 10–90V. CAN читання через зовнішній адаптер."},
  { mode:"fixed", code:"FMB965",    article:"FMB9653EQJ01",        name:"FMB965 (IP67)",                           currency:"USD", partnerPrice:61.20, retailPrice:66.71, series:"2G", program:"BASIC", brand:"Teltonika" , spec:"2G трекер із захистом IP67. Герметичний корпус, 4 цифрові входи. Для спецтехніки та вантажівок."},
  { mode:"fixed", code:"FMT100",    article:"FMT1001AFD01",        name:"FMT100",                                  currency:"USD", partnerPrice:59.40, retailPrice:64.75, series:"2G", program:"FAST&EASY", brand:"Teltonika" , spec:"2G OBD трекер Plug&Play. Встановлення в OBD-II роз\'єм за 1 хвилину. Зчитує діагностику авто."},
  { mode:"fixed", code:"FMT100G",   article:"FMT1005RFD01",        name:"FMT100 (+GYRO)",                          currency:"USD", partnerPrice:63.00, retailPrice:68.67, series:"2G", program:"FAST&EASY", brand:"Teltonika" , spec:"2G OBD трекер з гіроскопом. Виявлення прискорення, удару та небезпечного водіння. Plug&Play."},
  { mode:"fixed", code:"FMP100",    article:"FMP100UEC301",        name:"FMP100",                                  currency:"USD", partnerPrice:50.40, retailPrice:54.94, series:"2G", program:"FAST&EASY", brand:"Teltonika" , spec:"2G трекер від прикурювача. Живлення 12/24V, вбудований акумулятор. Встановлення без монтажу."},
  { mode:"fixed", code:"FMB010",    article:"FMB0101VHG01",        name:"FMB010",                                  currency:"USD", partnerPrice:45.00, retailPrice:49.05, series:"2G", program:"FAST&EASY", brand:"Teltonika" , spec:"2G трекер FAST&EASY з вбудованою батареєю. Мінімальний монтаж, живлення від ACC лінії."},
  { mode:"fixed", code:"FMB020",    article:"FMB0204MNJ01",        name:"FMB020",                                  currency:"USD", partnerPrice:39.60, retailPrice:43.16, series:"2G", program:"FAST&EASY", brand:"Teltonika" , spec:"2G трекер FAST&EASY. Розширена версія FMB010 з додатковим I/O. Простий монтаж."},
  { mode:"fixed", code:"FMB001",    article:"FMB001SDLY01",        name:"FMB001 (OBD)",                            currency:"USD", partnerPrice:64.80, retailPrice:70.63, series:"2G", program:"OBD", brand:"Teltonika" , spec:"2G OBD трекер. Зчитує понад 10 000 параметрів ECU. Plug&Play через OBD-II роз\'єм."},
  { mode:"fixed", code:"FMB003",    article:"FMB00377NJ01",        name:"FMB003 (OBD)",                            currency:"USD", partnerPrice:75.60, retailPrice:82.40, series:"2G", program:"OBD", brand:"Teltonika" , spec:"2G OBD трекер із захистом від несанкціонованого доступу. Зчитування J1939/FMS для вантажівок."},
  { mode:"fixed", code:"FMB110",    article:"FMB110BBV801",        name:"FMB110",                                  currency:"USD", partnerPrice:43.20, retailPrice:47.09, series:"2G", program:"ADVANCED", brand:"Teltonika" , spec:"2G трекер із зовнішньою GNSS-антеною. 2 SIM-карти, резервне живлення, 4 digital I/O."},
  { mode:"fixed", code:"FMB120",    article:"FMB120B6XW01",        name:"FMB120",                                  currency:"USD", partnerPrice:46.80, retailPrice:51.01, series:"2G", program:"ADVANCED", brand:"Teltonika" , spec:"2G трекер із зовнішніми антенами GNSS та GSM. Підвищена чутливість у складних умовах."},
  { mode:"fixed", code:"FMB130",    article:"FMB130B5XW01",        name:"FMB130",                                  currency:"USD", partnerPrice:51.30, retailPrice:55.92, series:"2G", program:"ADVANCED", brand:"Teltonika" , spec:"2G трекер з вбудованою батареєю 170 mAh. Резервне живлення, сповіщення про відключення."},
  { mode:"fixed", code:"FMB122",    article:"FMB122BIOB01",        name:"FMB122",                                  currency:"USD", partnerPrice:51.30, retailPrice:55.92, series:"2G", program:"ADVANCED", brand:"Teltonika" , spec:"2G трекер Advanced з GNSS-антеною. Покращена точність позиціонування для комерційного транспорту."},
  { mode:"fixed", code:"FMB204",    article:"FMB204BD9L01",        name:"FMB204",                                  currency:"USD", partnerPrice:66.60, retailPrice:72.59, series:"2G", program:"ADVANCED", brand:"Teltonika" , spec:"2G трекер з 4 digital + 4 analog входами. Для складних інсталяцій із множинними датчиками."},
  { mode:"fixed", code:"FMB209",    article:"FMB2092N9L01",        name:"FMB209",                                  currency:"USD", partnerPrice:54.00, retailPrice:58.86, series:"2G", program:"ADVANCED", brand:"Teltonika" , spec:"2G трекер Advanced з 1-Wire. Підтримка датчиків температури Dallas та iButton-ключів."},
  { mode:"fixed", code:"FMB150L",   article:"FMB150K5XW01",        name:"FMB150",                        currency:"USD", partnerPrice:97.20, retailPrice:105.95, series:"2G", program:"CAN", brand:"Teltonika" , spec:"2G CAN-трекер з LV-CAN200. Читання до 1000 параметрів шини CAN легкового авто без врізки."},
  { mode:"fixed", code:"FMB150E",   article:"FMB150K5J101",        name:"FMB150 Extended",                         currency:"USD", partnerPrice:135.00, retailPrice:147.15, series:"2G", program:"CAN", brand:"Teltonika" , spec:"2G CAN-трекер Extended. Підтримка LV-CAN200 + ALL-CAN300. Максимальна сумісність авто."},
  { mode:"fixed", code:"FMB140L",   article:"FMB1408TXWO1",        name:"FMB140 LV-CAN200",                        currency:"USD", partnerPrice:117.00, retailPrice:127.53, series:"2G", program:"CAN", brand:"Teltonika" , spec:"2G CAN-трекер з адаптером LV-CAN200. Бездротове підключення до шини CAN 2.0."},
  { mode:"fixed", code:"FMB140A",   article:"FMB140YNXWO1",        name:"FMB140 ALL-CAN300",                       currency:"USD", partnerPrice:187.20, retailPrice:204.05, series:"2G", program:"CAN", brand:"Teltonika" , spec:"2G CAN-трекер з адаптером ALL-CAN300. Сумісний із 400+ моделями авто. Без врізки."},
  { mode:"fixed", code:"FMB240L",   article:"FMB240BT2X01",        name:"FMB240 IP67 LV-CAN200",                   currency:"USD", partnerPrice:128.70, retailPrice:140.28, series:"2G", program:"CAN", brand:"Teltonika" , spec:"2G CAN-трекер IP67 з LV-CAN200. Герметичний корпус для комерційного транспорту."},
  { mode:"fixed", code:"FMB240A",   article:"FMB240YN2X01",        name:"FMB240 IP67 ALL-CAN300",                  currency:"USD", partnerPrice:198.90, retailPrice:216.80, series:"2G", program:"CAN", brand:"Teltonika" , spec:"2G CAN-трекер IP67 з ALL-CAN300. Захищений корпус + широка сумісність з авто."},
  { mode:"fixed", code:"FMB125E",   article:"FMB125BJOB01",        name:"FMB125 External GPS",                     currency:"USD", partnerPrice:52.20, retailPrice:56.90, series:"2G", program:"PROFESSIONAL", brand:"Teltonika" , spec:"2G Professional трекер із зовнішньою GNSS-антеною. Розширені I/O, 1-Wire, RS232/RS485."},
  { mode:"fixed", code:"FMB125I",   article:"FMB125BRRB01",        name:"FMB125 Internal GPS",                     currency:"USD", partnerPrice:49.50, retailPrice:53.96, series:"2G", program:"PROFESSIONAL", brand:"Teltonika" , spec:"2G Professional трекер з внутрішньою GNSS-антеною. 1-Wire, RS232, повний набір I/O."},
  { mode:"fixed", code:"FMB225",    article:"FMB225BR2X01",        name:"FMB225 IP67",                             currency:"USD", partnerPrice:57.60, retailPrice:62.78, series:"2G", program:"PROFESSIONAL", brand:"Teltonika" , spec:"2G Professional трекер IP67. Захищений корпус, RS232/RS485, 1-Wire. Для спецтехніки."},
  { mode:"fixed", code:"ALLCAN3",   article:"—",                   name:"ALLCAN300 Оновлення",                     currency:"USD", partnerPrice:79.20, retailPrice:93.00, series:"2G", program:"Оновлення", brand:"Teltonika" , spec:"Прошивка ALL-CAN300 для оновлення сумісного CAN-адаптера до підтримки 400+ авто."},
  { mode:"fixed", code:"EXTEND",    article:"—",                   name:"Extended Оновлення",                      currency:"USD", partnerPrice:59.94, retailPrice:71.00, series:"2G", program:"Оновлення", brand:"Teltonika" , spec:"Прошивка Extended для розширення функціоналу CAN-адаптера. Активує додаткові параметри."},
  // TELTONIKA 4G
  { mode:"fixed", code:"FMC920",    article:"FMC9202MC01",         name:"FMC920 CAT1",                             currency:"USD", partnerPrice:43.56, retailPrice:47.92, series:"4G", program:"BASIC", brand:"Teltonika" , spec:"4G CAT1 трекер з BLE 4.0. Читає маяки EYE, датчики та RFID. Компактний, швидкий зв\'язок."},
  { mode:"fixed", code:"FMC880",    article:"FMC880LOFD01",        name:"FMC880 CAT1",                             currency:"USD", partnerPrice:81.90, retailPrice:90.09, series:"4G", program:"FAST&EASY", brand:"Teltonika" , spec:"4G CAT1 OBD трекер Plug&Play. Зчитує діагностику ECU, швидкий 4G зв\'язок. Без монтажу."},
  { mode:"fixed", code:"FMC880G",   article:"FMC880FGFD01",        name:"FMC880 (+GYRO)",                          currency:"USD", partnerPrice:85.50, retailPrice:94.05, series:"4G", program:"FAST&EASY", brand:"Teltonika" , spec:"4G CAT1 OBD трекер з гіроскопом. Виявлення небезпечного водіння + діагностика авто."},
  { mode:"fixed", code:"FMC800",    article:"FMC800TPNJ01",        name:"FMC800 CAT1",                             currency:"USD", partnerPrice:86.40, retailPrice:95.04, series:"4G", program:"FAST&EASY", brand:"Teltonika" , spec:"4G CAT1 трекер від прикурювача. Вбудований акумулятор, встановлення без інструментів."},
  { mode:"fixed", code:"FMC003",    article:"FMC003X4NJ01",        name:"FMC003 CAT1 OBD",                         currency:"USD", partnerPrice:75.24, retailPrice:82.76, series:"4G", program:"OBD", brand:"Teltonika" , spec:"4G CAT1 OBD трекер. Зчитує ECU-параметри через OBD-II, підтримка J1939/FMS для вантажівок."},
  { mode:"fixed", code:"FMC130",    article:"FMC130KYXW01",        name:"FMC130 CAT1",                             currency:"USD", partnerPrice:49.50, retailPrice:54.45, series:"4G", program:"ADVANCED", brand:"Teltonika" , spec:"4G CAT1 Advanced трекер із зовнішньою GNSS-антеною. 2 SIM, резервне живлення, 4 I/O."},
  { mode:"fixed", code:"FMC230",    article:"FMC230KY2X01",        name:"FMC230",                                  currency:"USD", partnerPrice:81.00, retailPrice:89.10, series:"4G", program:"ADVANCED", brand:"Teltonika" , spec:"4G CAT1 трекер із зовнішніми антенами. Покращена стабільність зв\'язку у складних умовах."},
  { mode:"fixed", code:"FMC234",    article:"FMC234WC2X01",        name:"FMC234 IP67",                             currency:"USD", partnerPrice:86.40, retailPrice:95.04, series:"4G", program:"ADVANCED", brand:"Teltonika" , spec:"4G CAT1 трекер IP67. Герметичний корпус, зовнішні антени. Для комерційного транспорту."},
  { mode:"fixed", code:"FMC150",    article:"FMC150UAXW01",        name:"FMC150",                                  currency:"USD", partnerPrice:117.00, retailPrice:128.70, series:"4G", program:"CAN", brand:"Teltonika" , spec:"4G CAT1 CAN-трекер з LV-CAN200. Бездротове зчитування CAN-шини легкових авто. 4G зв\'язок."},
  { mode:"fixed", code:"FMC150E",   article:"FMC150UAJ201",        name:"FMC150 Extended",                         currency:"USD", partnerPrice:154.80, retailPrice:170.28, series:"4G", program:"CAN", brand:"Teltonika" , spec:"4G CAT1 CAN-трекер Extended. LV-CAN200 + ALL-CAN300, максимальна сумісність + 4G."},
  { mode:"fixed", code:"FMC250",    article:"FMC2505NXW01",        name:"FMC250 CAT1 IP67",                        currency:"USD", partnerPrice:128.70, retailPrice:141.57, series:"4G", program:"CAN", brand:"Teltonika" , spec:"4G CAT1 CAN-трекер IP67. Герметичний корпус, LV-CAN200, швидкий 4G зв\'язок."},
  { mode:"fixed", code:"FMC250E",   article:"FMC2505NJ101",        name:"FMC250 Extended IP67",                    currency:"USD", partnerPrice:166.50, retailPrice:183.15, series:"4G", program:"CAN", brand:"Teltonika" , spec:"4G CAT1 CAN-трекер IP67 Extended. LV-CAN200 + ALL-CAN300 + IP67 + 4G CAT1."},
  { mode:"fixed", code:"FMC125",    article:"FMC125TLXW01",        name:"FMC125 CAT1 EMEA",                        currency:"USD", partnerPrice:56.10, retailPrice:61.71, series:"4G", program:"PROFESSIONAL", brand:"Teltonika" , spec:"4G CAT1 Professional трекер EMEA. RS232/RS485, 1-Wire, повний I/O. Для складних інсталяцій."},
  { mode:"fixed", code:"FMC225",    article:"FMC225832X01",        name:"FMC225 IP67 EMEA",                        currency:"USD", partnerPrice:64.68, retailPrice:71.15, series:"4G", program:"PROFESSIONAL", brand:"Teltonika" , spec:"4G CAT1 Professional IP67. Захищений корпус, RS232/RS485, 1-Wire. Для спецтехніки."},
  { mode:"fixed", code:"FMC650",    article:"FMC6501T5S01",        name:"FMC650 CAT1",                             currency:"USD", partnerPrice:112.20, retailPrice:123.42, series:"4G", program:"PROFESSIONAL", brand:"Teltonika" , spec:"4G CAT1 Professional трекер преміум-класу. Широкий діапазон живлення, RS232/RS485/1-Wire."},
  // TELTONIKA FTC
  { mode:"fixed", code:"FTC920",    article:"FTC920AAPIL1",        name:"FTC920",                                  currency:"USD", partnerPrice:57.60, retailPrice:63.36, series:"FTC", program:"BASIC", brand:"Teltonika" , spec:"4G CAT1 трекер серії FTC. Компактний, оптимізований для хмарних платформ Teltonika."},
  { mode:"fixed", code:"FTC921",    article:"FTC921RCXW01",        name:"FTC921",                                  currency:"USD", partnerPrice:59.40, retailPrice:65.34, series:"FTC", program:"BASIC", brand:"Teltonika" , spec:"4G CAT1 трекер FTC із розширеними I/O. Цифрові входи, аналогові виходи, BLE."},
  { mode:"fixed", code:"FTC924",    article:"FTC924AAPIL1",        name:"FTC924",                                  currency:"USD", partnerPrice:63.00, retailPrice:69.30, series:"FTC", program:"BASIC", brand:"Teltonika" , spec:"4G CAT1 трекер FTC з BLE 5.0. Підтримка маяків EYE та датчиків. Оновлений чіпсет."},
  { mode:"fixed", code:"FTC927",    article:"FTC927BPPIL1",        name:"FTC927",                                  currency:"USD", partnerPrice:66.60, retailPrice:73.26, series:"FTC", program:"BASIC", brand:"Teltonika" , spec:"4G CAT1 трекер FTC НОВИНКА. BLE 5.0, покращена GNSS-чутливість, хмарна конфігурація."},
  { mode:"fixed", code:"FTC961",    article:"FTC961M8PIL1",        name:"FTC961",                                  currency:"USD", partnerPrice:79.20, retailPrice:87.12, series:"FTC", program:"BASIC", brand:"Teltonika" , spec:"4G CAT1 трекер FTC з IP67. Герметичний захист, цифрові I/O, для зовнішніх інсталяцій."},
  { mode:"fixed", code:"FTC965",    article:"FTC965CLAA01",        name:"FTC965",                                  currency:"USD", partnerPrice:84.60, retailPrice:93.06, series:"FTC", program:"BASIC", brand:"Teltonika" , spec:"4G CAT1 трекер FTC IP67 з BLE. Захищений корпус + бездротові датчики EYE."},
  { mode:"fixed", code:"FTC880",    article:"FTC880KVU801",        name:"FTC880",                                  currency:"USD", partnerPrice:76.50, retailPrice:84.15, series:"FTC", program:"FAST&EASY", brand:"Teltonika" , spec:"4G CAT1 OBD трекер FTC. Plug&Play, зчитує ECU, хмарна конфігурація без ноутбука."},
  { mode:"fixed", code:"FTC887",    article:"FTC887XFNJ01",        name:"FTC887",                                  currency:"USD", partnerPrice:87.30, retailPrice:96.03, series:"FTC", program:"FAST&EASY", brand:"Teltonika" , spec:"4G CAT1 OBD трекер FTC з гіроскопом. Eco-driving, аналіз водіння + діагностика авто."},
  { mode:"fixed", code:"FTC134",    article:"FTC134AAAA01",        name:"FTC134 CAT1",                             currency:"USD", partnerPrice:71.10, retailPrice:78.21, series:"FTC", program:"ADVANCED", brand:"Teltonika" , spec:"4G CAT1 Advanced трекер FTC. Зовнішні антени GNSS/LTE, резервне живлення, I/O."},
  { mode:"fixed", code:"FTC305",    article:"FTC305STAC01",        name:"FTC305",                                  currency:"USD", partnerPrice:113.40, retailPrice:124.74, series:"FTC", program:"E-MOBILITY", brand:"Teltonika" , spec:"4G CAT1 трекер для електротранспорту. Зчитування параметрів BMS, SOC батареї, SAE J1939."},
  { mode:"fixed", code:"FTC305W",   article:"FTC305HEAB01",        name:"FTC305 without casing",                   currency:"USD", partnerPrice:113.40, retailPrice:124.74, series:"FTC", program:"E-MOBILITY", brand:"Teltonika" , spec:"4G CAT1 трекер E-Mobility без корпусу (монтаж всередині). BMS, SAE J1939, CAN."},
  // TELTONIKA Assets
  { mode:"fixed", code:"TAT100",    article:"TAT100TSBAH0",        name:"TAT100",                                  currency:"USD", partnerPrice:77.40, retailPrice:85.14, series:"Assets", program:"AUTONOMOUS", brand:"Teltonika" , spec:"Автономний GPS-маяк 2G. Вбудована батарея до 3 років. Магнітне кріплення, IPX7."},
  { mode:"fixed", code:"TAT100B",   article:"TAT1003CXW01",        name:"TAT100 (3x batt.)",                       currency:"USD", partnerPrice:88.20, retailPrice:97.02, series:"Assets", program:"AUTONOMOUS", brand:"Teltonika" , spec:"Автономний маяк 2G з 3 батареями. Потрійний ресурс — до 5 років автономної роботи."},
  { mode:"fixed", code:"TAT140",    article:"TAT1403UBP01",        name:"TAT140 CAT1",                             currency:"USD", partnerPrice:108.00, retailPrice:118.80, series:"Assets", program:"AUTONOMOUS", brand:"Teltonika" , spec:"Автономний маяк 4G CAT1. Вбудована батарея, магнітне кріплення, IPX7. Швидкий зв\'язок."},
  { mode:"fixed", code:"TAT240",    article:"TAT240R6BP01",        name:"TAT240 (tamper) CAT1",                    currency:"USD", partnerPrice:124.20, retailPrice:136.62, series:"Assets", program:"AUTONOMOUS", brand:"Teltonika" , spec:"4G CAT1 маяк з датчиком тамперу. Захист від несанкціонованого зняття + IPX7 + CAT1."},
  { mode:"fixed", code:"ATC700-P",   article:"ATC700AAAA01",        name:"ATC700 CAT1 Персональний", currency:"USD", partnerPrice:61.60, retailPrice:86.40, series:"Assets", program:"AUTONOMOUS", brand:"Teltonika",
    spec:"Персональний трекер CAT1. Вбудована батарея, IPX7, BLE. Ідеально для відстеження людей та цінностей." },
  { mode:"fixed", code:"GH5200",    article:"GH5200TSTAA0",        name:"GH5200",                                  currency:"USD", partnerPrice:64.80, retailPrice:71.28, series:"Assets", program:"AUTONOMOUS", brand:"Teltonika" , spec:"Промисловий GPS-трекер для важкої техніки. Захист IP67, CAN J1939/FMS, 10–100V живлення."},
  { mode:"fixed", code:"TFT100C",   article:"TFT100TSTAA0",        name:"TFT100 (CAN)",                            currency:"USD", partnerPrice:86.40, retailPrice:95.04, series:"Assets", program:"E-MOBILITY", brand:"Teltonika" , spec:"Трекер для електробусів та електровантажівок (CAN). Зчитування BMS, SOC, пробіг, зарядка."},
  { mode:"fixed", code:"TFT100R",   article:"TFT100TRSAC0",        name:"TFT100 (RS232 or RS485)",                 currency:"USD", partnerPrice:82.80, retailPrice:91.08, series:"Assets", program:"E-MOBILITY", brand:"Teltonika" , spec:"Трекер для електротранспорту (RS232/RS485). Параметри заряду, BMS, підключення до UART."},
  { mode:"fixed", code:"TFT100U",   article:"TFT100TURAD0",        name:"TFT100 (UART)",                           currency:"USD", partnerPrice:75.60, retailPrice:83.16, series:"Assets", program:"E-MOBILITY", brand:"Teltonika" , spec:"Трекер для електротранспорту (UART). BMS-моніторинг, SOC батареї, підтримка CAN-шини."},

      // BITREK Трекери
  { mode:"fixed", code:"BI 910 TREK",       article:"BI910TREK",         name:"BI 910 TREK",                             currency:"USD", partnerPrice:111.10, retailPrice:130.00, series:"Трекери", program:"Advanced", brand:"Bitrek", spec:"Зовнішні GPS/GSM антени; RS485; CAN (FMS, j1939); 1-Wire; SIM:2, D_high:2, D_low:4, AIN:2, DOUT:2, АКБ:1000 mAh, Voice GSM" },
  { mode:"fixed", code:"BI 868 TREK",       article:"BI868",             name:"BI 868 TREK v10",                         currency:"USD", partnerPrice:70.40, retailPrice:82.00, series:"Трекери", program:"BLE", brand:"Bitrek", spec:"Вбудовані GPS/GSM антени; SIM:1, D_high:1, D_low:1, AIN:1, DOUT:1, АКБ:1000 mAh, BLE 4.0" },
  { mode:"fixed", code:"BI 522 L TREK",     article:"BI522",             name:"BI 522 L TREK",                           currency:"USD", partnerPrice:35.20, retailPrice:50.00, series:"Трекери", program:"CAN BLE", brand:"Bitrek", spec:"Вбудовані GPS/GSM антени; SIM:1, AIN:1, D_high:1, D_low:1, DOUT:1, АКБ:130 mAh, BLE 4.0, RS232" },
  { mode:"fixed", code:"BI 530 R TREK",     article:"BI530К",            name:"BI 530 R TREK v3",                        currency:"USD", partnerPrice:44.00, retailPrice:80.00, series:"Трекери", program:"CAN BLE", brand:"Bitrek", spec:"Вбудовані GPS/GSM антени; 1-Wire; RS485, SIM:1, D_low:2, AIN:2, DOUT:2, АКБ:130 mAh, BLE 4.0" },
  { mode:"fixed", code:"BI 310 Cicada",     article:"BI310",             name:"BI 310 Cicada v.2",                       currency:"USD", partnerPrice:73.70, retailPrice:72.00, series:"Трекери", program:"Автономний маяк", brand:"Bitrek", spec:"Зовнішні GPS/GSM антени; SIM:1; CAN (Connect-Bus); АКБ:1000 mAh" },
  // BITREK 4G
  { mode:"fixed", code:"BI 420 TREK",       article:"BI420",             name:"BI 420 TREK (4G)",                        currency:"USD", partnerPrice:83.60, retailPrice:92.00, series:"4G Трекери", program:"4G BLE", brand:"Bitrek", spec:"2G/4G LTE Cat 1, SIM:1, D_high:1, D_low:1, AIN:1, DOUT:1, АКБ:1000 mAh, BLE 4.0" },
  { mode:"fixed", code:"BI 410 TREK",       article:"BI410",             name:"BI 410 TREK (4G) NEW!",                   currency:"USD", partnerPrice:44.00, retailPrice:65.00, series:"4G Трекери", program:"BLE RS485", brand:"Bitrek", spec:"2G/4G LTE Cat 1, SIM:1, AIN:1, DOUT:1, АКБ:130 mAh, BLE 4.0, RS232 CanLog" },
  { mode:"fixed", code:"BI 530 C TREK",     article:"BI530С",            name:"BI 530 C TREK v3",                        currency:"USD", partnerPrice:85.80, retailPrice:90.00, series:"4G Трекери", program:"4G BLE", brand:"Bitrek", spec:"CAN 29bit(FMS,j1939)/11bit, 1-Wire, RS485, RS232, SIM:1, D_low:1, AIN:2, DOUT:1, АКБ:130 mAh, BLE 4.0" },
  { mode:"fixed", code:"BI 450 TREK",       article:"BI4504G",           name:"BI 450 TREK (4G)",                        currency:"USD", partnerPrice:112.20, retailPrice:120.00, series:"4G Трекери", program:"4G BLE", brand:"Bitrek", spec:"2G/4G LTE Cat 1, CAN:2, 1-Wire, RS485, RS232, SIM:1, D_high:1, D_low:2, AIN:2, DOUT:2, АКБ:130 mAh, BLE 4.0, Tachograph" },
  // BITREK BLE
  { mode:"fixed", code:"BLE-TAG",           article:"BLETAG",            name:"Мітка BLE",                               currency:"USD", partnerPrice:48.40, retailPrice:55.00, series:"BLE", program:"Мітки", brand:"Bitrek", spec:"Вбудована батарея; Автономність до 2 років" },
  { mode:"fixed", code:"BLE-TAG-BTN",       article:"BLETAGBTN",         name:"Мітка BLE (з кнопкою)",                   currency:"USD", partnerPrice:48.40, retailPrice:55.00, series:"BLE", program:"Мітки", brand:"Bitrek", spec:"Вбудована батарея; Автономність до 1 року" },
  // BITREK ДРП
  { mode:"fixed", code:"BI FLB 1000",       article:"BIBLTCIM",          name:"BI FLB (1000) BLE",                       currency:"USD", partnerPrice:100.10, retailPrice:120.00, series:"ДРП", program:"Паливо", brand:"Bitrek", spec:"Бездротовий датчик рівня пального; BLE 5.4; до 4 років; Android додаток" },
  { mode:"fixed", code:"BI FLS 700",        article:"BIBLTCEM",          name:"BI FLSensor v.8 (700)",                   currency:"USD", partnerPrice:89.10, retailPrice:95.00, series:"ДРП", program:"Паливо", brand:"Bitrek", spec:"RS485; довжина кабелю 7м; монтажний комплект" },
  { mode:"fixed", code:"BI FLS 1500",       article:"BIBLTHIM",          name:"BI FLSensor v.8 (1500)",                  currency:"USD", partnerPrice:119.90, retailPrice:115.00, series:"ДРП", program:"Паливо", brand:"Bitrek", spec:"RS485; довжина кабелю 7м; монтажний комплект" },
  { mode:"fixed", code:"BI FLS 3000",       article:"DS18B20",           name:"BI FLSensor v.8 (3000)",                  currency:"USD", partnerPrice:148.47, retailPrice:155.00, series:"ДРП", program:"Паливо", brand:"Bitrek", spec:"RS485; довжина кабелю 7м; монтажний комплект" },
  // BITREK Відео
  { mode:"fixed", code:"mNVR S250 SD",      article:"MNVRS250SD",        name:"mNVR S250 SD",                            currency:"USD", partnerPrice:365.20, retailPrice:365.00, series:"Відео", program:"mNVR", brand:"Bitrek", spec:"4 камери; GPS/Glonass; Passive POE; WiFi; SD Card" },
  { mode:"fixed", code:"mNVR S260 SSD",     article:"MNVRS260SSD",       name:"mNVR S260 SSD",                           currency:"USD", partnerPrice:422.18, retailPrice:460.00, series:"Відео", program:"mNVR", brand:"Bitrek", spec:"4 камери; GPS/Glonass; Passive POE; WiFi; Kingston M2 SSD 240 ГБ" },
  { mode:"fixed", code:"mNVR S261 M2",      article:"MNVRS261M2",        name:"mNVR S261 M2",                            currency:"USD", partnerPrice:347.44, retailPrice:379.00, series:"Відео", program:"mNVR", brand:"Bitrek", spec:"4 камери; GPS/Glonass; Passive POE; WiFi; Слот SATA M2 SSD до 2 ТБ" },
  { mode:"fixed", code:"CAM-DAHUA",         article:"CAMDAHUAIP",        name:"Камера Dahua IP",                         currency:"USD", partnerPrice:92.40, retailPrice:97.00, series:"Відео", program:"Камери", brand:"Bitrek", spec:"IP-камера для mDVR; Роз'єм живлення SP1310/P7" },
// ══════════════════════════════════════════════════════
  //  ІГЛА — Датчики рівня палива (ціни USD,)
  //  Джерело цін: прайс UAH / 41.20 * 1.05 (партнер), UAH_з_ПДВ / 41.20 (РРЦ)
  // ══════════════════════════════════════════════════════
  { mode:"fixed", code:"IGLA-400-1000",  article:"ДВРП-400-1000",  name:"ДВРП «Ігла» 400, 700, 1000 мм",    currency:"USD", partnerPrice:58.62, retailPrice:66.99, series:"ДВРП", program:"Ємкісний", brand:"Ігла",
    spec:"Ємкісний датчик рівня палива; довжина 400/700/1000 мм; RS-485; точність ±0.7%; IP67; гарантія 36 міс." },
  { mode:"fixed", code:"IGLA-1500-2000", article:"ДВРП-1500-2000", name:"ДВРП «Ігла» 1500, 2000 мм",       currency:"USD", partnerPrice:68.81, retailPrice:78.64, series:"ДВРП", program:"Ємкісний", brand:"Ігла",
    spec:"Ємкісний датчик рівня палива; довжина 1500/2000 мм; RS-485; точність ±0.7%; IP67; гарантія 36 міс." },
  { mode:"fixed", code:"IGLA-3000",      article:"ДВРП-3000",      name:"ДВРП «Ігла» 3000 мм",              currency:"USD", partnerPrice:79.00, retailPrice:90.29, series:"ДВРП", program:"Ємкісний", brand:"Ігла",
    spec:"Ємкісний датчик рівня палива; довжина 3000 мм; RS-485; для великих баків; точність ±0.7%; IP67" },
  { mode:"fixed", code:"IGLA-CFG",       article:"ІГЛА-КФГ",       name:"Конфігуратор Ігла",                currency:"USD", partnerPrice:58.62, retailPrice:66.99, series:"Аксесуари", program:"Конфігуратор", brand:"Ігла",
    spec:"Пристрій для налаштування та калібрування датчиків Ігла; USB-підключення; ПЗ в комплекті" },
  { mode:"fixed", code:"IGLA-DT01",      article:"DT-01-RS485",    name:"Датчик температури DT-01/RS-485",  currency:"USD", partnerPrice:58.62, retailPrice:66.99, series:"Аксесуари", program:"Температура", brand:"Ігла",
    spec:"Цифровий датчик температури; RS-485; діапазон -40…+125°C; точність ±0.5°C; IP67" },
  { mode:"fixed", code:"IGLA-MOUNT",     article:"ІГЛА-МОНТАЖ",    name:"Монтажний комплект Ігла",          currency:"USD", partnerPrice:7.65,  retailPrice:8.74,  series:"Аксесуари", program:"Монтаж", brand:"Ігла",
    spec:"Комплект для монтажу датчика: різьбовий штуцер, ущільнювачі, кріплення" },
  { mode:"fixed", code:"IGLA-CBL-75",    article:"ІГЛА-КБЛ-7.5М",  name:"Кабель ДВРП 7.5 м з роз'ємом",   currency:"USD", partnerPrice:10.19, retailPrice:11.65, series:"Аксесуари", program:"Кабелі", brand:"Ігла",
    spec:"Подовжувальний кабель з роз'ємом для датчиків Ігла; довжина 7.5 м; IP54" },
  { mode:"fixed", code:"IGLA-CBL-10",    article:"ІГЛА-КБЛ-10М",   name:"Кабель ДВРП 10 м з роз'ємом",    currency:"USD", partnerPrice:12.74, retailPrice:14.56, series:"Аксесуари", program:"Кабелі", brand:"Ігла",
    spec:"Подовжувальний кабель з роз'ємом для датчиків Ігла; довжина 10 м; IP54" },
  { mode:"fixed", code:"IGLA-CBL-21",    article:"ІГЛА-КБЛ-2+1",   name:"Кабель ДВРП (2+1) з роз'ємом",   currency:"USD", partnerPrice:14.78, retailPrice:16.89, series:"Аксесуари", program:"Кабелі", brand:"Ігла",
    spec:"Кабель для підключення двох датчиків до одного порту; з роз'ємами; IP54" },
  { mode:"fixed", code:"IGLA-CBL-CFG",   article:"ІГЛА-КБЛ-КФГ",   name:"Кабель Конфігуратора з роз'ємом", currency:"USD", partnerPrice:13.25, retailPrice:15.15, series:"Аксесуари", program:"Кабелі", brand:"Ігла",
    spec:"Кабель для підключення конфігуратора до датчика; з роз'ємами" },

    // BITREK Аксесуари
  { mode:"fixed", code:"CAN-READER",        article:"CANREADER",         name:"CAN Reader BITREK",                       currency:"USD", partnerPrice:33.00, retailPrice:40.00, series:"Аксесуари", program:"CAN", brand:"Bitrek", spec:"Безконтактний зчитувач CAN 29bit/11bit; не працює із запитами в шину CAN" },
  { mode:"fixed", code:"CAN-READER-L",      article:"CANRDRLIGHT",       name:"CAN Reader Light BITREK",                 currency:"USD", partnerPrice:27.50, retailPrice:35.00, series:"Аксесуари", program:"CAN", brand:"Bitrek", spec:"Безконтактний зчитувач CAN 29bit/11bit; безкорпусний; під стяжку" },
    { mode:"fixed", code:"NOZZLE",          article:"NOZZLEBITREK", name:"Зчитувач Nozzle BITREK",  currency:"USD", partnerPrice:38.50, retailPrice:46.00, series:"Аксесуари", program:"Форсунки", brand:"Bitrek", spec:"Зчитувач керуючого сигналу форсунок бензинового ДВЗ" },
  // BITREK Датчики
  { mode:"fixed", code:"DS18B20",           article:"DS18B20",           name:"Датчик температури DS18B20",              currency:"USD", partnerPrice:22.50, retailPrice:5.00, series:"Датчики", program:"Аксесуари", brand:"Bitrek", spec:"1-Wire; кабель 1.5м; IP65" },
  { mode:"fixed", code:"BI-BLTCIM",         article:"BI-BLTCIM",         name:"Датчик BI-BLTCIM",                        currency:"USD", partnerPrice:39.60, retailPrice:46.00, series:"Датчики", program:"Аксесуари", brand:"Bitrek", spec:"BLE; Вбудований сенсор температури; сумісний з BI 868/530R/530C" },
  { mode:"fixed", code:"BI-BLTCEM",         article:"BI-BLTCEM",         name:"Датчик BI-BLTCEM",                        currency:"USD", partnerPrice:46.20, retailPrice:52.00, series:"Датчики", program:"Аксесуари", brand:"Bitrek", spec:"BLE; Зовнішній сенсор температури; сумісний з BI 868/530R/530C" },
  { mode:"fixed", code:"BI-BLTHIM",         article:"BI-BLTHIM",         name:"Датчик BI-BLTHIM",                        currency:"USD", partnerPrice:41.80, retailPrice:50.00, series:"Датчики", program:"Аксесуари", brand:"Bitrek", spec:"BLE; Температура та вологість; сумісний з BI 868/530R/530C" },
];

// ── Accessories data ────────────────────────────────────────
const accessories = {
  antennas: [
    { code:"ACC-ANT-GPS",    article:"ANT-GPS-SMA",    name:"GPS антена зовнішня (SMA)",     program:"Антена",  series:"Антени",  brand:"Аксесуар", currency:"USD", partnerPrice:8.50,  retailPrice:12.00, spec:"Магнітна основа, кабель 3м, SMA роз'єм, 3-5dBi" },
    { code:"ACC-ANT-GSM",    article:"ANT-GSM-SMA",    name:"GSM антена зовнішня (SMA)",     program:"Антена",  series:"Антени",  brand:"Аксесуар", currency:"USD", partnerPrice:7.00,  retailPrice:10.00, spec:"2G/3G/4G, магнітна основа, кабель 2м, SMA роз'єм, 3dBi" },
    { code:"ACC-ANT-COMBO",  article:"ANT-COMBO-SMA",  name:"GPS/GSM комбо антена",          program:"Антена",  series:"Антени",  brand:"Аксесуар", currency:"USD", partnerPrice:12.00, retailPrice:16.00, spec:"Комбінована GPS+GSM антена, SMA/SMA, кабель 3м" },
    { code:"ACC-ANT-4G",     article:"ANT-4G-SMA5DBI", name:"Антена 4G LTE (SMA, 5dBi)",    program:"Антена",  series:"Антени",  brand:"Аксесуар", currency:"USD", partnerPrice:9.50,  retailPrice:14.00, spec:"LTE Cat 1/4/M1, SMA, кабель 2м, для FMC/FTC серій" },
  ],
  power: [
    { code:"ACC-CBL-4P",     article:"CBL-4PIN-1M5",   name:"Кабель живлення 4-pin (1.5м)", program:"Кабель",  series:"Живлення",brand:"Аксесуар", currency:"USD", partnerPrice:4.50,  retailPrice:7.00,  spec:"4-pin Molex → голі дроти. Для FMB/FMC серій Teltonika" },
    { code:"ACC-CBL-6P",     article:"CBL-6PIN-1M5",   name:"Кабель живлення 6-pin (1.5м)", program:"Кабель",  series:"Живлення",brand:"Аксесуар", currency:"USD", partnerPrice:5.50,  retailPrice:8.00,  spec:"6-pin Molex → голі дроти. Для FMB серій з IO" },
    { code:"ACC-CBL-OBD",    article:"CBL-OBD2-FMB",   name:"Кабель OBD2 для FMB001/003",   program:"Кабель",  series:"Живлення",brand:"Аксесуар", currency:"USD", partnerPrice:8.00,  retailPrice:12.00, spec:"OBD2-16 → вилка для підключення FMB001/FMB003" },
    { code:"ACC-BAT-1000",   article:"BAT-LION-1000",   name:"Резервна батарея 3.7V 1000mAh",program:"Батарея", series:"Живлення",brand:"Аксесуар", currency:"USD", partnerPrice:9.00,  retailPrice:14.00, spec:"Li-Ion, 3.7V 1000mAh, замінна батарея для трекерів" },
    { code:"ACC-FUSE-2A",    article:"FUSE-2A-HOLD",    name:"Запобіжник 2A + тримач",       program:"Кабель",  series:"Живлення",brand:"Аксесуар", currency:"USD", partnerPrice:1.50,  retailPrice:3.00,  spec:"Стандартний запобіжник для захисту живлення трекера" },
  ],
  sim: [
    { code:'SIM-KS',  name:"SIM-карта Kyivstar 24 МБ Multi",
      spec:"Фізична SIM (nano/micro/standard). Вартість сплачується один раз при замовленні.",
      price_uah:35, url:null, brand:'kyivstar' },
    { code:'SIM-VF',  name:"SIM-карта Vodafone 24 МБ Multi",
      spec:"Фізична SIM (nano/micro/standard). Вартість сплачується один раз при замовленні.",
      price_uah:35, url:null, brand:'vodafone' },
    { code:'SIM-EU',  name:"SIM Roaming (EU+UA)",
      spec:"Фізична Multi-SIM. Вартість сплачується один раз при замовленні. Мінімальне замовлення — 10 шт.",
      price_uah:250, url:null, brand:'roaming' },
  ],
  mount: [
    { code:"ACC-MNT-DIN",  article:"MNT-DIN-RAIL",   name:"Кронштейн DIN для трекера",     program:"Монтаж",  series:"Монтаж",  brand:"Аксесуар", currency:"USD", partnerPrice:5.00, retailPrice:8.00,  spec:"Металевий кронштейн на DIN-рейку для монтажу в щиток" },
    { code:"ACC-MNT-3M",   article:"MNT-3M-VHB",     name:"Двосторонній скотч 3M (5шт)",   program:"Монтаж",  series:"Монтаж",  brand:"Аксесуар", currency:"USD", partnerPrice:3.00, retailPrice:5.00,  spec:"3M VHB, 25x50mm, для монтажу трекера на кузов" },
    { code:"ACC-MNT-HS",   article:"MNT-HEATSHRINK", name:"Термоусадка + стяжки (набір)",  program:"Монтаж",  series:"Монтаж",  brand:"Аксесуар", currency:"USD", partnerPrice:4.00, retailPrice:6.00,  spec:"Асорті термоусадки 2-6mm + 50шт кабельних стяжок" },
    { code:"ACC-MNT-BOX",  article:"MNT-BOX-IP67",   name:"Коробка з'єднань IP67",         program:"Монтаж",  series:"Монтаж",  brand:"Аксесуар", currency:"USD", partnerPrice:6.00, retailPrice:9.00,  spec:"Герметична коробка для з'єднань проводів поза кабіною" },
  ]
};

// ── Extra equipment data ─────────────────────────────────────
const extraEquipment = {
  can: [
    { code:'EXT-CANCTL',    name:"CAN-CONTROL",              program:"CAN", series:"CAN", brand:"Extra", currency:"USD", partnerPrice:102.96, retailPrice:85.80,   spec:"Модуль зчитування CAN-даних; підключення до шини CAN" },
    { code:'EXT-CANCTL-D',  name:"CAN-CONTROL + DTC*",       program:"CAN", series:"CAN", brand:"Extra", currency:"USD", partnerPrice:118.80, retailPrice:99.00,   spec:"CAN-CONTROL з читанням кодів несправностей DTC" },
    { code:'EXT-CANCTL-I',  name:"CAN-CONTROL + IMMO**",     program:"CAN", series:"CAN", brand:"Extra", currency:"USD", partnerPrice:145.73, retailPrice:121.44,  spec:"CAN-CONTROL з функцією іммобілайзера IMMO" },
    { code:'EXT-CANCTL-DI', name:"CAN-CONTROL + DTC + IMMO", program:"CAN", series:"CAN", brand:"Extra", currency:"USD", partnerPrice:163.15, retailPrice:135.96,  spec:"CAN-CONTROL повна версія: DTC + іммобілайзер" },
    { code:'EXT-ALC300',    name:"ALL-CAN300",                program:"CAN", series:"CAN", brand:"Extra", currency:"USD", partnerPrice:137.81, retailPrice:114.84,  spec:"Універсальний CAN-зчитувач; підтримка 2600+ моделей авто та вантажівок" },
    { code:'EXT-LVC200',    name:"LV-CAN200",                 program:"CAN", series:"CAN", brand:"Extra", currency:"USD", partnerPrice:69.70,  retailPrice:58.08,   spec:"CAN зчитувач для легкових авто; підтримка 800+ моделей; RS232/RS485" },
    { code:'EXT-LVC200D',   name:"LV-CAN200 + DTC",          program:"CAN", series:"CAN", brand:"Extra", currency:"USD", partnerPrice:80.78,  retailPrice:67.32,   spec:"LV-CAN200 з читанням кодів несправностей DTC" },
    { code:'EXT-ECAN02',    name:"ECAN02",                    program:"CAN", series:"CAN", brand:"Extra", currency:"USD", partnerPrice:23.76,  retailPrice:19.80,   spec:"Компактний адаптер CAN-шини для вантажівок Euro 6 FMS" },
  ],
  sensors: [
    { code:'EXT-EYEBCN',    name:"EYE BEACON",               program:"SENSORS", series:"SENSORS", brand:"Extra", currency:"USD", partnerPrice:23.76,  retailPrice:19.80,   spec:"BLE-маяк для відстеження активів; BLE 5.0; IP67" },
    { code:'EXT-EYESNSR',   name:"EYE SENSOR",               program:"SENSORS", series:"SENSORS", brand:"Extra", currency:"USD", partnerPrice:30.10,  retailPrice:25.08,   spec:"BLE сенсор температури/вологості; BLE 5.0; IP67" },
  ],
  eyeSensors: [
    { code:'EXT-EYEBATX',   name:"EYE BEACON ATEX",          program:"EYE SENSORS", series:"EYE SENSORS", brand:"Extra", currency:"USD", partnerPrice:34.85,  retailPrice:29.04,   spec:"EYE BEACON для вибухонебезпечних зон; ATEX/IECEx сертифікований" },
    { code:'EXT-EYESATX',   name:"EYE SENSOR ATEX",          program:"EYE SENSORS", series:"EYE SENSORS", brand:"Extra", currency:"USD", partnerPrice:41.18,  retailPrice:34.32,   spec:"EYE SENSOR для вибухонебезпечних зон; ATEX/IECEx сертифікований" },
    { code:'EXT-EYESE12',   name:"EYE SENSOR EN12830",       program:"EYE SENSORS", series:"EYE SENSORS", brand:"Extra", currency:"USD", partnerPrice:36.43,  retailPrice:30.36,   spec:"EYE SENSOR сертифікований EN12830 для харчової промисловості" },
  ],
  rfid: [
    { code:'EXT-IBTN',   name:"Dallas iButton DS1990A",        program:"RFID", series:"RFID", brand:"Extra", currency:"USD", partnerPrice:2.50,  retailPrice:4.00,   spec:"1-Wire RFID ключ ідентифікації водія; сталь нержавіюча; IP67" },
    { code:'EXT-IBTRD',  name:"Зчитувач iButton 1-Wire",       program:"RFID", series:"RFID", brand:"Extra", currency:"USD", partnerPrice:6.00,  retailPrice:9.00,   spec:"Монтажний зчитувач Dallas iButton; IP54; кабель 1м; для FMB/FMC серій" },
    { code:'EXT-RFIDM',  name:"RFID карта Mifare 13.56MHz",    program:"RFID", series:"RFID", brand:"Extra", currency:"USD", partnerPrice:1.50,  retailPrice:3.00,   spec:"Пасивна картка для ідентифікації; 13.56 MHz; сумісна з RFID зчитувачами Teltonika" },
    { code:'EXT-TST100', name:"Teltonika TST100",               program:"RFID", series:"RFID", brand:"Extra", currency:"USD", partnerPrice:24.00, retailPrice:34.00,  spec:"Bluetooth + RFID зчитувач для ідентифікації водія; BLE 4.0; для FMB/FMC серій", url:"https://teltonika-gps.com/products/accessories/tst100" },
    { code:'EXT-TST200', name:"Teltonika TST200",               program:"RFID", series:"RFID", brand:"Extra", currency:"USD", partnerPrice:18.00, retailPrice:26.00,  spec:"Компактний RFID зчитувач; 125 kHz EM/RFID; IP54; кабель 1м; для FMB серій", url:"https://teltonika-gps.com/products/accessories/tst200" },
    { code:'EXT-RFID25', name:"RFID брелок 125kHz EM4100",     program:"RFID", series:"RFID", brand:"Extra", currency:"USD", partnerPrice:1.20,  retailPrice:2.50,   spec:"Пасивний RFID брелок; 125 kHz EM4100; для зчитувачів Teltonika TST100/TST200" },
  ],
  sos: [
    { code:'EXT-SOS1',   name:"Кнопка SOS (1 канал)",          program:"SOS",  series:"SOS",  brand:"Extra", currency:"USD", partnerPrice:5.00,  retailPrice:8.00,   spec:"Захищена кнопка тривоги; NO/NC контакти; IP54; монтаж на панель" },
    { code:'EXT-SOS2',   name:"Кнопка паніки (2 канали)",      program:"SOS",  series:"SOS",  brand:"Extra", currency:"USD", partnerPrice:9.00,  retailPrice:14.00,  spec:"Подвійна кнопка тривоги + іммобілайзер; LED індикатор; IP54" },
    { code:'EXT-BZR',    name:"Зуммер / Buzzer 12V",           program:"SOS",  series:"SOS",  brand:"Extra", currency:"USD", partnerPrice:4.00,  retailPrice:6.00,   spec:"Звуковий сигналізатор 12/24V; 95dB; монтаж поверхневий" },
    { code:'EXT-RELAY',  article:"PPEX00003260", name:"Реле 40A (1 канал)",            program:"SOS",  series:"SOS",  brand:"Extra", currency:"USD", partnerPrice:5.50,  retailPrice:8.00,   spec:"Реле для іммобілайзера / блокування двигуна; 12/24V 40A; IP54" },
    { code:'EXT-TILT',   name:"Датчик нахилу/руху",            program:"SOS",  series:"SOS",  brand:"Extra", currency:"USD", partnerPrice:8.00,  retailPrice:12.00,  spec:"Цифровий датчик нахилу та вібрації; 3-осьовий акселерометр; підключення до DIN трекера" },
  ],

  software: [
    { name:"Navixy Platform",             spec:"Платформа GPS-моніторингу; REST API; хмарна або on-premise",                  price_usd:null,  rrp_usd:null,  url:"https://navixy.com", note:"ціна за запитом" },
    { name:"Teltonika Configurator",      spec:"Безкоштовне ПЗ для налаштування трекерів Teltonika через USB/BT",             price_usd:0,     rrp_usd:0,     url:"https://wiki.teltonika-gps.com/view/Teltonika_Configurator" },
    { name:"FOTA WEB (Teltonika)",        spec:"Хмарне оновлення прошивки OTA для пристроїв Teltonika",                       price_usd:0,     rrp_usd:0,     url:"https://fota.teltonika-gps.com", note:"безкоштовно" },
  ]
};

// ════════════════════════════════════════════════════════
//  RATES
// ════════════════════════════════════════════════════════

const SECTION_LABELS = {
  overview:'Огляд', teltonika:'Teltonika', bitrek:'Bitrek',
  accessories:'Аксесуари та обладнання', extra:'Додаткове обладнання',
  tariffs:'Тарифи', install:'Монтаж та сервіс',
  drp:'ДРП — Датчики палива', configurator:'Конфігуратор',
  navixy:'Navixy Platform',
  wiki:'Wiki / База знань', contacts:'Контакти', privacy:'Політика конфіденційності',
  kits:'Готові рішення'
};

const PROMO_CODES = new Set(['FMB920']);
// Коди нових товарів — значок NEW
const NEW_CODES = new Set(['ATC700-P', 'FTC927', 'BI 410 TREK']);

const TARIFFS_DATA = [
  { code:'TAR-BASE',    name:'Base 300',     price:300,  period:'міс', spec:'300 МБ трафік, Kyivstar/Vodafone, GPS тільки трафік' },
  { code:'TAR-FUEL',    name:'Fuel-Can 330', price:330,  period:'міс', spec:'330 МБ трафік + CAN-дані, ДВРП підтримка' },
  { code:'TAR-RENT',    name:'Rent 460',     price:460,  period:'міс', spec:'460 МБ, 2 SIM + роумінг EU, оренда трекера включена' },
  { code:'TAR-PERS',    name:'Personal 250', price:250,  period:'міс', spec:'250 МБ, базовий трекінг, 1 SIM. Мобільний додаток X-GPS Tracker.',
    appIos:'https://apps.apple.com/us/app/x-gps-tracker/id1612047534',
    appAndroid:'https://play.google.com/store/apps/details?id=com.navixy.xgps.tracker' },
  { code:'TAR-ROAM',    name:'Roaming 400',  price:400,  period:'міс', spec:'Тарифний план "Україна 30" + Країни ЄС. Роумінг EU + UA.' },
  { code:'TAR-TIPS',    name:'Tipster 140',  price:140,  period:'міс', spec:'140 МБ, TIPSTER фіксований IP, M2M' },
  { code:'TAR-HOLD',    name:'Hold 90',      price:90,   period:'міс', spec:'Режим утримання, мінімальний трафік, без авто-оновлень' },
];


const SECTION_LABELS = {
  overview:'Огляд', teltonika:'Teltonika', bitrek:'Bitrek',
  accessories:'Аксесуари та обладнання', extra:'Додаткове обладнання',
  tariffs:'Тарифи', install:'Монтаж та сервіс',
  drp:'ДРП — Датчики палива', configurator:'Конфігуратор',
  navixy:'Navixy Platform',
  wiki:'Wiki / База знань', contacts:'Контакти', privacy:'Політика конфіденційності',
  kits:'Готові рішення'
};
