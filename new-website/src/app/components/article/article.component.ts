import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  @Input() title: string;
  @Input() src: string;
  @Input() duree: string;
  @Input() tarif: string;
  @Input() bienfaits: string;
  @Input() color: 'primary' | 'secondary' | 'tertiary' | 'grey' = 'primary';

}
