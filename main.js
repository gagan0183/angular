"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var like = new like_component_1.LikeComponent(10, true);
like.onClick();
console.log("count: " + like.likesCount + " like: " + like.isSelected);
