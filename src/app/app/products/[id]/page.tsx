
interface Props{
    params:{
        id: string
    }
}


export default function Product({params}: Props){


    return(
        <div>Exibindo produto {params.id}</div>
    )
}