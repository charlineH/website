import { Component, Input } from '@angular/core';
import { LibraryData } from '../../../model/library-data.model';

@Component({
  selector: 'app-library-component',
  templateUrl: './library-component.component.html',
  styleUrls: ['./library-component.component.scss']
})
export class LibraryComponentComponent {
  @Input() dataSource: LibraryData[];
  @Input() htmlCode: string;
  @Input() title: string;

  readonly displayedColumns: string[] = ['name', 'type', 'default', 'required', 'description'];

}
