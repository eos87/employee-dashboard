export interface IColumn<T> {
    label: string;
    key: keyof T;
}
