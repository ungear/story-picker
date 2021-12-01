(function(){

  
  const STORIES = [
    { title: "Мосты и каналы", img: "https://avatars.yandex.net/get-music-content/4388221/5645777d.a.18127359-1/200x200" },
    { title: "Театр", img: "https://avatars.yandex.net/get-music-content/4387391/b9b3d50c.a.16626803-1/200x200" },
    { title: "Камчатка", img: "https://avatars.yandex.net/get-music-content/142001/1f62e1bc.a.8164713-1/200x200", },
    { title: "Великие люди. Юрий Гагарин", img: "https://avatars.yandex.net/get-music-content/176019/d9670796.a.8164712-1/200x200", },
    { title: "Волга", img: "https://avatars.yandex.net/get-music-content/142001/f6f045bb.a.8164710-1/200x200", },
    { title: "Байкал", img: "https://avatars.yandex.net/get-music-content/192707/06627a7f.a.8164709-1/200x200", },
    { title: "Путешествие в Мир головных уборов", img: "https://avatars.yandex.net/get-music-content/118603/5113f1f6.a.8165630-1/200x200",},
    { title: "Безопасность", img: "https://avatars.yandex.net/get-music-content/113160/dac4c332.a.8164711-1/200x200",},
    { title: "Аудиоэнциклопедия. Динозавры — настоящие монстры", img: "https://avatars.yandex.net/get-music-content/99892/94abff59.a.8025808-1/200x200",},
    { title: "Древний Китай-2", img: "https://avatars.yandex.net/get-music-content/98892/c597c366.a.8025807-1/200x200",},
    { title: "Аудиоэнциклопедия. Чистая электроэнергетика", img: "https://avatars.yandex.net/get-music-content/142001/2a355d5f.a.8025806-1/200x200",},
    { title: "Аудиоэнциклопедия. Полёт на Марс", img: "https://avatars.yandex.net/get-music-content/142001/69af6d81.a.8025786-1/200x200",},
    { title: "Аудиоэнциклопедия. Замки", img: "https://avatars.yandex.net/get-music-content/142001/5232b3b9.a.8025378-1/200x200",},
    { title: "Аудиоэнциклопедия. История денег (Банкноты)", img: "https://avatars.yandex.net/get-music-content/142001/e22a6097.a.8025310-1/200x200",},
    { title: "Аудиоэнциклопедия. Третьяковская галерея", img: "https://avatars.yandex.net/get-music-content/142001/28651d01.a.8025187-1/200x200",},
    { title: "Аудиоэнциклопедия. История денег (Монеты)", img: "https://avatars.yandex.net/get-music-content/142001/dbeb5514.a.8025139-1/200x200",},
    { title: "Аудиоэнциклопедия. Космодромы России", img: "https://avatars.yandex.net/get-music-content/139444/5dd00148.a.8025785-1/200x200",},
    { title: "Аудиоэнциклопедия. Роботы", img: "https://avatars.yandex.net/get-music-content/103235/91fc55b9.a.8025779-1/200x200",},
    { title: "Аудиоэнциклопедия. Животные Сибири", img: "https://avatars.yandex.net/get-music-content/193823/d5767919.a.4518415-1/200x200",},
    { title: "Аудиоэнциклопедия. Животные Южной Америки", img: "https://avatars.yandex.net/get-music-content/97284/67dc1bdf.a.4518406-1/200x200",},
    { title: "Аудиоэнциклопедия. Динозавры и другие пресмыкающиеся", img: "https://avatars.yandex.net/get-music-content/118603/918303b2.a.4390062-1/200x200",},
    { title: "Аудиоэнциклопедия. Домашние животные", img: "https://avatars.yandex.net/get-music-content/99892/054536fa.a.4390061-1/200x200",},
    { title: "Аудиоэнциклопедия. Дикие животные", img: "https://avatars.yandex.net/get-music-content/149669/45948c5d.a.4390060-1/200x200",},
    { title: "Аудиоэнциклопедия. Царство растений", img: "https://avatars.yandex.net/get-music-content/149669/7eff2e9a.a.4390059-1/200x200"},
    { title: "Мифы древней Греции. Подвиги Геракла. Часть 1", img: "https://avatars.yandex.net/get-music-content/149669/9e0bc30f.a.8165638-1/200x200",},
    { title: "Мифы древней Греции. Миф о Персее. Тезей", img: "https://avatars.yandex.net/get-music-content/108289/5c9e744e.a.8165637-1/200x200",},
    { title: "Мифы древней Греции. Дедал и Икар. Орфей", img: "https://avatars.yandex.net/get-music-content/139444/c349d804.a.8165636-1/200x200",},
    { title: "Аудиоэнциклопедия. Древний Китай", img: "https://avatars.yandex.net/get-music-content/176019/2c5e1735.a.8025792-1/200x200",},
    { title: "Аудиоэнциклопедия. Животные Австралии", img: "https://avatars.yandex.net/get-music-content/114728/10175397.a.4518284-1/200x200",},
    { title: "Аудиоэнциклопедия. Животные Африки", img: "https://avatars.yandex.net/get-music-content/142001/fdb08697.a.4517913-1/200x200",},
    { title: "Аудиоэнциклопедия. Знакомство с театром", img: "https://avatars.yandex.net/get-music-content/38044/8760a824.a.4517911-1/200x200",},
    { title: "Мифы древней Греции. Путешествие Аргонавтов", img: "https://avatars.yandex.net/get-music-content/149669/63b8196d.a.8165641-1/200x200",},
    { title: "Аудиоэнциклопедия. Занимаемся спортом", img: "https://avatars.yandex.net/get-music-content/142001/4f9d9541.a.8036079-1/200x200",},
    { title: "Аудиоэнциклопедия. Увлекательная химия", img: "https://avatars.yandex.net/get-music-content/139444/f1bdaaf2.a.8036090-1/200x200",},
    { title: "Аудиоэнциклопедия. Увлекательная физика", img: "https://avatars.yandex.net/get-music-content/118603/b9a3cb45.a.8036086-1/200x200",},
    { title: "Аудиоэнциклопедия. Защитники земли русской", img: "https://avatars.yandex.net/get-music-content/118603/b2f18cbf.a.8035103-1/200x200",},
    { title: "Аудиоэнциклопедия. Великие люди. А.С. Пушкин", img: "https://avatars.yandex.net/get-music-content/99892/3bfeffb1.a.8026003-1/200x200",},
    { title: "Аудиоэнциклопедия. Городские птицы", img: "https://avatars.yandex.net/get-music-content/108289/a5668b3d.a.8025909-1/200x200",},
    { title: "Аудиоэнциклопедия. Полезные ископаемые", img: "https://avatars.yandex.net/get-music-content/118603/91a9e80b.a.8036078-1/200x200",},
    { title: "Аудиоэнциклопедия. Замечательные профессии", img: "https://avatars.yandex.net/get-music-content/103235/baad7655.a.8035565-1/200x200",},
    { title: "Аудиоэнциклопедия. Осьминоги и другие моллюски", img: "https://avatars.yandex.net/get-music-content/176019/11bbfa54.a.8035501-1/200x200",},
    { title: "Аудиоэнциклопедия. Наша страна Россия", img: "https://avatars.yandex.net/get-music-content/108289/ce5944bc.a.8026070-1/200x200",},
    { title: "Аудиоэнциклопедия. Если хочешь быть здоров", img: "https://avatars.yandex.net/get-music-content/113160/4fc3da44.a.8025841-1/200x200",},
    { title: "Аудиоэнциклопедия. Великие люди: А. В. Суворов", img: "https://avatars.yandex.net/get-music-content/99892/9f8424c8.a.8025827-1/200x200",},
    { title: "Аудиоэнциклопедия. Путешествие в Каменный век", img: "https://avatars.yandex.net/get-music-content/149669/cdd66bc1.a.8035337-1/200x200",},
    { title: "Аудиоэнциклопедия. Великая отечественная война", img: "https://avatars.yandex.net/get-music-content/139444/4ca61404.a.8034598-1/200x200",},
    { title: "Аудиоэнциклопедия. Удивительные рыбы", img: "https://avatars.yandex.net/get-music-content/139444/efc2b141.a.8035867-1/200x200",},
    { title: "Аудиоэнциклопедия. Удивительные птицы", img: "https://avatars.yandex.net/get-music-content/103235/bc9501dc.a.8035599-1/200x200",},
    { title: "Аудиоэнциклопедия. Как себя вести", img: "https://avatars.yandex.net/get-music-content/108289/be371739.a.8035537-1/200x200",},
    { title: "Аудиоэнциклопедия. Россия в 1812 году", img: "https://avatars.yandex.net/get-music-content/103235/c7d5650b.a.8025138-1/200x200",},
    { title: "Аудиоэнциклопедия. Древний Египет", img: "https://avatars.yandex.net/get-music-content/142001/b9ca27e2.a.8025840-1/200x200",},
    { title: "Аудиоэнциклопедия. Самолёты и авиация", img: "https://avatars.yandex.net/get-music-content/118603/5d8dbd02.a.8035893-1/200x200",},
    { title: "Аудиоэнциклопедия. Полёты в космос", img: "https://avatars.yandex.net/get-music-content/176019/3d7efd63.a.8035549-1/200x200",},
    { title: "Аудиоэнциклопедия. Леса России", img: "https://avatars.yandex.net/get-music-content/108289/64df34b8.a.8035511-1/200x200",},
    { title: "Аудиоэнциклопедия. Народные инструменты", img: "https://avatars.yandex.net/get-music-content/95061/aa54f237.a.8035243-1/200x200",},
    { title: "Аудиоэнциклопедия. Как устроен человек", img: "https://avatars.yandex.net/get-music-content/142001/fec061b8.a.8036091-1/200x200",},
    { title: "Аудиоэнциклопедия. Корабли и мореплавание", img: "https://avatars.yandex.net/get-music-content/139444/1a04d718.a.8035514-1/200x200",},
    { title: "Аудиоэнциклопедия. Московский Кремль", img: "https://avatars.yandex.net/get-music-content/142001/df971f1c.a.8035268-1/200x200",},
    { title: "Мифы древней Греции. Подвиги Геракла, Часть 2", img: "https://avatars.yandex.net/get-music-content/193823/7e8a97d7.a.8165640-1/200x200",},
    { title: "Аудиоэнциклопедия. Путешествия растений", img: "https://avatars.yandex.net/get-music-content/108289/a0936867.a.8035882-1/200x200",},
    { title: "Аудиоэнциклопедия. Великие путешествия", img: "https://avatars.yandex.net/get-music-content/149669/c69f836c.a.8035876-1/200x200",},
    { title: "Аудиоэнциклопедия. Календарь природы", img: "https://avatars.yandex.net/get-music-content/149669/d03bb3ab.a.8035254-1/200x200",},
    { title: "Аудиоэнциклопедия. Мы сочиняем стихи", img: "https://avatars.yandex.net/get-music-content/95061/b012bef4.a.8036083-1/200x200",},
    { title: "Аудиоэнциклопедия. Увлекательная астрономия", img: "https://avatars.yandex.net/get-music-content/103235/e59a9443.a.8025791-1/200x200",},
    { title: "Аудиоэнциклопедия. Удивительные насекомые", img: "https://avatars.yandex.net/get-music-content/139444/fb38cb44.a.8035534-1/200x200",},
    { title: "Аудиоэнциклопедия. Планета Земля", img: "https://avatars.yandex.net/get-music-content/176019/aeb1c538.a.8035104-1/200x200",},
    { title: "Аудиоэнциклопедия. Симфонический оркестр", img: "https://avatars.yandex.net/get-music-content/139444/5243b345.a.8036019-1/200x200",},
    { title: "Аудиоэнциклопедия. Лесные птицы", img: "https://avatars.yandex.net/get-music-content/103235/91d931e9.a.8035557-1/200x200",},
    { title: "Аудиоэнциклопедия. Обитатели океанов", img: "https://avatars.yandex.net/get-music-content/142001/6e7f57c4.a.8035535-1/200x200",},
    { title: "Аудиоэнциклопедия. Автомобили и транспорт", img: "https://avatars.yandex.net/get-music-content/99892/27bc9dc5.a.4390058-1/200x200",},
  ];

  const LIST_LENGTH = 5;

  const randomeItems = getRandomItems();
  renderList(randomeItems);
  document.getElementById('list').addEventListener('click', onListClick)

  function onListClick(event){
    if(!event.target.classList.contains('js-list-item')) return;
    event.target.remove()
  }

  function renderList(items){
    const listMarkup = items
      .map(x => {
        return `<div class="list__item js-list-item">${x.title}</div>`
      })
      .join('')

    document.getElementById('list').innerHTML = listMarkup;
  }

  function getRandomItems(){
    return Array(LIST_LENGTH)
      .fill(null)
      .map(x => getRandomInt(STORIES.length))
      .map(index => STORIES[index])
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
})()