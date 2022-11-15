export interface IButton {
    click(cssid: string): void

}


export interface ITextField {
    type(text: string): void
    clearAndType(text: string): void
    clear(): void
}


