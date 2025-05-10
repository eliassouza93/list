
interface TextType {
    datas: string
}

export function Post({ datas }: TextType) {
    return (
        <div>
            <p> {datas} </p>
        </div>
    )
}