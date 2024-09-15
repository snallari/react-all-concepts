//Children prop is a special property alll components have, is the foundation for composition model
//Composiition has 2 special properties containment and specialization
//Containment=they dont know children ahead of time
//Specialization=special cases
//Like sidebar, dialog
import "../App.css"

const Button=({children, backgroundColor})=>{
    return <button style={{backgroundColor}}>{children}</button>
}

const Alert=({children, backgroundColor})=>{
    return (
        <>
        <div className="overlay">
        </div>
        <div className="Alert">
            {children}
        </div>
        </>
    )
}
const DeleteButton=()=>{
    return <Button backgroundColor="red"></Button>
}
function ChildrenDialog(){
    return(
        <div className="App">
            <header>Little Lemon</header>
            <Alert>
                <h4>Hi Sai Help</h4>
                <p>Are you sure you want to proceed?</p>
                <DeleteButton/>
            </Alert>
            
        </div>
    )
}
export default ChildrenDialog

