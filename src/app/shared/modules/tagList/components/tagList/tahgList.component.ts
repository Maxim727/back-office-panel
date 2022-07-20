import {Component, Input} from '@angular/core'
import { PopularTagType } from 'src/app/shared/types/PopularTagType.type'

@Component({
  selector: 'mc-tag-list',
  templateUrl: './tagList.component.html'
})
export class TagsListComponent {
  @Input('tags') tagsProps: PopularTagType[]
}
