import List from "./clones/List";
import Row from "./clones/Row";

export const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
function CloneElemenyP1(props) {
    const {details}=props
    const k = Object.values(details)
    console.log("details", k)
    return (<div>
        <h1>Test</h1>
        <div>{k.map((v)=><div>{v}</div>)}</div>
        <List>
            {products.map((p)=><Row  key={p.id} title={p.title}/>)}
        </List>
    </div>)
}
export default CloneElemenyP1;


