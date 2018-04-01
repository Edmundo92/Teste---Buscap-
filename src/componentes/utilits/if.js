
export default function(props){

    if(props.tamanho !== 0){
        return props.children
    }else{
        return false
    }
}
