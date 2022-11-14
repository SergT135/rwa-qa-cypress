export interface Button {
    click(): void

}

export interface TextField {
    type(text: string): void
    clearAndType(text: string): void
    clear(): void
}
