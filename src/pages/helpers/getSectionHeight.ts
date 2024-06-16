export function getSectionHeight(): string {
    const headerHeight: number = document.getElementsByTagName("header")[0]?.clientHeight || 0;
    const footerHeight: number = document.getElementsByTagName("footer")[0]?.clientHeight || 0;
    const documentHeight: number = document.documentElement.clientHeight;

    const sectionHeight: number = documentHeight - headerHeight - footerHeight;

    return `${sectionHeight}px`;
}
