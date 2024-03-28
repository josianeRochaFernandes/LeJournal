import { Injectable } from '@angular/core';
import {Article} from "../../models/article.model";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  listArticle: Array<Article> = [
    {
      id:10,
      titre: "Crash d’un avion au Népal",
      date: new Date(2023, 0,15),
      listCategories: ["Actualite", "Divers"],
      author: "Maxime Mainguet",
      image: "https://media.ouest-france.fr/v1/pictures/MjAyMzAxNjcwZDNlNDBjZTliNWUyYzM3Y2JlY2I1MzBhZjk2MjU?width=940&focuspoint=45%2C38&cropresize=1&client_id=bpeditorial&sign=d386a316d0a0e69039867f505689e0479fdf3ec41ce14acc1de2fe237af1844c",
      description: "Un avion de la compagnie Yeti Airlines s’est écrasé ce dimanche 15 janvier 2023 à Pokhara",
      content1:
        "L’appareil, un ATR 72-500, a décollé de Katmandou, la capitale du Népal, à 10 h 30 heure locale (5 h 45 heure de Paris) et s’est écrasé moins d’une demi-heure plus tard dans une gorge située dans le quartier de Nayagaun, entre le nouvel et l’ancien aéroport de Pokhara, une ville touristique du centre du pays, au pied de l’Annapurna. « J’ai vu l’avion trembler, bouger de gauche à droite, puis il a soudainement piqué du nez et plongé dans la gorge », a expliqué à l’agence Reuters un témoin de l’accident. Un témoignage que corrobore une vidéo postée sur Twitter par un journaliste. A la suite du crash, l’avion a pris feu et n’a pu être éteint que deux heures plus tard.",
        content2: "L’avion de la Yeti Airlines avait embarqué 72 personnes : 68 passagers et 4 membres d’équipages (deux pilotes et deux hôtesses). Selon un bilan communiqué par la police locale, l’accident a fait au moins 68 morts. Les corps des victimes ont été transportés à l’Académie des sciences de la santé de Pokhara pour que des autopsies puissent être réalisées. Selon Nepal Live Today , deux passagers auraient été retrouvés vivants mais très grièvement blessés. Ils ont été transportés à l’hôpital.",

    },

    {
      id:9,
      titre: '"Noé, la force de vivre", nouvelle comédie musicale',
      date: new Date(2023, 0,15),
      listCategories: ["Arts et Culture"],
      author: "Odile Morain",
      image: "https://www.francetvinfo.fr/pictures/xQXX9wOH0pISryGKHAMgPN94mbM/0x0:1280x720/944x531/filters:format(webp)/2023/01/15/63c4159471b9b_noe-la-force-de-vivre.png",
      description: "Une grande fresque musicale humaniste, qui met en avant l'écologie, à partager en famille dès le 21 janvier 2023",
      content1: 'Sur scène, 34 artistes transportent le public dans un récit riche d\'actions, d\'émotions et d\'effets visuels portés par de puissantes musiques pop symphoniques. À leurs côtés, des animaux du monde entier plus vrais que nature. Il y a l\'ours polaire, la girafe, un lion, un pingouin, un gorille et tous ceux qui habitent l\'arche de Noé. Et puis, il y a aussi Boom : l\'éléphanteau. "Ça change ! En tant que danseuse c\'est la première fois que j\'ai à faire à un animal, il faut faire corps avec lui ", s\'amuse la marionnettiste. Toutes ces peluches ont été confectionnées dans un atelier parisien. A quelques jours de la première, la jeune chanteuse Maëline les découvre avec joie. "J\'étais un peu sous le choc parce que je ne m\'attendais pas à ce que ça soit aussi joli", dit-elle avec un grand sourire.',
      content2: 'L\'histoire de Noé résonne également comme le symbole de la protection de notre planète. Ce spectacle souhaite envoyer un message sur les enjeux écologiques actuels. "Jamais l\'histoire de Noé n\'a été autant d\'actualité qu\'aujourd\'hui face à la montée des eaux, le réchauffement climatique, la fonte des glaces. On se dit qu\'on est peut-être à l\'aube d\'un nouveau déluge et qu\'on éveillera à travers ce spectacle certaines consciences sur les enjeux qui se jouent pour notre planète", confie Essaï Altounian qui interprète le rôle de Noé. En partenariat avec le Programme des Nations unies pour l\'environnement, un arbre sera planté pour chaque billet acheté.',
    },
    {
      id:8,
      titre: "Démantèlement d'usine de cigarettes contrefaites",
      date: new Date(2023, 0,15),
      listCategories: ["Economique", "Crime"],
      author: "Radio France",
      image: "https://www.francetvinfo.fr/pictures/4IxwJ0LZnTS919_ybZClVC2Igq4/0x0:429x242/944x531/filters:format(webp)/2023/01/15/phpewOC9Q.png",
      description: "La plus grosse usine de cigarettes contrefaites de l'histoire a été démantelée en France ce jeudi 12 janvier",
      content1: 'Il y avait tout pour fabriquer, conditionner, expédier les cigarettes de contrefaçon, y compris un espace de vie pour ne pas avoir à quitter les lieux. Les gendarmes ont démantelé ce jeudi 12 janvier, près de Rouen, la plus importante fabrique clandestine de cigarettes à ce jour en France. Plus de 100 tonnes de produits ont été saisies. Dans le détail, il y a, notamment, 55 tonnes de cigarettes et 50 tonnes d\'étiquettes, filtres, papiers, emballages. Il y a aussi 18 tonnes de résidus de tabac et de déchets de cigarettes. Le prix de revente de tabac contrefait est évalué à 13,7 millions d\'euros, selon la gendarmerie nationale. C\'est, à ce jour, la plus importante fabrique clandestine découverte à ce jour en France.',
      content2: '"Il s\'agit à ce jour de la plus grande fabrique de cigarettes de contrefaçon en activité découverte en France", confirme ce dimanche à franceinfo le colonel Thierry Jourdren qui commande la section de recherches de Rouen. La première l\'avait été en décembre 2021 par les douanes à Poincy, une petite commune de Seine-et-Marne de 750 habitants. Depuis cette "première", deux autres ateliers clandestins ont été mis au jour : un site de conditionnement à La Longueville (Nord) et un autre lieu de stockage à Poincy. Le 12 janvier, les gendarmes, alertés par Europol fin 2022 sur la présence d\'un trafic international de cigarettes dans la zone industrielle de Saint-Aubin-lès-Elbeuf, près de Rouen, découvrent une véritable usine intégrée.',

    },
    {
      id:7,
      titre: "Soupçonnée de maltraitance en Ehpad",
      date: new Date(2023, 0,15),
      listCategories: ["Sante", "Crime"],
      author: "Radio France",
      image: "https://www.francetvinfo.fr/pictures/fKkBBX49QIbXR3ko-E_7KY4hhAI/0x0:4721x2663/944x531/filters:format(webp)/2023/01/15/php3zdmsh.jpg",
      description: "Une aide-soignante de 48 ans est soupçonnée d'avoir maltraité des résidents d'Ephad",
      content1: 'Une aide-soignante est soupçonnée d\'avoir maltraité trois résidents dans la maison de retraite "Les jardins de Maniban" à Blagnac, près de Toulouse, indique France Bleu Occitanie. Âgée de 48 ans, elle a été mise à pied par la direction de l\'établissement. Une enquête a été ouverte par la police nationale. La salariée a déjà reconnu les faits et doit rencontrer ce lundi la direction pour répondre de ses actes. Elle devrait être licenciée dans la foulée.',
      content2: 'Fin décembre 2022, la direction de la maison de retraite avait des soupçons. Elle a donc décidé de mettre à pied sa salariée et de déposer une main-courante. L\'une des familles des résidents a également porté plainte de son côté contre l\'aide-soignante qui travaille dans cet établissement depuis 2019. Diplômée d\'Etat, l\'aide-soignante avait suivi en 2022 une formation sur les maltraitances. "C\'est une employée qui n\'éveillait vraiment aucun soupçon. Elle n\'était pas épuisée, tous ses entretiens et ses points étapes s\'était bien passés", explique la direction de l\'établissement.',
    },
    {
      id:6,
      titre: "Réforme des retraites",
      date: new Date(2023, 0,15),
      listCategories: ["Actualite", "Politique"],
      author: "SudOuest.fr",
      image: "https://media.sudouest.fr/13679163/1000x500/fdsfdsfdsf.jpg?v=1673776675",
      description: "Nouveau sondage : près de 7 Français sur 10 y seraient hostiles",
      content1: 'Une étude de l’Ifop pour le JDD assure que 68 % des Français s’opposent à la réforme des retraites portée par le gouvernement, le report de l’âge légal à 64 ans agissant comme un « repoussoir ». Les études d’opinion se suivent et se ressemblent, et ce n’est assurément pas une bonne nouvelle pour le gouvernement. Dès mercredi, au lendemain des annonces d’Élisabeth Borne concernant la réforme des retraites, un sondage Elabe pour BFMTV faisait état du fait que près de 6 Français sur 10 (59 %) étaient opposés aux mesures annoncées par la Première ministre.',
      content2: 'Ce dimanche, le JDD publie un nouveau sondage, cette fois réalisé par l’Ifop le lendemain des annonces de la cheffe du gouvernement. Le résultat est encore plus négatif pour les défenseurs du projet : « 68 % des Français interrogés […] s’opposent ainsi à ce que prépare le gouvernement. Seuls 32 % s’y déclarent favorables », assure le Journal du dimanche. Dans le détail, seuls les partisans d’Emmanuel Macron se disent favorables aux propositions du gouvernement (76 %), mais même chez eux, 32 % y sont tout de même hostiles. Chez les sympathisants des Républicains, dont le vote à l’Assemblée pourrait être décisif afin d’éviter un éventuel recours à l’article 49.3, une très fragile majorité se dégage, avec 51 % d’opinions favorables.',
    },

    {
      id:5,
      titre: "22 départements en vigilance orange",
      date: new Date(2023, 0,15),
      listCategories: ["Divers"],
      author: "France Info",
      image: "https://www.francetvinfo.fr/pictures/r-HOeIpl9LXuprWVFWZ2zsASxkc/0x0:4134x2324/944x531/filters:format(webp)/2023/01/15/63c41df1b53b2_maxnewsworldfive652477.jpg",
      description: "Météo France place 22 départements du Nord-Ouest en vigilance orange pour vents violents",
      content1:'La vigilance orange sera effective dès 21 heures, dimanche, sur les départements bretons et la Loire-Atlantique, avant d\'être élargie à partir de minuit. La dépression nommée Gérard arrive sur l\'Hexagone. Météo France a placé 22 départements du quart nord-est du pays en vigilance orange pour vents violents, dimanche 15 janvier. Elle sera effective dès 21 heures sur les départements bretons (Finistère, Morbihan, Côtes-d\'Armor et Ille-et-Vilaine), ainsi que sur la Loire-Atlantique, avant d\'être élargie à partir de minuit, détaille le prévisionniste. ',
      content2: 'La Seine-Maritime, la Manche, le Calvados, l\'Eure, l\'Orne, l\'Eure-et-Loir, le Loir-et-Cher, la Sarthe, la Mayenne, le Maine-et-Loire, l\'Indre-et-Loire, l\'Indre, la Vienne, les Deux-Sèvres, la Vendée, la Charente-Maritime et la Charente rejoindront alors les départements déjà en vigilance. Le Cantal et la Lozère ont par ailleurs été placés en vigilance orange pour "neige-verglas", à partir de 3 heures du matin et doit durer jusqu\'à 18 heures, lundi, selon le prévisionniste, qui prévoit de la neige "à partir de 600-800 mètres" d\'altitude, sur le sud du Massif central.  ',
    },
    {
      id:4,
      titre: "Indemnité carburant, réclamer la prime",
      date: new Date(2023, 0,15),
      listCategories: ["Economique"],
      author: "Aurélie Lebelle",
      image: "https://www.leparisien.fr/resizer/U-zkE2v7SOjqgGWCJ03ALDvakCA=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/OHTXNQ5VUFBQJIRM6PAPIW2MFM.jpg",
      description: "Comment réclamer la prime de 100 euros à partir du 16 janvier ?",
      content1: 'Top départ, ce lundi, pour réclamer l’indemnité carburant. Cette prime de 100 euros, versée en une fois en 2023, peut être demandée par 10 millions de foyers fiscaux. Un dispositif d’aide qui « équivaut à une ristourne de 10 centimes par litre de carburant sur la base de 12 000 km par an effectués en moyenne pour ses déplacements professionnels », a assuré ce vendredi Gabriel Attal, le ministre des Comptes publics, lors de la présentation de cette mesure dans un centre des impôts de Nice (Alpes-Maritimes). Cette nouvelle aide remplace le coup de pouce à la pompe, terminé le 1er janvier et qui, depuis le 16 novembre dernier, prenait en charge 10 centimes par litre pour tous les automobilistes. Au total, depuis sa mise en place en avril 2022, où la remise était de 18 centimes, cette ristourne générale sur la taxation des carburants aura coûté à l’État 8 milliards d’euros, soit « l’équivalent du budget du ministère de la Justice », selon Gabriel Attal.',
      content2: '« La ristourne générale aidait y compris des Français qui n’ont pas besoin de leur voiture pour aller travailler, des Français qui ont des revenus qui leur permettent d’absorber l’inflation, a-t-il souligné. Je préfère aider l’infirmière libérale qui a besoin de sa Twingo pour faire sa tournée plutôt que la famille très aisée qui prend son SUV pour autre chose. » Le versement de la nouvelle aide, dont l’enveloppe s’élève à un milliard d’euros, n’est pas automatique. Pour en bénéficier, il faudra en faire la demande sur le site des impôts jusqu’au 28 février. Les critères : prendre un véhicule (voiture, deux-roues, même électrique) pour se rendre au travail et avoir un revenu fiscal de référence par part inférieur ou égal à 14 700 euros annuels.',
    },
    {
      id:3,
      titre: "Gisement géant de terres rares découvert en Suède",
      date: new Date(2023, 0,13),
      listCategories: ["Actualite", "Economique"],
      author: "Louise Brosolo",
      image: "https://s.france24.com/media/display/3cbc1058-9362-11ed-865a-005056a90321/w:980/p:16x9/000_336X4ML.webp",
      description: "Le plus grand gisement connu de terres rares d’Europe vient d’être découvert en Laponie suédoise",
      content1: "Une bonne nouvelle pour l’Union européenne qui, avec la transition verte, a un besoin grandissant de métaux stratégiques contenus dans les terres rares. Cette découverte pourrait aider l'Europe à s'affranchir de sa dépendance à la Chine. Le timing ne pouvait être meilleur. L’annonce a été faite jeudi 12 janvier, pendant la visite à Kiruna, en Suède, des membres de la Commission européenne et de sa présidente, Ursula von der Leyen, réunis pour un séminaire marquant le début de la présidence suédoise de l'Union européenne. Un gisement estimé à un million de tonnes de terres rares a été identifié dans cette même région de Kiruna, dans le Grand Nord suédois.",
      content2: '"Il s\'agit du plus grand gisement connu d\'éléments de terres rares dans notre partie du monde", s\'est réjoui jeudi Jan Moström, le PDG du groupe minier suédois LKAB qui a fait la découverte, ajoutant que la future mine "pourrait devenir un élément de base important pour la production des matières premières critiques absolument cruciales pour la transition verte". La découverte de cette mine pourrait en effet être une aubaine pour l’Europe, qui cherche à réduire sa dépendance aux approvisionnements extérieurs, notamment en ce qui concerne les métaux des terres rares. Ceux-ci sont stratégiques dans plusieurs domaines de l’industrie (métallurgie, nouvelles technologies, armement) et notamment dans l’industrie dite "verte". Le samarium sert, par exemple, à la fabrication des aimants permanents des batteries des véhicules électriques. Le néodyme est lui utilisé pour produire les très puissants aimants permanents des éoliennes offshore.',
    },
    {
      id:2,
      titre: "Rehausser le niveau au collège ?",
      date: new Date(2023, 0,12),
      listCategories: ["Education"],
      author: "Johan Bescond",
      image: "https://media.ouest-france.fr/v1/pictures/MjAyMzAxNDU5NDIxN2E3MTgxNThjMDlkNWQzY2M4NmJjNjA0Zjk?width=630&height=354&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=14070f6174dc2367cefeefb118a675008720607bc8c01859306ec55ac384e8ae",
      description: "Des circulaires relatives au renforcement de l’apprentissage au collège sont publiées",
      content1: 'La mesure est loin d’être une révolution. Comme ses prédécesseurs Jean-Michel Blanquer et Najat Vallaud-Belkacem, le ministre de l’Éducation Pap Ndiaye plaide pour que la dictée soit pratiquée quotidiennement en CM1 et CM2 pour remédier aux difficultés éprouvées par les collégiens en matière d’orthographe. Si le niveau des élèves en fin de primaire s’améliore, des lacunes persistent dans l’écriture, la lecture, mais aussi le calcul mathématique : « À l’entrée en 6e, 27 % des enfants n’ont pas le niveau en français. La dégradation de l’orthographe est préoccupante », jugeait récemment Pap Ndiaye sur BFM TV. Selon une étude menée à quatre reprises depuis 1987 sur l’orthographe, pour la même dictée énoncée aux différentes générations, un jeune de CM2 faisait dix fautes il y a plus de trente ans, contre vingt aujourd’hui, note la Depp, le service statistique du ministère.',
      content2: 'La pratique quotidienne de cet exercice incontournable n’est pas la seule mesure publiée ce jeudi 12 janvier par le ministère de l’Éducation nationale, au Bulletin officiel, pour renforcer le niveau au collège. Voici ce qui est prévu pour la rentrée de septembre 2023. Pour les CM1, CM2 et 6e, le ministère de l’Éducation nationale souhaite que les élèves pratiquent deux heures par jour les travaux de rédaction et la lecture à voix haute de textes, appelée « la fluence » dans le jargon. Cet exercice permet d’évaluer la capacité des enfants à lire avec fluidité un certain nombre de mots à la minute, et donc de détecter les fragilités de certains d’entre eux. L’objectif ? Atteindre à la fin du CM2 la moyenne de 120 mots, en respectant le rythme et la ponctuation, en soixante secondes chrono. « Aux évaluations de 6e de 2022, ils ne sont que 56 % à y parvenir, et à peine 39 % en réseau d’éducation prioritaire », note Édouard Geffray, directeur général de l’enseignement scolaire.',
    },
    {
      id:1,
      titre: "Une femme tous les trois jours",
      date: new Date(2023, 0,2),
      listCategories: ["Actualite", "Crime"],
      author: "Josiane Rocha",
      image: "https://lesjours.fr/ressources/image/ep1-feminicides-2023-img-header.jpeg",
      description: "En 2023, « Les Jours » enquêtent sur les féminicides et recensent, chaque mois, ces meurtres sexistes.",
      content1:"Elles sont 109 à avoir perdu la vie sous les coups de leur partenaire, leur conjoint, leur concubin ou leur ex en 2022, d’après le collectif Féminicides par compagnons ou ex. La dernière femme tuée de l’année l’a été samedi 31 décembre à Charleville-Mézières (Ardennes). Son compagnon, qui, d’après le parquet, a en partie reconnu les faits en garde à vue, l’aurait poignardée à mort. Elle avait 23 ans. Le nombre officiel et définitif de 2022, lui, ne sera donné que dans quelques mois par la délégation aux victimes (DAV). Cette unité rattachée au ministère de l’Intérieur, qui associe policiers et gendarmes, publie chaque année depuis 2006 un rapport sur les « morts violentes au sein du couple ». D’après la DAV, 122 femmes ont été tuées dans de telles circonstances en 2021. Elles étaient 102 en 2020, 146 en 2019, 118 en 2018, 130 en 2017…",
      content2: 'Tous ces crimes sont des féminicides. Des meurtres de femmes commis par des hommes. En l’espèce, ils correspondent à ceux que l’Organisation mondiale de la santé (OMS) définit depuis 2012 comme des « féminicides intimes », « commis par un époux ou par un petit ami, actuel ou ancien ». C’est-à-dire un meurtre sexiste qui survient dans l’intimité présente ou passée d’une relation de couple entre l’auteur, un homme, et la victime, une femme. D’après l’OMS, ils représentent plus du tiers (35 %) de tous les meurtres de femmes commis dans le monde. En France, 29 % de l’ensemble des homicides survenus dans le pays entre 2016 et 2021 ont été commis au sein de la famille et les deux tiers des victimes sont des femmes, selon le service statistique ministériel de la Sécurité intérieure. Si l’on s’en tient aux homicides conjugaux, plus de huit sur dix (82 %) sont des « féminicides intimes ». En 2021, près d’un tiers des victimes avaient déjà subi des violences antérieures. Sur celles-ci, 64 % les avaient signalées aux forces de l’ordre. ',
    }
  ];

  listCategorie: Array<string> =["Actualite","Sante", "Politique", "Economique", "Divers", "Arts et Culture", "Education", "Crime"];
  constructor() { }


  getArticleByCategory(category: string): Array<Article>{
    let list = [];
    for (let article of this.listArticle){
      for(let cat of article.listCategories){
        if(cat==category){
          list.push(article);
        }
      }
    }
    return list;
  }

  getArticleById(id: number)
  {
    let result!: Article;
    for (let article of this.listArticle){
      if(article.id==id)
      {
        result=article;
      }
    }

    return result;
  }

  // on ajoute le nouveau article dans le debut de la liste pour afficher toujours l'article le plus récents
  addNewArticle(article: Article){
    const id = this.listArticle.length+1;
    const newArticle = {id: id, titre : article.titre, date : new Date(), listCategories: article.listCategories, author: article.author, image: article.image, description: article.description, content1: article.content1, content2: article.content2};
    this.listArticle.unshift(newArticle);
  }


}
