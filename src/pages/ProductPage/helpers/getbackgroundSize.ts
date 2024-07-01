export function getBackgroundSize(index: number, rating: number): number {
    return (rating - index) * 100;
}
