const API_KEY = "e74229580e4579c4918d05f08e24edf0";
const container = document.getElementById("news-card-container");

newsdata={
    "pagination": {
        "limit": 25,
        "offset": 0,
        "count": 25,
        "total": 10000
    },
    "data": [
        {
            "author": "J.C",
            "title": "Desmantelan dos ‘granjas humanas’ en España",
            "description": "La Guardia Civil Española desmanteló este sábado una banda criminal que mantenía dos «granjas humanas» con siete personas secuestradas, a quienes robaban y endeudaban para costear sus lujosas vidas. En la ciudad de Valencia, las autoridades arrestaron a dos hombres&#8230;Read more &#8250;La entrada Desmantelan dos &#8216;granjas humanas&#8217; en España se publicó primero en Remolacha - Noticias Republica Dominicana.",
            "url": "https://remolacha.net/2024/10/desmantelan-dos-granjas-humanas-en-espana/",
            "source": "Remolacha.net",
            "image": null,
            "category": "general",
            "language": "es",
            "country": "do",
            "published_at": "2024-10-19T17:03:55+00:00"
        },
        {
            "author": "Katarina Petrović",
            "title": "Provalili u sedam kuća u Aleskincu i ukrali novac: Uhapšena dvojica muškaraca iz Ražnja",
            "description": "Nakon što je obio sedam kuća u Aleksincu i otuđio veću količinu novca, policija je uhapsila 47-godišnjeg muškarca iz Ražnja.",
            "url": "https://www.telegraf.rs/vesti/srbija/3985211-provalili-u-sedam-kuca-u-aleskincu-i-ukrali-novac-uhapsena-dvojica-muskaraca-iz-raznja",
            "source": "Telegraf",
            "image": "https://xdn.tf.rs/2023/12/24/policija-hapsenje-lisice-rotacija.jpg",
            "category": "general",
            "language": "en",
            "country": "rs",
            "published_at": "2024-10-19T17:03:47+00:00"
        },
        {
            "author": null,
            "title": "Galatasaray'da kırmızı kart isyanı!",
            "description": "Galatasaray, Antalyaspor maçının 41. dakikasında kırmızı kart itirazında bulundu. Galatasaray",
            "url": "https://www.sporx.com/futbol/superlig/galatasaray/galatasaray-da-kirmizi-kart-isyani-SXHBQ1089276SXQ?utm_source=icerikPaylas",
            "source": "sporx",
            "image": null,
            "category": "general",
            "language": "en",
            "country": "tr",
            "published_at": "2024-10-19T17:03:43+00:00"
        },
        {
            "author": "Katia Migliore",
            "title": "I giudici italiani aboliscono tutti i rimpatri",
            "description": "&#160; La sentenza si basa sulla pronuncia CGUE del 4 ottobre che a sua volta si fonda sulla Direttiva UE : . [&#8230;]L'articolo I giudici italiani aboliscono tutti i rimpatri proviene da Come Don Chisciotte.",
            "url": "https://comedonchisciotte.org/i-giudici-italiani-aboliscono-tutti-i-rimpatri/",
            "source": "comedonchisciotte",
            "image": null,
            "category": "general",
            "language": "it",
            "country": "it",
            "published_at": "2024-10-19T17:03:40+00:00"
        },
        {
            "author": "El Nacional",
            "title": "Cicpc detuvo al acusado del asesinato de la periodista Mercedes Herrera",
            "description": "El Cuerpo de Investigaciones Científicas, Penales y Criminalísticas (Cicpc) anunció la captura de Neiquel Gutiérrez, señalado junto con su pareja Franyelin Ortiz, del asesinato de la periodista Mercedes Herrera, en Altamira. Douglas Rico, director del cuerpo policial, compartió este sábado la información en su cuenta en Instagram. &#160; Ver esta publicación en Instagram &#160; Una [&#8230;]La entrada Cicpc detuvo al acusado del asesinato de la periodista Mercedes Herrera se publicó primero en EL NACIONAL.",
            "url": "https://www.elnacional.com/venezuela/cicpc-detuvo-al-acusado-del-asesinato-de-la-periodista-mercedes-herrera/",
            "source": "el-nacional",
            "image": null,
            "category": "general",
            "language": "es",
            "country": "es",
            "published_at": "2024-10-19T17:03:35+00:00"
        },
        {
            "author": "Luis Rabionet",
            "title": "‘La Huésped de la Casa Amarilla’: la oscura historia de la antropóloga nazi que buscó a canarios de raza aria",
            "description": "La nueva novela del escritor tinerfeño Jorge Laguna indaga en las investigaciones raciales de los alemanes en Canarias durante la Segunda Guerra Mundial",
            "url": "https://diariodeavisos.elespanol.com/2024/10/la-huesped-de-la-casa-amarilla-la-oscura-historia-de-la-antropologa-nazi-que-busco-a-canarios-de-raza-aria/",
            "source": "diariodeavisos",
            "image": null,
            "category": "general",
            "language": "es",
            "country": "es",
            "published_at": "2024-10-19T17:03:27+00:00"
        },
        {
            "author": "Andrew Hughes",
            "title": "NFL star denies requesting a trade, announces attendance at Alabama-Tennessee game",
            "description": "One NFL star doesn't want out of his current situation, but does want to catch Alabama-Tennessee in Knoxville.",
            "url": "https://www.sportingnews.com/us/ncaa-football/sec/news/nfl-star-denies-requesting-trade-announces-attendance-alabama-tennessee-game/d1353e8b1f7136ff0f4b99fe",
            "source": "Sporting News",
            "image": "https://ng-sportingnews.com/s3/files/styles/crop_style_16_9_desktop/s3/2024-10/USATSI_21383607.jpg?h=e0e1f3d4&amp;itok=Ab0O7BY5",
            "category": "sports",
            "language": "en",
            "country": "us",
            "published_at": "2024-10-19T17:03:21+00:00"
        },
        {
            "author": "Sahil Goswami",
            "title": "Randi Mahomes’ Daughter Gives Tribute to Patrick Mahomes’ $182,000,000 Team Amid Family Crisis",
            "description": "Randi Mah͏ome͏s, the mother of ͏N͏FL superstar Patrick Mahom͏es, often shares glimpses of her͏ family&#8217;s life on social me͏dia. It&#8217;s not unknown how Mahomes&#8217; little sister Mia Randall, is quickly gaining recognition as a talented young ͏athlete. With her gro͏wing pass͏ion, Mia͏,͏ Patrick’s half͏-sis͏te͏r͏, is ͏emergi͏ng as ͏a tennis sta͏r in ͏the making, reflecting t͏he [&#8230;]The post Randi Mahomes’ Daughter Gives Tribute to Patrick Mahomes’ $182,000,000 Team Amid Family Crisis appeared first on EssentiallySports.",
            "url": "https://www.essentiallysports.com/nfl-active-news-randi-mahomes-daughter-gives-tribute-to-patrick-mahomes-one-eighty-two-million-dollar-team-amid-family-crisis/",
            "source": "Essentially Sports",
            "image": "https://image-cdn.essentiallysports.com/wp-content/uploads/Randi-Mahomes-source-Instagram-560x315.jpg",
            "category": "sports",
            "language": "en",
            "country": "us",
            "published_at": "2024-10-19T17:03:19+00:00"
        },
        {
            "author": "TT",
            "title": "Flera nya anfall mot södra Beirut",
            "description": "Israel har genomfört minst tio flygattacker mot den södra Beirutförorten al-Dahiya under dagen, rapporterar AP. Ett antal av Hizbollahs vapenlager och ett underrättelsecentrum uppges ha varit mål för attackerna, meddelar Israels militär i ett uttalande.",
            "url": "https://www.sydsvenskan.se/artikel/flera-nya-anfall-mot-sodra-beirut/",
            "source": "Sydsvenskan",
            "image": "https://static.bonniernews.se/bildix/api/images/0b4458df-0caa-485f-80b7-a5f883ad41fd.jpeg",
            "category": "general",
            "language": "sv",
            "country": "se",
            "published_at": "2024-10-19T17:03:07+00:00"
        },
        {
            "author": "Oska",
            "title": "Victor Boniface scores match-winner for Bayer Leverkusen despite early penalty miss",
            "description": "Super Eagles striker Victor Boniface stole the spotlight in Bayer Leverkusen’s 2-1 victory over Eintracht Frankfurt in the Bundesliga on Saturday, netting the winning goal after recovering from a missed penalty. Boniface, who has now scored seven goals this season, made amends for his earlier miss by heading in the decisive goal in the 71st &#8230;The post Victor Boniface scores match-winner for Bayer Leverkusen despite early penalty miss appeared first on SportsRation.",
            "url": "https://sportsration.com/victor-boniface-scores-match-winner-for-bayer-leverkusen-despite-early-penalty-miss/",
            "source": "Sportsration: Nigeria Soccer | World Sports",
            "image": null,
            "category": "sports",
            "language": "en",
            "country": "us",
            "published_at": "2024-10-19T17:03:02+00:00"
        },
        {
            "author": null,
            "title": "Fußball-Bundesliga: Rose verzichtet auf Klopps Hilfe: „Der braucht seine Ruhe“",
            "description": "Nach dem Bundesliga-Sieg in Mainz will RB Leipzig in der Königsklasse gegen Liverpool erstmals punkten. Auf die Liverpool-Expertise von Jürgen Klopp will Trainer Rose aber nicht zurückgreifen.",
            "url": "https://www.tagesspiegel.de/sport/fussball-bundesliga-rose-verzichtet-auf-klopps-hilfe-der-braucht-seine-ruhe-12564068.html",
            "source": "pnn",
            "image": "https://www.tagesspiegel.de/sport/images/fsv-mainz-05-rb-leipzig4/alternates/BASE_4_3_W220/fsv-mainz-05-rb-leipzig.jpeg",
            "category": "general",
            "language": "de",
            "country": "de",
            "published_at": "2024-10-19T17:03:01+00:00"
        },
        {
            "author": "Redazione",
            "title": "Estrazioni Lotto, SuperEnalotto e 10eLotto oggi sabato 19 ottobre 2024: numeri vincenti e quote",
            "description": "Le estrazioni di Lotto, SuperEnalotto e 10eLotto di oggi, sabato 19 ottobre 2024, sono in diretta su Fanpage.it dalle 20.00 con vincite e quote, assieme ai numeri Oro, Doppio Oro ed Extra del 10eLotto. Per chi vince al SuperEnalotto è in palio un jackpot da 21,4 milioni di euro.Continua a leggere",
            "url": "https://www.fanpage.it/attualita/estrazioni-lotto-superenalotto-e-10elotto-oggi-sabato-19-ottobre-2024-numeri-vincenti-e-quote/",
            "source": "fanpage",
            "image": null,
            "category": "general",
            "language": "it",
            "country": "it",
            "published_at": "2024-10-19T17:02:57+00:00"
        },
        {
            "author": "Admin",
            "title": "Desmantelado laboratorio de cocaína en Medellín",
            "description": "Medellín fue escenario de un importante operativo policial que resultó en el desmantelamiento de un laboratorio de clorhidrato de cocaínaThe post Desmantelado laboratorio de cocaína en Medellín first appeared on EL PAÍS VALLENATO.",
            "url": "https://www.elpaisvallenato.com/2024/10/19/desmantelado-laboratorio-de-cocaina-en-medellin/?utm_source=rss&utm_medium=rss&utm_campaign=desmantelado-laboratorio-de-cocaina-en-medellin",
            "source": "elpaisvallenato",
            "image": null,
            "category": "general",
            "language": "es",
            "country": "es",
            "published_at": "2024-10-19T17:02:46+00:00"
        },
        {
            "author": "Khadre SAKHO",
            "title": "Lutte contre les inondations : « La compétence existe pour prendre en charge la question… » (Expert)",
            "description": "Ce samedi, d&#8217;éminentes personnalités du secteur de l’eau et de l’assainissement ont animé, lors de la journée de l’excellence des Alumni du 2iE organisée par l’Association des Sénégalais diplômés de l’Institut International d’Ingénierie de l’Eau et de l’Environnement (ASD-2iE), un panel sur les changements climatiques, intitulé « Les changements climatiques causant les inondations dans le pays ». [&#8230;]",
            "url": "https://senego.com/lutte-contre-les-inondations-la-competence-existe-pour-prendre-en-charge-la-question-expert_1758668.html",
            "source": "Senego",
            "image": null,
            "category": "general",
            "language": "fr",
            "country": "sn",
            "published_at": "2024-10-19T17:02:45+00:00"
        },
        {
            "author": "News.com.au",
            "title": "Two competitors die in one day during Triathlon World Championships",
            "description": "There has been shock and anger after two triathletes died while competing at the sport’s World Championships in Spain.",
            "url": "https://nypost.com/2024/10/19/world-news/two-competitors-die-in-one-day-during-triathlon-world-championships/",
            "source": "Post",
            "image": "https://nypost.com/wp-content%2Fuploads%2Fsites%2F2%2F2024%2F10%2Fnewspress-collage-pw1wba9q4-1729349800712.jpg?quality%3D90%26strip%3Dall%261729335431",
            "category": "general",
            "language": "en",
            "country": "zm",
            "published_at": "2024-10-19T17:02:40+00:00"
        },
        {
            "author": null,
            "title": "Conflit au Proche-Orient: Plus de 3000 personnes manifestent contre Israël",
            "description": "C’est probablement l’une des plus importantes manifestations à Genève depuis le début des protestations en octobre 2023.",
            "url": "https://www.tdg.ch/proche-orient-plus-de-3000-personnes-manifestent-contre-israel-933247966810",
            "source": "Tribune de Geneve",
            "image": "https://cdn.unitycms.io/images/C3aU_rvPq8TANwRje5HmLL.jpg",
            "category": "general",
            "language": "fr",
            "country": "ch",
            "published_at": "2024-10-19T17:02:40+00:00"
        },
        {
            "author": "Redacción EC",
            "title": "Real Madrid vs Celta en vivo por internet: a qué hora juegan y por qué canal lo transmiten",
            "description": "Real Madrid vs Celta en vivo: fecha, hora y canal para ver partido por LaLiga | Real Madrid vs Celta en vivo se enfrentan por la fecha 10 de LaLiga EA Sports. Sigue todos los detalles del partido aquí.",
            "url": "https://elcomercio.pe/deporte-total/espana/real-madrid-vs-celta-en-vivo-hoy-por-dazn-movistar-plus-espn-horarios-donde-televisan-partido-y-en-que-canales-transmiten-en-directo-laliga-alineaciones-resultado-noticia/",
            "source": "elcomercio",
            "image": "https://elcomercio.pe/resizer/v2/CCSHPRKTFZE6BEJL3ADOTZDNJQ.jpg?width=1287&height=773&auth=992240992ab18142374dfab6c8e54ca19f3fb2e3fa9bd652b82eacc06a4f4cb5&smart=true",
            "category": "general",
            "language": "es",
            "country": "pe",
            "published_at": "2024-10-19T17:02:26+00:00"
        },
        {
            "author": "Sara Whitman",
            "title": "Rosie O’Donnell’s daughter arrested for child neglect after her 11-month-old is found near meth pipe",
            "description": "Police reportedly also found \"used and unused hypodermic needles\" under the child's crib.",
            "url": "https://pagesix.com/2024/10/19/celebrity-news/rosie-odonnells-daughter-arrested-for-child-neglect-after-baby-found-near-meth-pipe/",
            "source": "Post",
            "image": "https://pagesix.com/wp-content%2Fuploads%2Fsites%2F3%2F2024%2F10%2F91937222.jpg?quality%3D90%26strip%3Dall",
            "category": "general",
            "language": "en",
            "country": "zm",
            "published_at": "2024-10-19T17:02:23+00:00"
        },
        {
            "author": "Redazione",
            "title": "Marcello Caruso, coordinatore regionale di Forza Italia, ha partecipato all’evento di presentazione dei risultati dei primi due anni del governo Meloni",
            "description": "Caruso ha sottolineato che questo governo è il primo dopo il COVID ad essere eletto direttamente dai cittadini,",
            "url": "https://lavalledeitempli.net/2024/10/19/marcello-caruso-coordinatore-regionale-di-forza-italia-ha-partecipato-allevento-di-presentazione-dei-risultati-dei-primi-due-anni-del-governo-meloni/?utm_source=rss&utm_medium=rss&utm_campaign=marcello-caruso-coordinatore-regionale-di-forza-italia-ha-partecipato-allevento-di-presentazione-dei-risultati-dei-primi-due-anni-del-governo-meloni",
            "source": "lavalledeitempli",
            "image": null,
            "category": "general",
            "language": "it",
            "country": "it",
            "published_at": "2024-10-19T17:02:22+00:00"
        },
        {
            "author": null,
            "title": "Studentes ontdekken dat krakers al weken in hun kelder wonen: ’Ze gebruiken een kartonnen doos als wc’",
            "description": "Stel je voor dat je wekenlang leeft met krakers in je huis… Het overkwam enkele Antwerpse studenten. Afgelopen dinsdag ontdekte een schoonmaakster de spullen van krakers in de kelder van het studentencomplex in Antwerpen. Ze bracht meteen de huurders op de hoogte. „De politie vertelde ons dat ze weinig konden doen”",
            "url": "https://www.telegraaf.nl/nieuws/1702825654/studentes-ontdekken-dat-krakers-al-weken-in-hun-kelder-wonen-ze-gebruiken-een-kartonnen-doos-als-wc?utm_source=RSS&utm_medium=RSS",
            "source": "De Telegraaf - Nieuws Overzicht",
            "image": "https://www.telegraaf.nl/images/1200x630/filters:format(jpeg):quality(80)/cdn-kiosk-api.telegraaf.nl/087fd7ee-8e3c-11ef-9b60-767263a92e73.jpg",
            "category": "general",
            "language": "nl",
            "country": "nl",
            "published_at": "2024-10-19T17:02:19+00:00"
        },
        {
            "author": "Mike Moraitis",
            "title": "Steelers fans go off on Mike Tomlin withholding starting quarterback announcement leading into Jets game",
            "description": "Pittsburgh Steelers head coach Mike Tomlin was trying to be secretive about the team's decision on who would start in Week 7 between Justin Fields and Russell Wilson. For some reason, that angered some fans.",
            "url": "https://www.sportingnews.com/us/nfl/pittsburgh-steelers/news/steelers-fans-mike-tomlin-withholding-starting-quarterback-announcement/67975add0701173c92986853",
            "source": "Sporting News",
            "image": "https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2024-09/USATSI_24300423.jpg?h=0ab7c2e0&amp;itok=KnPW8KMu",
            "category": "sports",
            "language": "en",
            "country": "us",
            "published_at": "2024-10-19T17:02:17+00:00"
        },
        {
            "author": "The Associated Press",
            "title": "3 killed and 8 injured by gunfire following a Mississippi school’s football game",
            "description": "The gunfire was proceeded by a fight between two young men, according to the Holmes County Sheriff's Office",
            "url": "https://nationalpost.com/news/fatal-shooting-mississippi-school-football-game",
            "source": "nationalpost",
            "image": null,
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2024-10-19T17:02:10+00:00"
        },
        {
            "author": "AP News",
            "title": "Takeaways from AP’s reporting on how Arizona voters view the economy with the election close at hand",
            "description": "MESA, Ariz. (AP) — The Arizona economy by many measures is flourishing, but it doesn&#8217;t feel that way for a lot of voters in the presidential battleground state as they consider their choices on Nov. 5. Voters are hearing Democrats and Republicans promise to help the middle class if they win. But voters have heard [&#8230;]",
            "url": "https://www.mymotherlode.com/news/national/general-election/3442846/takeaways-from-aps-reporting-on-how-arizona-voters-view-the-economy-with-the-election-close-at-hand.html",
            "source": "mymotherlode",
            "image": null,
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2024-10-19T17:02:10+00:00"
        },
        {
            "author": "",
            "title": "WAC gewinnt Duell um Platz 3 bei BW Linz",
            "description": "Der WAC hat das Duell der beiden Überraschungsmannschaften der Fußball-Bundesliga gewonnen Der WAC hat das Duell der beiden Überraschungsmannschaften der Fußball-Bundesliga gewonnen. Die Wolfsberger siegten am Samstag in Linz gegen Blau-Weiß mit 1:0 (1:0) und lösten die Oberösterreicher auf Rang drei ab. Chibuike Nwaiwu erzielte mit seinem ersten Bundesliga-Tor den Siegestreffer (24.).",
            "url": "https://www.oe24.at/sport/fussball/fussball-national/bundesliga/wac-gewinnt-duell-um-platz-3-bei-bw-linz/609843223",
            "source": "oe24.at",
            "image": null,
            "category": "general",
            "language": "de",
            "country": "at",
            "published_at": "2024-10-19T17:02:05+00:00"
        },
        {
            "author": "Redacción EC",
            "title": "¿Cómo solicitar un crédito en Yape?",
            "description": "Yape brinda a sus clientes diversos préstamos a través de la opción ‘Créditos Yape’ con simples pasos. Todos los detalles aquí",
            "url": "https://elcomercio.pe/respuestas/que/como-solicitar-un-credito-de-yape-requisitos-y-pasos-tdpe-noticia/",
            "source": "elcomercio",
            "image": "https://elcomercio.pe/resizer/v2/2C5LBWOQNVANZKRQVUX6B627UE.jpg?width=1300&height=800&auth=7ba97c4140fbd6981f6db502ed72e4bea7e9d82bfbf83d4a9fae35e41356c7a7&smart=true",
            "category": "general",
            "language": "es",
            "country": "pe",
            "published_at": "2024-10-19T17:02:02+00:00"
        }
    ]
}
let x = [
    {
        "author": "J.C",
        "title": "Desmantelan dos ‘granjas humanas’ en España",
        "description": "La Guardia Civil Española desmanteló este sábado una banda criminal que mantenía dos «granjas humanas» con siete personas secuestradas, a quienes robaban y endeudaban para costear sus lujosas vidas. En la ciudad de Valencia, las autoridades arrestaron a dos hombres&#8230;Read more &#8250;La entrada Desmantelan dos &#8216;granjas humanas&#8217; en España se publicó primero en Remolacha - Noticias Republica Dominicana.",
        "url": "https://remolacha.net/2024/10/desmantelan-dos-granjas-humanas-en-espana/",
        "source": "Remolacha.net",
        "image": null,
        "category": "general",
        "language": "es",
        "country": "do",
        "published_at": "2024-10-19T17:03:55+00:00"
    }]

let createCard = (news) => {
    console.log(news)
    let card = document.createElement("div");
    card.setAttribute("class", "news-card");
    let img = document.createElement("img");
    img.setAttribute("src", news.image)
    img.setAttribute("alt", news.title);
    let heading = document.createElement("h2");
    heading.innerText = news.title;
    let auth = document.createElement("p");
    auth.innerText = `${news.author} | ${news.published_at}`;
    let description = document.createElement("p")
    description.innerText = news.description;
    card.append(img,heading,auth,description);
    container.append(card);
}

let showNews = (articles) => {
    console.log(Array.isArray(articles));
    articles.forEach((news) => {
        if(news.image)  
        createCard(news);
 } );
}


fetch(`https://api.mediastack.com/v1/news?access_key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        showNews(newsdata.data);
    })

    