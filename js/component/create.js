/**
 *
 * @param {String} el
 * @param {String} className
 * @param {HTMLElement} child
 * @param {HTMLElement} parent
 * @param  {...arr} dataAttr
 */
export default function create(el, classNames, children, parent, ...dataAttr) {
  let element = null;

  //el
  try {
    element = document.createElement(el);
  } catch (err) {
    throw new Error("Give a proper tag name");
  }

  //classNames
  if (classNames) element.classList.add(...classNames.split(" "));

  //children
  if (children && Array.isArray(children)) {
    children.forEach((item) =>item && element.append(item));
  } else if (children && typeof children === "object") {
    element.appendChild(children);
  } else if (children && typeof children === "string") {
    element.innerHTML = children;
  }

  //parent
  if (parent) {
    parent.appendChild(element);
  }

  //dataAttr
  if (dataAttr.length) {
    dataAttr.forEach(([attrName, attrValue]) => {
      if (attrValue == "") {
        element.setAttribute(attrName, "");
      }
      if (
        attrName.match(/value|id|placeholder|cols|rows|autocorrect|spellcheck/)
      ) {
        element.setAttribute(attrName, attrValue);
      } else {
        element.dataset[attrName] = attrValue;
      }
    });
  }
  return element;
}
