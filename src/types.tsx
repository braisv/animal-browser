export type AnimalItem = {
    id: number;
    url: string;
    title: string;
    description: string;
    image: string;
};

export interface AnimalListItem extends AnimalItem {
    cb: () => void;
}
