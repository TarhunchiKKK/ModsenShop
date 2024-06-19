export function getBurgerMenuHeight(): string {
    const headerHeight: number = document.getElementsByTagName("header")[0].offsetHeight;
    const documentHeigh: number = document.documentElement.clientHeight;

    return `${documentHeigh - headerHeight}px`;
}
