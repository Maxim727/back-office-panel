import { Component, Input } from '@angular/core'
import { PopularTagType } from 'src/app/shared/types/PopularTagType.type'

@Component({
  selector: 'mc-tag-list',
  templateUrl: './tagList.component.html'
})
export class TagsListComponent {
  @Input('tags') tagsProps: PopularTagType[]
  //@Input('tags') tagsProps: string[]
  //tagsProps for the access from within component
  //'tags' interface for the component where this will be injected
}
