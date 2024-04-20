export type InputImagesProps = {
    value : File[]
    onChange:(files:File[]) => void
    children : React.ReactNode,
    className?:string,
}
export type ImagesInputContextProps = {
    value:File [],
    onChange:(files:File[]) => void,
    removeImage:(index:number) => void,
    imagePreviews ?: string[],
    setImagePreviews:Dispatch<SetStateAction<string []>>,
}