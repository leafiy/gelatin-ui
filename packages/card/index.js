import UiCard from "./card.vue";

UiCard.install = function(Vue) {
  Vue.component(UiCard.name, UiCard);
};

export default UiCard;
