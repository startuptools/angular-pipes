import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray } from '../utils/utils';

@Pipe({
  name: 'chunk',
})
export class ChunkPipe implements PipeTransform {
  transform(input: any, size = 1): any {
    if (!isArray(input)) {
      return input;
    }

    return [].concat.apply(
      [],
      input.map((_elem: any, i: number) => {
        return i % size ? [] : [input.slice(i, i + size)];
      })
    );
  }
}

@NgModule({
  declarations: [ChunkPipe],
  exports: [ChunkPipe],
})
export class NgChunkPipeModule {}
