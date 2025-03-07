//Defining type Props in React

type Props = {
    message: string | number  //When the message is expecting string or number
    age?: number
}

const GreetComp = (props: Props) => {
    return (
        <div>
            <p>{props.message}</p>
            <p>I am {props.age} age old</p>
        </div>
    )
}


// ANOTHER METHOD TO DEFINE PROPS

// const GreetComp: React.FC<{ message: string }> = ({ message }) => {
//     return (
//         <div>
//             <p>{message}</p>
//         </div>
//     )
// }


const BasicProps = () => {
    return (
        <div>
            <GreetComp message="I am Ferdinand" age={20} />
            <GreetComp message="My sister is Smartcher"  />

        </div>
    )
}

export default BasicProps