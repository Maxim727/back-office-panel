import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { TagsListComponent } from './components/tagList/tahgList.component'


@NgModule({
  imports: [CommonModule],
  declarations: [TagsListComponent],
  exports: [TagsListComponent]
})
export class TagListModule {}
