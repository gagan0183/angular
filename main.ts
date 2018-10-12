import { LikeComponent } from './like.component';

var like = new LikeComponent(10, true);
like.onClick();

console.log(`count: ${like.likesCount} like: ${like.isSelected}`)