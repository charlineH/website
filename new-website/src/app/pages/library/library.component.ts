import { Component } from '@angular/core';
import { LibraryData } from '../../model/library-data.model';
import { ImageItem } from '../../model/massage.model';
import { MassageEnum } from '../../model/massage.enum';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
  readonly articleDataSource: LibraryData[] = [
    {
      name: 'title',
      type: 'string',
      default: '-',
      required: 'oui',
      description: 'Titre de l\'article',
    }, {
      name: 'src',
      type: 'string',
      default: '-',
      required: 'non',
      description: 'Le chemin de l\'image'
    }, {
      name: 'duree',
      type: 'string',
      default: '-',
      required: 'non',
      description: 'Pour les prestions. La durée de la prestation à afficher'
    }, {
      name: 'tarif',
      type: 'string',
      default: '-',
      required: 'non',
      description: 'Pour les prestions. La tarif de la prestation à afficher'
    }, {
      name: 'bienfaits',
      type: 'string',
      default: '-',
      required: 'non',
      description: 'Pour les prestions. La durée de la prestation à afficher'
    }
  ];
  readonly carouselDataSource: LibraryData[] = [
    {
      name: '[multiple]',
      type: 'boolean',
      default: 'false',
      required: 'non',
      description: 'true - Fait défiler toutes les photos du carrousel, \n false - Affiche seulement la photo correspondant au type'
    }, {
      name: 'type',
      type: 'string',
      default: '-',
      required: 'Oui si multiple vaut \'true\'',
      description: `Utiliser quand multiple est à false. Définit le type de photo à afficher.
       Valeur possible : 'taichi', 'massage', 'shiatsu', 'entreprise'`
    }
  ];
  readonly chapterDataSource: LibraryData[] = [
    {
      name: 'title',
      type: 'string',
      default: 'false',
      required: 'non',
      description: 'titre du chapitre'
    }, {
      name: 'img',
      type: 'string',
      default: '-',
      required: 'Non',
      description: `Chemin de l'image du chapitre`
    }
  ];
  readonly imgBandDataSource: LibraryData[] = [
    {
      name: 'img',
      type: 'string',
      default: '-',
      required: 'non',
      description: `Non obligatoire - Chemin de l'image du bandeau`
    }, {
      name: 'type',
      type: 'string',
      default: '-',
      required: 'Non',
      description: `Il est possible d'utiliser les images connues par le composant. Chaque image est associée à un type.
      Valeurs possibles : 'eye-bonze', 'ears-bonze', 'mouse-bonze', 'roses', 'taichi', 'primary', 'meditation', 'stage'`
    }, {
      name: 'title',
      type: 'string',
      default: '-',
      required: 'Non',
      description: `Titre du bandeau`
    }, {
      name: '[cadre]',
      type: 'boolean',
      default: 'false',
      required: 'Non',
      description: `true - Affiche un cadre sous le titre du bandeau`
    }
  ];
  readonly multipleImgBandDataSource: LibraryData[] = [
    {
      name: 'img',
      type: 'Massage[], Massage = {img: string, title: string, type: number, dark?: boolean}',
      default: '-',
      required: 'non',
      description: `Liste des massages`
    }, {
      name: '(select)',
      type: 'output',
      default: '-',
      required: 'Non',
      description: `Renvoi le type d'item sélectionné. Dans la page massage permet de `
    }
  ];
  readonly newsDataSource: LibraryData[] = [
    {
      name: 'left',
      type: 'boolean',
      default: 'false',
      required: 'non',
      description: `True, place l'image à gauche, false à droite.`
    }, {
      name: 'img',
      type: 'string',
      default: '-',
      required: 'Non',
      description: `Le chemin d'accès à l'image`
    }, {
      name: 'title',
      type: 'string',
      default: '-',
      required: 'Oui',
      description: `Le titre de la news`
    }, {
      name: 'buttonLabel',
      type: 'string',
      default: '-',
      required: 'Non',
      description: `Le libellé du bouton. Le bouton ne s'affiche pas si l'attribut n'est pas utilisé`
    }, {
      name: 'redirect',
      type: 'string',
      default: '-',
      required: 'Oui',
      description: `url de redirection au click sur le bouton. Elle peut être interne au site ou externe`
    }, {
      name: 'type',
      type: `'yellow' ou 'blue' ou 'grey'`,
      default: '-',
      required: 'Non',
      description: `Change la couleur du titre et du bouton de la news.
      Si aucun type n'est sélectionné la couleur est rouge franboise.`
    }
  ];

  readonly typesMassage: ImageItem[] = [
    {
      img: 'assets/images/massage/massage-ayurvedique-dos-300x200.jpg',
      title: 'Massage Ayurvédique',
      type: MassageEnum.AYURVEDIQUE
    }, {
      img: 'assets/images/massage/massage-vitalisant-300x200.jpg',
      title: 'Massage Vitalisant',
      type: MassageEnum.VITALISANT
    }, {
      img: 'assets/images/massage/massage-drainant-300x200.png',
      title: 'Massage Drainant',
      type: MassageEnum.DRAINANT,
      dark: true
    }, {
      img: 'assets/images/massage/massage-thai-jambes-300x200.jpg',
      title: 'Massage Thaïlandais',
      type: MassageEnum.THAILANDAIS,
      dark: true
    }
  ];

  htmlArticle = `
  <app-article
      src="assets/images/logo/misa-france-146x250.jpg"
      title="MASSAGE ENTRE ENFANTS 'MASSAGE IN SCHOOLS ASSOCIATION'">
      <p>
        Programme de massage enfants pour les écoles, accueils périscolaires, centre de loisirs, ateliers parents
        enfants. Les enfants se massent les uns les autres. Ils se demandent la permission et se remercient. Le massage
        se fait sur les vêtements. Il se compose de 15 mouvements simples et ludiques appelés "Routine". Des massages
        contés ou jeux kiné tactiles peuvent la compléter. Ni l'instructeur ni l'enseignant ne masse les enfants.
        L'adulte guide les mouvements. Le programme s'adresse aux enfants de 4 à 12 ans. (Dans le cadre des ateliers
        parents enfants, enfants et parents se massent réciproquement).
      </p>
    </app-article>
  `;
  htmlCaroussel = `
    Carrousel bloqué sur une seule photo
    <app-carrousel [multiple]="false" type="massage"></app-carrousel>

    Carrousel avec plusieurs photo
    <app-carrousel [multiple]="true"></app-carrousel>
    `;
  htmlChapter = `
  <app-chapter img="assets/images/taichi/tai-chi-s_accorder-445x203.png"
               title="Une pratique chinoise millénaire">
    <p class="chapter__teaser">
      Le Tai Chi, le Qi Gong et la méditation sont accessibles à tous. Leur pratique développe la souplesse,
      l’équilibre, la respiration, le lâcher-prise, la relation aux autres … globalement le bien-être au
      quotidien.
      <br/>
      Les cours associent des temps de relaxation, d’assouplissement, de méditation en parallèle des mouvements
      lents pour retrouver le plaisir de se mouvoir dans l’espace.
      <br/>
    </p>
  </app-chapter>
  `;
  htmlImgBand = `
      Bandeau avec cadre
      <app-img-band [cadre]="true" class="massage__band" title="Témoignages" type="stage"></app-img-band>

      Bandeau sans le cadre
      <app-img-band [title]="'Actualités'" [type]="'ears-bonze'"></app-img-band>

      Bandeau avec une image
      <app-img-band [cadre]="true" class="massage__band" img="assets/images/bandeau/IMG_4635_1680x658.png"
                    title="Les massages"></app-img-band>
  `;
  htmlMultipleImgBand = `
     <app-multiple-img-band (selectItem)="scrollToMassage($event)" [images]="typesMassage"></app-multiple-img-band>
  `;
  htmlNews = `
  Affichage de la photo à droite
  <app-news class="news__item"
            img="assets/images/taichi/cours-taichi-qigong-meditation.jpg"
            title="Confinement : Les cours de taichi sont suspendus jusqu'à nouvel ordre">
      Le confinement nous empêche de pratiquer ensemble. Il peut devenir aussi un formidable moment pour développer
      notre pratique personnelle.
      <br>Pour vous accompagner chaque semaine je vous propose des audios ou fiches. Nous nous
      appuyons sur ce qui a déjà été vu pendant les cours.
    </app-news>

  Affichage de la photo à gauche
  <app-news [left]="true"
            class="news__item"
            img="assets/images/taichi/cours-taichi-qigong-meditation.jpg"
            title="Confinement : Les cours de taichi sont suspendus jusqu'à nouvel ordre">
      Le confinement nous empêche de pratiquer ensemble. Il peut devenir aussi un formidable moment pour développer
      notre pratique personnelle.
      <br>Pour vous accompagner chaque semaine je vous propose des audios ou fiches. Nous nous
      appuyons sur ce qui a déjà été vu pendant les cours.
    </app-news>

  Affichage du bloc en jaune
  <app-news type="yellow"
            class="news__item"
            img="assets/images/taichi/cours-taichi-qigong-meditation.jpg"
            title="Confinement : Les cours de taichi sont suspendus jusqu'à nouvel ordre"
            buttonLabel="En savoir plus sur google ...">
      Le confinement nous empêche de pratiquer ensemble. Il peut devenir aussi un formidable moment pour développer
      notre pratique personnelle.
      <br>Pour vous accompagner chaque semaine je vous propose des audios ou fiches. Nous nous
      appuyons sur ce qui a déjà été vu pendant les cours.
    </app-news>

  Affichage du bloc en bleu
  <app-news type="blue"
            class="news__item"
            img="assets/images/taichi/cours-taichi-qigong-meditation.jpg"
            title="Confinement : Les cours de taichi sont suspendus jusqu'à nouvel ordre"
            buttonLabel="En savoir plus sur google ...">
      Le confinement nous empêche de pratiquer ensemble. Il peut devenir aussi un formidable moment pour développer
      notre pratique personnelle.
      <br>Pour vous accompagner chaque semaine je vous propose des audios ou fiches. Nous nous
      appuyons sur ce qui a déjà été vu pendant les cours.
    </app-news>

  Affichage du bloc en gris
  <app-news type="grey"
            class="news__item"
            img="assets/images/taichi/cours-taichi-qigong-meditation.jpg"
            title="Confinement : Les cours de taichi sont suspendus jusqu'à nouvel ordre"
            buttonLabel="En savoir plus sur google ...">
      Le confinement nous empêche de pratiquer ensemble. Il peut devenir aussi un formidable moment pour développer
      notre pratique personnelle.
      <br>Pour vous accompagner chaque semaine je vous propose des audios ou fiches. Nous nous
      appuyons sur ce qui a déjà été vu pendant les cours.
    </app-news>

  Affichage du bloc avec bouton et redirection vers l'externe
  <app-news class="news__item"
            img="assets/images/taichi/cours-taichi-qigong-meditation.jpg"
            title="Confinement : Les cours de taichi sont suspendus jusqu'à nouvel ordre"
            buttonLabel="En savoir plus sur google ..."
            redirect="http://www.google.fr">
      Le confinement nous empêche de pratiquer ensemble. Il peut devenir aussi un formidable moment pour développer
      notre pratique personnelle.
      <br>Pour vous accompagner chaque semaine je vous propose des audios ou fiches. Nous nous
      appuyons sur ce qui a déjà été vu pendant les cours.
    </app-news>

  Affichage du bloc avec bouton et redirection vers le site
  <app-news class="news__item"
            img="assets/images/taichi/cours-taichi-qigong-meditation.jpg"
            title="Confinement : Les cours de taichi sont suspendus jusqu'à nouvel ordre"
            buttonLabel="En savoir plus sur google ..."
            redirect="/massage">
      Le confinement nous empêche de pratiquer ensemble. Il peut devenir aussi un formidable moment pour développer
      notre pratique personnelle.
      <br>Pour vous accompagner chaque semaine je vous propose des audios ou fiches. Nous nous
      appuyons sur ce qui a déjà été vu pendant les cours.
    </app-news>
  `;
}
