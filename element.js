export default class Element {
  constructor(tag, tagAttribute, tagValue, tagContent) {
    this.tag = tag.value;
    this.tagAttribute = tagAttribute.value;
    this.tagValue = tagValue.value;
    this.tagContent = tagContent.value;
  }
  createElement() {
    console.log(this.tag);
    const el = document.createElement(this.tag);
    el.style[this.tagAttribute] = this.tagValue;
    el.textContent = this.tagContent;
    return el;
  }
}
