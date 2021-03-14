export function set(name, value) {
    window.localStorage.setItem(name, JSON.stringify(value))
}
export function get(name, subst) {
    return JSON.parse(window.localStorage.getItem(name)||subst)
}